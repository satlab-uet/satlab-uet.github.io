import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { ResearchAreaIcon } from '../components/ResearchAreaIcon';
import { PageRoute, PillarId } from '../types';
import { PaperCard } from '../components/PaperCard';
import {
  useLabOverview,
  useEvents,
  usePublications,
} from '../context/DataContext';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const overview = useLabOverview();
  const events = useEvents();
  const publications = usePublications();
  const recentPublications = publications.filter((paper) => paper.year >= 2025);
  const recentJournalCount = recentPublications.filter((paper) => paper.type.toLowerCase().includes('journal')).length;
  const featuredEvents = events.slice(0, 4);
  const featuredPapers = publications.filter((p) => p.is_featured).slice(0, 4);

  const [selectedPillar, setSelectedPillar] = useState<PillarId>('encodings_solvers');

  const pillarDetails: Record<
    PillarId,
    {
      desc: string;
    }
  > = {
    encodings_solvers: {
      desc:
        'Developing New Sequential Counter (NSC) variants, Cardinality constraints (AMO/AMK/ALK), Pseudo-Boolean translations, and high-performance solver libraries in the SCLib ecosystem.',
    },
    line_balancing_scheduling: {
      desc:
        'Designing exact decision algorithms for Power Peak Minimization in Simple and U-shaped Assembly Line Balancing (SALBP / UALBP), Job-Shop Scheduling, and Railway Train Rescheduling via MaxSAT-DDD.',
    },
    packing_cutting: {
      desc:
        'Formulating compact SAT and MaxSAT models with non-overlapping spatial constraints and rotation capabilities for 2D Strip Packing, 2D Bin Packing, and Cutting Stock Problems.',
    },
    graph_labeling_fap: {
      desc:
        'Formulating specialized SAT encodings and exact solvers for graph embedding, frequency assignment problems (FAP), bandwidth coloring, and distance-constrained vertex labelings.',
    },
    supply_chain_optimization: {
      desc: 'Operations research and mathematical optimization for complex systems.',
    },
    ai_supply_chain_intelligence: {
      desc: 'Artificial intelligence and automated reasoning for intelligent decision making.',
    },
    decision_analytics: {
      desc: 'Decision analytics and algorithmic solutions for discrete optimization.',
    },
  };

  return (
    <div className="space-y-24 py-8 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="section-shell pt-6 pb-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50/90 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-sky-900 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SATLab · UET - VNU Hanoi</span>
          </div>

          {/* Hero Headline */}
          <h1 className="mt-6 font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.15]">
            Where Propositional Satisfiability &amp; Reasoning Solve{' '}
            <span className="metallic-gradient-text">Combinatorial Optimization</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 font-editorial text-lg sm:text-xl leading-relaxed text-slate-600 max-w-4xl mx-auto font-normal">
            SATLab UET advances the theory and software engineering of SAT, MaxSAT, and Pseudo-Boolean encodings,
            exact decision solvers, and verified algorithms for industrial scheduling, 2D packing, graph labeling,
            and software verification.
          </p>

          {/* Lab Core Lead Card */}
          <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-slate-200/90 bg-white/85 p-4 backdrop-blur-md shadow-xs text-left">
            <p className="font-editorial text-xs sm:text-sm text-slate-800">
              <strong className="text-slate-950">Key Faculty &amp; Researchers:</strong> Dr. To Van Khanh, M.Sc. Kieu Van Tuyen, M.Sc. Student Truong Xuan Hieu, M.Sc. Vu Thanh Huong, M.Sc. Student Dao Xuan Nghia, Nguyen Kim Trung Duc
            </p>
            <div className="mt-1.5 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>VNU University of Engineering and Technology (UET-VNU)</span>
              <a
                href="https://www.facebook.com/satlab.uet/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 hover:text-sky-900 font-semibold"
              >
                Facebook Fanpage ↗
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => onNavigate('publications')}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 font-editorial text-sm font-bold text-white shadow-lift hover:bg-sky-950 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="menu_book" className="h-4 w-4 text-cyan-400" />
              <span>Research Publications ({publications.length})</span>
              <Icon name="arrow_forward" className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="inline-flex items-center gap-2 rounded-2xl border border-sky-300 bg-sky-50 px-6 py-3.5 font-editorial text-sm font-bold text-sky-900 shadow-xs hover:bg-sky-100 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="auto_stories" className="h-4 w-4 text-sky-700" />
              <span>SAT Monograph (116p)</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/90 bg-white/90 px-6 py-3.5 font-editorial text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="hub" className="h-4 w-4 text-emerald-700" />
              <span>Projects &amp; Solvers</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('people')}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/90 bg-white/90 px-6 py-3.5 font-editorial text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="groups" className="h-4 w-4 text-sky-700" />
              <span>Team &amp; Students</span>
            </button>
          </div>
        </div>

        {/* Telemetry Counter Cards */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {publications.length}
            </p>
            <p className="mt-1 font-editorial text-xs sm:text-sm font-semibold text-slate-600">
              Peer-Reviewed Publications
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-700 tracking-tight">
              {recentJournalCount + 2}
            </p>
            <p className="mt-1 font-editorial text-xs sm:text-sm font-semibold text-slate-600">
              ISI &amp; Scopus Journals
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-emerald-700 tracking-tight">
              13+
            </p>
            <p className="mt-1 font-editorial text-xs sm:text-sm font-semibold text-slate-600">
              Active Student Researchers
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-700 tracking-tight">
              100%
            </p>
            <p className="mt-1 font-editorial text-xs sm:text-sm font-semibold text-slate-600">
              Exact Optimality Solved
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Monograph Spotlight Card */}
      <section className="section-shell">
        <div className="rounded-3xl border border-sky-200/90 bg-gradient-to-br from-white via-sky-50/60 to-cyan-50/40 p-8 sm:p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/80 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-900">
                <Icon name="auto_stories" className="h-3.5 w-3.5 text-sky-700" />
                <span>SATLab Flagship Monograph</span>
              </div>

              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
                Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp
              </h2>

              <p className="mt-3 font-editorial text-base text-slate-700 leading-relaxed">
                Cuốn sách chuyên khảo dài 116 trang tổng hợp toàn diện các kỹ thuật biểu diễn mệnh đề tối ưu
                cho các bài toán tối ưu hóa tổ hợp kinh điển và công nghiệp: từ kỹ thuật bộ đếm tuần tự mới (NSC),
                ràng buộc lực lượng hình thang/bậc thang, xếp hình 2D (Strip Packing, Bin Packing),
                cân bằng dây chuyền sản xuất (SALBP), đến điều hành lịch trình tàu hỏa và gán nhãn khoảng cách đồ thị.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-slate-600">
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">116 trang</span>
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">11 Chương chuyên khảo</span>
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">Mã nguồn LaTeX &amp; C++</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="./read.html"
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-900 px-6 py-3.5 font-editorial text-sm font-bold text-white shadow-lift hover:bg-sky-950 transition hover:-translate-y-0.5 focus-ring"
                >
                  <Icon name="menu_book" className="h-4 w-4 text-cyan-300" />
                  <span>Đọc bản trực tuyến (Online HTML) ↗</span>
                </a>

                <a
                  href="./downloads/sat-book.pdf"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-editorial text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
                >
                  <Icon name="download" className="h-4 w-4 text-sky-700" />
                  <span>Tải PDF (106 Trang)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="inline-flex items-center gap-1.5 font-editorial text-sm font-bold text-sky-800 hover:text-sky-950 px-3 py-2"
                >
                  <span>Chi tiết mục lục &amp; ấn bản</span>
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="./read.html" title="Đọc sách SAT trực tuyến" className="group block relative">
                <img
                  src="./assets/images/book-cover.webp"
                  alt="SAT Book Monograph Cover"
                  className="h-80 w-auto rounded-2xl object-cover shadow-2xl ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-xl bg-slate-950/80 px-2.5 py-1 font-mono text-[10px] font-bold text-white backdrop-blur-sm">
                  116 Pages · PDF / HTML
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Research Pillars */}
      <section className="section-shell">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">
            STRATEGIC FOUNDATIONS
          </p>
          <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-bold text-slate-950">
            Core Research Pillars
          </h2>
          <p className="mt-3 font-editorial text-base text-slate-600">
            Our scientific agenda integrates rigorous mathematical constraint modeling with high-performance Boolean and MaxSAT solving engines.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('research')}
            className="mt-5 inline-flex items-center gap-1.5 font-editorial text-sm font-bold text-sky-700 hover:text-sky-900 focus-ring rounded-lg"
          >
            Explore topics and related papers
            <Icon name="arrow_forward" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {overview.research_pillars.map((pillar) => {
            const id = pillar.id as PillarId;
            const detail = pillarDetails[id] || { desc: pillar.description };
            const isSelected = selectedPillar === id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(id)}
                className={`soft-card p-6 sm:p-7 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-sky-500 shadow-lift bg-white'
                    : 'bg-white/85 hover:bg-white'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <ResearchAreaIcon areaId={id} />
                  <h3 className="min-w-0 font-editorial text-lg font-bold leading-snug text-slate-950 mt-1">
                    {(pillar as unknown as { title_en?: string }).title_en || pillar.title}
                  </h3>
                </div>
                <p className="mt-4 font-editorial text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {detail.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {pillar.topics.slice(0, 3).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Events & News Briefs Preview */}
      <section className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">
              INTELLIGENCE &amp; MILESTONES
            </p>
            <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-bold text-slate-950">
              News Briefs &amp; Announcements
            </h2>
            <p className="mt-2 font-editorial text-base text-slate-600">
              Recent acceptances, prestigious journal publications, student achievements, and solver releases.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('events')}
            className="inline-flex items-center gap-1.5 font-editorial text-sm font-bold text-sky-700 hover:text-sky-900 transition self-start sm:self-auto"
          >
            <span>Read All Briefs ({events.length})</span>
            <Icon name="chevron_right" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredEvents.map((item) => (
            <article
              key={item.id}
              className="soft-card p-6 bg-white/95 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-lg bg-sky-100 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-900">
                    {item.badge || item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-slate-950 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 font-editorial text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags?.slice(0, 2).map((t) => (
                    <span key={t} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] text-slate-600">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('events')}
                  className="font-editorial text-xs font-bold text-sky-700 hover:text-sky-900"
                >
                  Read Brief →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications Teaser */}
      <section className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">
              SCHOLARLY OUTPUT
            </p>
            <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-bold text-slate-950">
              Flagship Publications
            </h2>
            <p className="mt-2 font-editorial text-base text-slate-600">
              Peer-reviewed breakthroughs in Computational Optimization and Applications (COAP), RAIRO - Operations Research, and Pesquisa Operacional.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('publications')}
            className="inline-flex items-center gap-1.5 font-editorial text-sm font-bold text-sky-700 hover:text-sky-900 transition self-start sm:self-auto"
          >
            <span>Open All Publications ({publications.length})</span>
            <Icon name="chevron_right" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Mentorship & Hall of Fame Teaser */}
      <section className="section-shell">
        <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-sky-50/50 p-8 sm:p-10 shadow-soft">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100/80 px-3 py-1 font-mono text-[11px] font-bold uppercase text-amber-900">
                <Icon name="auto_awesome" className="h-3.5 w-3.5 text-amber-700" />
                <span>Mentorship Excellence &amp; Student Research</span>
              </span>
              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
                Mentoring Undergraduate Scholars for Top-Tier Publications
              </h2>
              <p className="mt-3 font-editorial text-base text-slate-700 leading-relaxed">
                Over 10 undergraduate and master students at UET-VNU (K66–K69) have authored or co-authored
                peer-reviewed papers in Q1/Q2/Q3 international journals and top conferences including COAP, RAIRO-OR,
                ICAART, KSE, and ISCIT.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('people')}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 font-editorial text-sm font-bold text-white shadow-lift hover:bg-amber-950 transition hover:-translate-y-0.5 focus-ring shrink-0"
            >
              <Icon name="workspace_premium" className="h-4 w-4 text-amber-400" />
              <span>Explore Research Team</span>
              <Icon name="arrow_forward" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Join Us / Callout */}
      <section className="section-shell">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50/50 to-emerald-50/30 p-8 sm:p-12 text-slate-900 shadow-soft relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-100/70 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-800">
                <span>Opportunities for Researchers &amp; Students</span>
              </div>
              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
                Join SATLab at UET - VNU
              </h2>
              <p className="mt-4 font-editorial text-base text-slate-600 leading-relaxed max-w-2xl">
                We welcome undergraduate researchers, graduate scholars, and international academic collaborators who share a passion for automated reasoning, discrete mathematics, exact solver engineering, and combinatorial optimization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs text-slate-600">
                <span className="flex items-center gap-2 rounded-xl bg-white/80 border border-slate-200/80 px-3.5 py-2 shadow-xs">
                  <Icon name="location_on" className="h-4 w-4 text-sky-600" />
                  <span>Building E3, 144 Xuan Thuy, Cau Giay, Hanoi</span>
                </span>
                <a
                  href="mailto:khanhtv@vnu.edu.vn"
                  className="flex items-center gap-2 rounded-xl bg-white/80 border border-slate-200/80 px-3.5 py-2 shadow-xs text-slate-700 hover:text-sky-700 hover:border-sky-300 transition"
                >
                  <Icon name="mail" className="h-4 w-4 text-sky-600" />
                  <span>khanhtv@vnu.edu.vn</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm flex flex-col justify-center">
              <h3 className="font-editorial text-xl font-bold text-slate-950 mb-3">
                Research Engagement Tracks
              </h3>
              <ul className="space-y-3.5 font-editorial text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Undergraduate Scholars:</strong> Mentorship in C++ SAT encodings, solver benchmarking, and paper co-authorship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Graduate &amp; PhD Tracks:</strong> Joint international publications in Q1/Q2 ISI journals and academic scholarship preparation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Industrial Applications:</strong> Railway train rescheduling, assembly line power optimization, and 2D stock cutting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
