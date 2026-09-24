#!/usr/bin/env python3
"""
SATLab UET — Google Scholar Publications Synchronizer
Synchronizes publications regularly from Google Scholar:
Profile: https://scholar.google.com/citations?user=kq2ht6wAAAAJ&hl=en (Dr. To Van Khanh)
"""

from __future__ import annotations

import html
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

SCHOLAR_USER_ID = "kq2ht6wAAAAJ"
SCHOLAR_URL = (
    f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en&cstart=0&pagesize=100"
)

# Known SATLab roster for author highlighting
SATLAB_ROSTER = [
    "To Van Khanh", "Van Khanh To", "Tô Văn Khánh", "T Van Khanh", "TV Khanh", "VK To", "K Van To", "TK Van",
    "Kieu Van Tuyen", "Van Tuyen Kieu", "Kiều Văn Tuyên", "T Van Kieu",
    "Truong Xuan Hieu", "Xuan Hieu Truong", "Trương Xuân Hiếu", "HX Truong", "HT Xuan", "H Truong Xuan",
    "Vu Thanh Huong", "Thanh Huong Vu", "Vũ Thanh Hường", "H Thanh Vu", "HV Thanh",
    "Dao Xuan Nghia", "Xuan Nghia Dao", "Đào Xuân Nghĩa", "DX Nghia", "ND Xuan",
    "Nguyen Kim Trung Duc", "Kim Trung Duc Nguyen", "Nguyễn Kim Trung Đức", "DTK Nguyen",
    "Le Quy Duong", "Quy Duong Le", "Lê Quý Dương", "DQ Le",
    "Hoang Linh Chi", "Linh Chi Hoang", "Hoàng Linh Chi", "CL Hoang",
    "Nguyen Tan Nguyen", "Tan Nguyen Nguyen", "Nguyễn Tấn Nguyên", "NT Nguyen",
    "Nguyen Hong Quan", "Hong Quan Nguyen", "Nguyễn Hồng Quân", "QN Hong",
    "Hoang Gia Bao", "Gia Bao Hoang", "Hoàng Gia Bảo", "BG Hoang",
    "Nguyen Chi Phong", "Chi Phong Nguyen", "Nguyễn Chí Phong", "PC Nguyen",
    "Pham Ngoc Hai Duong", "Ngoc Hai Duong Pham", "Phạm Ngọc Hải Dương",
    "Do Duc Long", "Duc Long Do", "Đỗ Đức Long", "DD Van", "L Duc Do",
    "Dang Anh Phuong", "Anh Phuong Dang", "Đặng Anh Phương", "P Anh Dang",
    "Nguyen Huu Tan", "Huu Tan Nguyen", "Nguyễn Hữu Tấn", "HT Nguyen",
    "Pham Quang Minh", "Quang Minh Pham", "Phạm Quang Minh", "PQ Minh",
]


def normalize_title(title: str) -> str:
    """Normalize title for fuzzy matching."""
    s = title.lower()
    s = re.sub(r"[^a-z0-9]", "", s)
    return s


# Canonical mappings for titles that may appear shortened or differently on Google Scholar
TITLE_ALIASES = {
    normalize_title("Compact SAT Encoding for Power Peak Minimization"): normalize_title(
        "Compact SAT Encoding for Power Peak Minimization in Assembly Line Balancing"
    ),
}


def slugify(text: str) -> str:
    """Generate a clean URL/id slug."""
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    return text[:60].strip("-")


def fetch_scholar_html() -> str:
    """Fetch profile HTML from Google Scholar with resilient headers."""
    req = urllib.request.Request(
        SCHOLAR_URL,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            return resp.read().decode("utf-8")
    except urllib.error.URLError as err:
        print(f"[!] Error fetching Google Scholar: {err}", file=sys.stderr)
        return ""


def parse_scholar_publications(html_content: str) -> list[dict]:
    """Parse publications list from Google Scholar profile page."""
    rows = re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', html_content, re.DOTALL)
    items = []

    for r in rows:
        # Title & link
        t_match = re.search(
            r'<a[^>]+href=["\']([^"\']+)["\'][^>]*class=["\']gsc_a_at["\'][^>]*>(.*?)</a>',
            r,
        )
        if not t_match:
            t_match = re.search(
                r'<a[^>]+class=["\']gsc_a_at["\'][^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
                r,
            )
        if not t_match:
            continue

        raw_href = t_match.group(1)
        scholar_link = (
            f"https://scholar.google.com{raw_href}"
            if raw_href.startswith("/")
            else raw_href
        )
        title = html.unescape(t_match.group(2).strip())

        # Authors & Venue
        divs = re.findall(r'<div class="gs_gray">(.*?)</div>', r)
        raw_authors = html.unescape(divs[0].strip()) if len(divs) > 0 else ""
        raw_venue = (
            html.unescape(re.sub(r"<[^>]+>", "", divs[1])).strip()
            if len(divs) > 1
            else ""
        )

        # Citations
        c_match = re.search(r'<a[^>]+class="gsc_a_ac[^"]*"[^>]*>(\d+)</a>', r)
        citations = int(c_match.group(1)) if c_match else 0

        # Year
        y_match = re.search(r'<span class="gsc_a_h[^"]*"[^>]*>(\d{4})</span>', r)
        year = int(y_match.group(1)) if y_match else 0

        authors = [a.strip() for a in raw_authors.split(",") if a.strip()]
        if not authors and raw_authors:
            authors = [raw_authors]

        items.append(
            {
                "title": title,
                "authors": authors,
                "venue": raw_venue,
                "year": year,
                "citations": citations,
                "scholar_link": scholar_link,
            }
        )

    return items


def infer_publication_type(title: str, venue: str) -> str:
    """Infer publication type from venue string."""
    v_lower = venue.lower()
    t_lower = title.lower()
    if any(k in v_lower for k in ["journal", "transactions", "computational optimization", "formal methods in system design", "notes in theoretical computer science", "pesquisa operacional", "cybernetics and information technologies", "rairo"]):
        return "Journal"
    if any(k in v_lower for k in ["conference", "symposium", "workshop", "proceedings", "icaart", "iscit", "kse", "csonet"]):
        return "Conference"
    if "arxiv" in v_lower or "preprint" in v_lower or "arxiv" in t_lower:
        return "Preprint"
    if "book" in v_lower or "chapter" in v_lower:
        return "Book Chapter"
    return "Journal" if "10." in v_lower else "Conference"


def infer_research_pillar(title: str, venue: str) -> tuple[str, list[str]]:
    """Infer research pillar and keywords from paper title and venue."""
    text = (title + " " + venue).lower()
    if any(k in text for k in ["antibandwidth", "bandwidth", "labeling", "radio", "frequency assignment", "fap"]):
        return "graph_labeling_fap", ["graph-labeling", "antibandwidth", "exact-algorithms"]
    if any(k in text for k in ["packing", "strip packing", "bin packing", "cutting stock"]):
        return "packing_cutting", ["2d-packing", "cutting-stock", "combinatorial-optimization"]
    if any(k in text for k in ["scheduling", "assembly line", "line balancing", "job shop", "nurse rostering", "train rescheduling", "power peak"]):
        return "line_balancing_scheduling", ["scheduling", "line-balancing", "industrial-optimization"]
    if any(k in text for k in ["sat", "smt", "encoding", "cardinality", "clause", "rasat", "solver", "symmetry"]):
        return "encodings_solvers", ["sat-encodings", "smt-solving", "automated-reasoning"]
    return "encodings_solvers", ["combinatorial-optimization", "sat-algorithms"]


def match_highlighted_authors(authors: list[str]) -> list[str]:
    """Find authors matching the SATLab roster."""
    highlighted = []
    for a in authors:
        a_clean = a.lower()
        for member in SATLAB_ROSTER:
            m_clean = member.lower()
            if a_clean == m_clean or m_clean in a_clean or a_clean in m_clean:
                highlighted.append(a)
                break
    return list(dict.fromkeys(highlighted))


def generate_bibtex(item: dict, slug_id: str) -> str:
    """Generate a standard BibTeX record."""
    first_author = item["authors"][0] if item["authors"] else "SATLab"
    last_name = first_author.split()[-1] if first_author else "Author"
    year = item.get("year", 2026)
    key = f"{last_name.lower()}{year}{slug_id.split('-')[-1]}"
    authors_str = " and ".join(item.get("authors", []))
    pub_type = item.get("type", "Journal")
    entry_type = "article" if pub_type == "Journal" else "inproceedings"

    lines = [
        f"@{entry_type}{{{key},",
        f"  title = {{{item['title']}}},",
        f"  author = {{{authors_str}}},",
    ]
    if pub_type == "Journal":
        lines.append(f"  journal = {{{item['venue']}}},")
    else:
        lines.append(f"  booktitle = {{{item['venue']}}},")
    if year:
        lines.append(f"  year = {{{year}}},")
    if item.get("doi"):
        lines.append(f"  doi = {{{item['doi']}}},")
    lines.append("}")
    return "\n".join(lines)


def sync_publications(repo_root: Path) -> bool:
    """Fetch from Google Scholar and merge into publications.json."""
    data_file = repo_root / "web" / "src" / "data" / "generated" / "publications.json"
    metrics_file = repo_root / "web" / "src" / "data" / "generated" / "site_metrics.json"

    if not data_file.exists():
        print(f"[X] Missing publications data file: {data_file}", file=sys.stderr)
        return False

    existing_pubs: list[dict] = json.loads(data_file.read_text(encoding="utf-8"))
    print(f"Loaded {len(existing_pubs)} existing publications from {data_file.name}.")

    print(f"Fetching Google Scholar profile for user {SCHOLAR_USER_ID}...")
    scholar_html = fetch_scholar_html()
    if not scholar_html:
        print("[!] Could not retrieve Scholar HTML. Preserving existing publications.", file=sys.stderr)
        return False

    scholar_items = parse_scholar_publications(scholar_html)
    print(f"Extracted {len(scholar_items)} publications from Google Scholar.")
    if not scholar_items:
        print("[!] No items parsed from Scholar. Aborting merge to prevent data loss.", file=sys.stderr)
        return False

    # Build title lookup map
    lookup = {normalize_title(p["title"]): p for p in existing_pubs}

    updated_count = 0
    added_count = 0

    for item in scholar_items:
        norm = normalize_title(item["title"])
        if norm in TITLE_ALIASES:
            norm = TITLE_ALIASES[norm]
        if norm in lookup:
            existing = lookup[norm]
            # Update citations & scholar link
            old_cites = existing.get("citations", 0)
            existing["citations"] = item["citations"]
            existing["scholar_link"] = item["scholar_link"]
            if item["citations"] != old_cites:
                updated_count += 1
        else:
            # New publication from Scholar!
            first_author = item["authors"][0] if item["authors"] else "satlab"
            first_last = first_author.split()[-1].lower()
            short_title = "-".join(re.findall(r"[a-z0-9]+", item["title"].lower())[:4])
            slug_id = f"{first_last}-{item['year']}-{short_title}"
            
            # Ensure unique id
            existing_ids = {p["id"] for p in existing_pubs}
            counter = 1
            orig_slug = slug_id
            while slug_id in existing_ids:
                slug_id = f"{orig_slug}-{counter}"
                counter += 1

            pub_type = infer_publication_type(item["title"], item["venue"])
            pillar_id, keywords = infer_research_pillar(item["title"], item["venue"])
            highlighted = match_highlighted_authors(item["authors"])
            bibtex_str = generate_bibtex(item, slug_id)

            badge = None
            if "computational optimization" in item["venue"].lower() or "coap" in item["venue"].lower():
                badge = "Q1 ISI JOURNAL"
            elif "rairo" in item["venue"].lower():
                badge = "Q3 ISI JOURNAL"
            elif "cybernetics and information technologies" in item["venue"].lower() or "cit" in item["venue"].lower():
                badge = "Q2 SCOPUS JOURNAL"
            elif "pesquisa operacional" in item["venue"].lower():
                badge = "SCOPUS JOURNAL"
            elif pub_type == "Conference":
                badge = "CONFERENCE"

            new_pub = {
                "id": slug_id,
                "title": item["title"],
                "authors": item["authors"],
                "venue": item["venue"],
                "year": item["year"],
                "type": pub_type,
                "badge": badge,
                "doi": None,
                "link": item["scholar_link"],
                "scholar_link": item["scholar_link"],
                "research_pillar": pillar_id,
                "primary_pillar_id": pillar_id,
                "keywords": keywords,
                "abstract": None,
                "bibtex": bibtex_str,
                "is_featured": False,
                "highlighted_authors": highlighted,
                "citations": item["citations"],
            }
            existing_pubs.append(new_pub)
            lookup[norm] = new_pub
            added_count += 1

    # Sort publications: Year descending, then Citations descending, then Title
    existing_pubs.sort(
        key=lambda p: (
            -p.get("year", 0),
            -p.get("citations", 0),
            p.get("title", ""),
        )
    )

    data_file.write_text(json.dumps(existing_pubs, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"[✓] Saved {len(existing_pubs)} publications to {data_file}.")
    print(f"    - Citations updated: {updated_count}")
    print(f"    - New publications added: {added_count}")

    # Update site_metrics.json if exists
    if metrics_file.exists():
        metrics = json.loads(metrics_file.read_text(encoding="utf-8"))
        metrics["total_publications"] = len(existing_pubs)
        metrics["journal_articles"] = sum(1 for p in existing_pubs if p.get("type") == "Journal")
        metrics_file.write_text(json.dumps(metrics, indent=2) + "\n", encoding="utf-8")
        print(f"[✓] Updated metrics in {metrics_file.name}: total={metrics['total_publications']}, journals={metrics['journal_articles']}.")

    return True


if __name__ == "__main__":
    repo_root = Path(__file__).resolve().parent.parent
    success = sync_publications(repo_root)
    sys.exit(0 if success else 1)
