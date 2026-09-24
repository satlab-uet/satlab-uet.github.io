import json
import os

data_dir = "/Users/tuyenkv/Documents/SAT Training/sat-book/web/src/data/generated"
os.makedirs(data_dir, exist_ok=True)

# 1. overview.json
overview = {
  "name": "Satisfiability, Automated Reasoning and Optimization Laboratory",
  "abbreviation": "SATLab UET",
  "affiliation": "VNU University of Engineering and Technology (UET-VNU)",
  "faculty_department": "Faculty of Information Technology",
  "address": "144 Xuan Thuy Road, Cau Giay, Hanoi, Vietnam",
  "head_of_lab": {
    "name": "Dr. To Van Khanh",
    "email": "khanhtv@vnu.edu.vn",
    "title": "Head of SATLab / Senior Lecturer",
    "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi"
  },
  "social": {
    "facebook": "https://www.facebook.com/satlab.uet/",
    "github": "https://github.com/satlab-uet"
  },
  "metrics": {
    "total_publications": 21,
    "journal_articles": 15,
    "q1_journals": 4,
    "active_projects": 5,
    "phd_msc_scholarships": 6,
    "valedictorians": 3,
    "student_researchers": 13,
    "international_partner_countries": 5
  },
  "research_pillars": [
    {
      "id": "encodings_solvers",
      "title": "Encodings & Solver Architecture",
      "title_en": "Encodings & Solver Architecture",
      "description": "Developing New Sequential Counter (NSC) variants, Cardinality constraints (AMO/AMK/ALK), Pseudo-Boolean translations, and high-performance solver libraries in the SCLib ecosystem.",
      "topics": [
        "New Sequential Counter (NSC)",
        "Staircase & Ladder AMO/AMK",
        "Pseudo-Boolean (PB) Encodings",
        "Incremental SAT Solving",
        "Symmetry Breaking Predicates",
        "SCLib Solver Ecosystem"
      ],
      "featured_venues": [
        "Computational Optimization and Applications (COAP)",
        "ICAART",
        "Constraints",
        "Journal of Automated Reasoning"
      ]
    },
    {
      "id": "line_balancing_scheduling",
      "title": "Industrial Scheduling & Line Balancing",
      "title_en": "Industrial Scheduling & Line Balancing",
      "description": "Designing exact decision algorithms for Power Peak Minimization in Simple and U-shaped Assembly Line Balancing (SALBP / UALBP), Job-Shop Scheduling, and Railway Train Rescheduling via MaxSAT-DDD.",
      "topics": [
        "Power Peak Minimization",
        "Simple & U-Shaped Assembly Line Balancing",
        "MaxSAT Dynamic Decoupled Domain (DDD)",
        "Railway Train Rescheduling",
        "Precedence Propagation",
        "Hybrid AMO Encodings"
      ],
      "featured_venues": [
        "Journal of Combinatorial Optimization (JCO)",
        "Engineering Optimization",
        "CSoNet",
        "Cybernetics and Information Technologies"
      ]
    },
    {
      "id": "packing_cutting",
      "title": "2D Packing & Cutting Optimization",
      "title_en": "2D Packing & Cutting Optimization",
      "description": "Formulating compact SAT and MaxSAT models with non-overlapping spatial constraints and rotation capabilities for 2D Strip Packing, 2D Bin Packing, and Cutting Stock Problems.",
      "topics": [
        "2D Strip Packing Problem (2DSPP)",
        "2D Bin Packing Problem (2DBPP)",
        "Single Stock Size Cutting Stock (2D-SSSCSP)",
        "Non-overlapping Constraints",
        "Exact vs MIP/CPLEX Benchmarks"
      ],
      "featured_venues": [
        "Pesquisa Operacional",
        "Knowledge and Systems Engineering (KSE)",
        "Journal of Computer Science and Cybernetics (JCSC)"
      ]
    },
    {
      "id": "graph_labeling_fap",
      "title": "Graph Labeling & Frequency Assignment",
      "title_en": "Graph Labeling & Frequency Assignment",
      "description": "Formulating specialized SAT encodings and exact solvers for graph embedding, frequency assignment problems (FAP), bandwidth coloring, and distance-constrained vertex labelings.",
      "topics": [
        "Cyclic Antibandwidth & Antibandwidth",
        "Radio-k & k-Safe Labeling",
        "Bandwidth Coloring & Multicoloring",
        "Minimum Order Frequency Assignment (FAP)",
        "2D Bandwidth Minimization",
        "No-Hole Anti-k-Labeling"
      ],
      "featured_venues": [
        "Computational Optimization and Applications (COAP)",
        "RAIRO - Operations Research",
        "IEEE Latin America Transactions",
        "Wireless Networks",
        "Discrete Applied Mathematics"
      ]
    }
  ]
}

with open(f"{data_dir}/overview.json", "w", encoding="utf-8") as f:
    json.dump(overview, f, indent=2, ensure_ascii=False)

# 2. research_pillars.json
with open(f"{data_dir}/research_pillars.json", "w", encoding="utf-8") as f:
    json.dump(overview["research_pillars"], f, indent=2, ensure_ascii=False)

# 3. site_metrics.json
with open(f"{data_dir}/site_metrics.json", "w", encoding="utf-8") as f:
    json.dump(overview["metrics"], f, indent=2, ensure_ascii=False)

# 4. publications.json
publications = [
  {
    "id": "truong-2026-cyclic-antibandwidth-coap",
    "title": "Solving Cyclic Antibandwidth Problem by SAT",
    "authors": ["Truong Xuan Hieu", "To Van Khanh"],
    "venue": "Computational Optimization and Applications (COAP), Springer, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q1 ISI JOURNAL",
    "doi": "10.1007/s10589-026-00620-1",
    "link": "https://link.springer.com/journal/10589",
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["cyclic-antibandwidth", "antibandwidth", "graph-embedding"],
    "abstract": "The cyclic antibandwidth problem (CABP) seeks to embed the vertices of a graph G onto a cycle of length |V| such that the minimum distance between adjacent vertices is maximized. We propose a comprehensive SAT formulation incorporating novel staircase cardinality encodings and symmetry breaking predicates, establishing new optimality records and proving bounds on previously unsolved benchmark graph families.",
    "bibtex": "@article{truong2026cyclic,\n  title={Solving Cyclic Antibandwidth Problem by SAT},\n  author={Truong, Xuan Hieu and To, Van Khanh},\n  journal={Computational Optimization and Applications},\n  publisher={Springer},\n  year={2026}\n}",
    "is_featured": True,
    "highlighted_authors": ["Truong Xuan Hieu", "To Van Khanh"]
  },
  {
    "id": "kieu-2026-social-golfer-rairo",
    "title": "An efficient SAT encoding for solving the Social Golfer Problem",
    "authors": ["Kieu Van Tuyen", "Nguyen Tan Nguyen", "To Van Khanh"],
    "venue": "RAIRO - Operations Research, Vol. 60, No. 1, pp. 173–199, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q3 ISI JOURNAL",
    "doi": "10.1051/ro/2026012",
    "link": "https://www.rairo-ro.org/",
    "research_pillar": "encodings_solvers",
    "primary_pillar_id": "encodings_solvers",
    "keywords": ["social-golfer", "symmetry-breaking", "cardinality-constraints"],
    "abstract": "We present an efficient propositional satisfiability (SAT) encoding for the Social Golfer Problem (SGP, CSPLib prob016). By systematically combining lexicographical symmetry breaking with compact sequential counter encodings, our solver solves challenging open instances and outpaces commercial CP and MIP systems.",
    "bibtex": "@article{kieu2026sgp,\n  title={An efficient SAT encoding for solving the Social Golfer Problem},\n  author={Kieu, Van Tuyen and Nguyen, Tan Nguyen and To, Van Khanh},\n  journal={RAIRO - Operations Research},\n  volume={60},\n  number={1},\n  pages={173--199},\n  year={2026}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "Nguyen Tan Nguyen", "To Van Khanh"]
  },
  {
    "id": "kieu-2025-task-scheduling-cit",
    "title": "A Compact SAT Encoding for Non-preemptive Task Scheduling on Multiple Identical Resources",
    "authors": ["Kieu Van Tuyen", "To Van Khanh"],
    "venue": "Cybernetics and Information Technologies, Vol. 25, No. 3, 2025",
    "year": 2025,
    "type": "Journal",
    "badge": "Q2 SCOPUS JOURNAL",
    "doi": "10.2478/cait-2025-0028",
    "link": "https://doi.org/10.2478/cait-2025-0028",
    "research_pillar": "line_balancing_scheduling",
    "primary_pillar_id": "line_balancing_scheduling",
    "keywords": ["scheduling", "task-scheduling", "parallel-resources"],
    "abstract": "We present a compact Boolean satisfiability encoding for non-preemptive task scheduling on multiple identical parallel resources. The proposed model significantly reduces auxiliary clause generation while preserving propagation strength.",
    "bibtex": "@article{kieu2025task,\n  title={A Compact SAT Encoding for Non-preemptive Task Scheduling on Multiple Identical Resources},\n  author={Kieu, Van Tuyen and To, Van Khanh},\n  journal={Cybernetics and Information Technologies},\n  volume={25},\n  number={3},\n  year={2025}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "kieu-2025-strip-packing-pesquisa",
    "title": "Efficient SAT and MaxSAT techniques for solving the Two-Dimensional Strip Packing Problem",
    "authors": ["Kieu Van Tuyen", "Le Quy Duong", "To Van Khanh"],
    "venue": "Pesquisa Operacional, Vol. 45, e297231, 2025",
    "year": 2025,
    "type": "Journal",
    "badge": "Q4 SCOPUS JOURNAL",
    "doi": "10.1590/0101-7438.2025.045.00297231",
    "link": "https://doi.org/10.1590/0101-7438.2025.045.00297231",
    "research_pillar": "packing_cutting",
    "primary_pillar_id": "packing_cutting",
    "keywords": ["strip-packing", "2d-packing", "maxsat-optimization"],
    "abstract": "We develop exact decision procedures for the 2D Strip Packing Problem based on SAT and MaxSAT. Our formulations employ non-overlapping relative position variables and dynamic height bounds, finding optimal solutions across established OR benchmark sets faster than integer programming solvers.",
    "bibtex": "@article{kieu2025packing,\n  title={Efficient SAT and MaxSAT techniques for solving the Two-Dimensional Strip Packing Problem},\n  author={Kieu, Van Tuyen and Le, Quy Duong and To, Van Khanh},\n  journal={Pesquisa Operacional},\n  volume={45},\n  pages={e297231},\n  year={2025}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "Le Quy Duong", "To Van Khanh"]
  },
  {
    "id": "truong-2025-staircase-amo-icaart",
    "title": "Sequential counter encoding for staircase at-most-one constraints",
    "authors": ["Truong Xuan Hieu", "Kieu Van Tuyen", "To Van Khanh"],
    "venue": "Proc. 17th International Conference on Agents and Artificial Intelligence (ICAART 2025), Vol. 2, pp. 164–175",
    "year": 2025,
    "type": "Conference",
    "badge": "ICAART 2025 (RANK B)",
    "doi": "10.5220/0013149800003890",
    "link": "https://www.scitepress.org/",
    "research_pillar": "encodings_solvers",
    "primary_pillar_id": "encodings_solvers",
    "keywords": ["staircase-amo", "sequential-counter", "cardinality-constraints"],
    "abstract": "In this paper, we formulate a new sequential counter encoding specifically designed for staircase at-most-one (AMO) constraints. The encoding halves auxiliary variables compared to standard sequential counters while maintaining arc consistency via unit propagation.",
    "bibtex": "@inproceedings{truong2025staircase,\n  title={Sequential counter encoding for staircase at-most-one constraints},\n  author={Truong, Xuan Hieu and Kieu, Van Tuyen and To, Van Khanh},\n  booktitle={Proceedings of the 17th International Conference on Agents and Artificial Intelligence (ICAART 2025)},\n  volume={2},\n  pages={164--175},\n  year={2025}\n}",
    "is_featured": True,
    "highlighted_authors": ["Truong Xuan Hieu", "Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "truong-2025-nurse-rostering-iscit",
    "title": "Solving at-Least Sequence Constraints in Nurse Rostering Problem Using SAT",
    "authors": ["Truong Xuan Hieu", "Nguyen Hong Quan", "Dao Xuan Nghia", "Kieu Van Tuyen", "To Van Khanh"],
    "venue": "24th International Symposium on Communications and Information Technologies (ISCIT 2025), IEEE, 2025",
    "year": 2025,
    "type": "Conference",
    "badge": "ISCIT 2025 (RANK B)",
    "doi": "10.1109/ISCIT62345.2025.10753421",
    "link": "https://ieeexplore.ieee.org/",
    "research_pillar": "encodings_solvers",
    "primary_pillar_id": "encodings_solvers",
    "keywords": ["sequence-constraints", "nurse-rostering", "roster-scheduling"],
    "abstract": "Nurse Rostering Problems require strict adherence to at-least and at-most sequence constraints across consecutive shifts. We introduce specialized SAT encodings that model sliding sequence windows with minimal clause inflation.",
    "bibtex": "@inproceedings{truong2025iscit,\n  title={Solving at-Least Sequence Constraints in Nurse Rostering Problem Using SAT},\n  author={Truong, Xuan Hieu and Nguyen, Hong Quan and Dao, Xuan Nghia and Kieu, Van Tuyen and To, Van Khanh},\n  booktitle={24th International Symposium on Communications and Information Technologies (ISCIT 2025)},\n  year={2025}\n}",
    "is_featured": True,
    "highlighted_authors": ["Truong Xuan Hieu", "Nguyen Hong Quan", "Dao Xuan Nghia", "Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "kieu-2025-2d-bin-packing-kse",
    "title": "SAT-Based Approaches for Two-Dimensional Bin Packing: A Comprehensive Comparison with MIP and CP Methods",
    "authors": ["Kieu Van Tuyen", "Hoang Linh Chi", "To Van Khanh"],
    "venue": "17th International Conference on Knowledge and Systems Engineering (KSE 2025), IEEE, 2025",
    "year": 2025,
    "type": "Conference",
    "badge": "KSE 2025 (SCOPUS)",
    "doi": "10.1109/KSE63342.2025.10834190",
    "link": "https://ieeexplore.ieee.org/",
    "research_pillar": "packing_cutting",
    "primary_pillar_id": "packing_cutting",
    "keywords": ["bin-packing", "mip-cp-comparison", "2d-packing"],
    "abstract": "We evaluate propositional satisfiability (SAT) against state-of-the-art Mixed Integer Programming (Gurobi/CPLEX) and Constraint Programming (CP-SAT/Chuffed) formulations for the 2D Bin Packing Problem. Empirical tests show SAT models achieve faster proof of optimality on tightly-constrained instances.",
    "bibtex": "@inproceedings{kieu2025kse,\n  title={SAT-Based Approaches for Two-Dimensional Bin Packing: A Comprehensive Comparison with MIP and CP Methods},\n  author={Kieu, Van Tuyen and Hoang, Linh Chi and To, Van Khanh},\n  booktitle={17th International Conference on Knowledge and Systems Engineering (KSE 2025)},\n  year={2025}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "Hoang Linh Chi", "To Van Khanh"]
  },
  {
    "id": "huong-2026-safe-labeling-cita",
    "title": "Exact k-Safe Labeling via Incremental SAT Solving",
    "authors": ["Vu Thanh Huong", "Nguyen Kim Trung Duc", "Do Duc Long", "Duong Thi Huong", "Tran Ngoc Thuan", "To Van Khanh"],
    "venue": "13th Conference on Information Technology and its Applications (CITA 2026), Accepted",
    "year": 2026,
    "type": "Conference",
    "badge": "CITA 2026 (ACCEPTED)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["safe-labeling", "incremental-sat", "graph-labeling"],
    "abstract": "We formulate the k-safe labeling problem as an incremental SAT solving process. By reusing learned clauses across sequential search iterations for the optimal span, our solver achieves superior runtime performance compared to static models.",
    "bibtex": "@inproceedings{huong2026cita,\n  title={Exact k-Safe Labeling via Incremental SAT Solving},\n  author={Vu, Thanh Huong and Nguyen, Kim Trung Duc and Do, Duc Long and Duong, Thi Huong and Tran, Ngoc Thuan and To, Van Khanh},\n  booktitle={13th Conference on Information Technology and its Applications (CITA 2026)},\n  year={2026}\n}",
    "is_featured": True,
    "highlighted_authors": ["Vu Thanh Huong", "Nguyen Kim Trung Duc", "Do Duc Long", "To Van Khanh"]
  },
  {
    "id": "kieu-2026-salbp-power-jco",
    "title": "Compact SAT Encoding for Power Peak Minimization in Assembly Line Balancing",
    "authors": ["Kieu Van Tuyen", "Nguyen Chi Phong", "Hoang Gia Bao", "To Van Khanh"],
    "venue": "Journal of Combinatorial Optimization (JCO), Springer, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2/Q3 ISI (MAJOR REVISIONS)",
    "doi": None,
    "link": None,
    "research_pillar": "line_balancing_scheduling",
    "primary_pillar_id": "line_balancing_scheduling",
    "keywords": ["assembly-line-balancing", "power-peak", "energy-minimization"],
    "abstract": "Modern automated manufacturing requires minimizing peak energy demand on assembly lines while honoring cycle time and precedence constraints. We introduce compact SAT formulations with cumulative power encodings, outperforming CP and MIP solvers on standard SALBP benchmarks.",
    "bibtex": "@article{kieu2026jco,\n  title={Compact SAT Encoding for Power Peak Minimization in Assembly Line Balancing},\n  author={Kieu, Van Tuyen and Nguyen, Chi Phong and Hoang, Gia Bao and To, Van Khanh},\n  journal={Journal of Combinatorial Optimization},\n  publisher={Springer},\n  year={2026},\n  note={Under Major Revisions}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "Nguyen Chi Phong", "Hoang Gia Bao", "To Van Khanh"]
  },
  {
    "id": "truong-2026-ladder-amk-constraints",
    "title": "SAT Encoding for Set of At-Most-K Cardinality Constraints with Ladder Shape",
    "authors": ["Truong Xuan Hieu", "Kieu Van Tuyen", "To Van Khanh"],
    "venue": "Constraints, Springer, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q3 ISI (MAJOR REVISIONS)",
    "doi": None,
    "link": None,
    "research_pillar": "encodings_solvers",
    "primary_pillar_id": "encodings_solvers",
    "keywords": ["ladder-amk", "cardinality-constraints", "sequential-counter"],
    "abstract": "We explore structural properties of overlapping cardinality constraints having ladder or staircase topologies. A novel shared register structure preserves unit propagation properties while dramatically slashing the total variable count.",
    "bibtex": "@article{truong2026constraints,\n  title={SAT Encoding for Set of At-Most-K Cardinality Constraints with Ladder Shape},\n  author={Truong, Xuan Hieu and Kieu, Van Tuyen and To, Van Khanh},\n  journal={Constraints},\n  publisher={Springer},\n  year={2026},\n  note={Under Major Revisions}\n}",
    "is_featured": False,
    "highlighted_authors": ["Truong Xuan Hieu", "Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "dao-2026-fap-ieee",
    "title": "A SAT-Based Exact Approach for the Minimum Order Frequency Assignment Problem",
    "authors": ["Dao Xuan Nghia", "Dang Anh Phuong", "To Van Khanh"],
    "venue": "IEEE Latin America Transactions, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2 ISI (MAJOR REVISIONS)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["frequency-assignment", "minimum-order-fap", "telecommunication"],
    "abstract": "The Minimum Order Frequency Assignment Problem (MO-FAP) is an NP-hard problem in cellular networks. We devise exact SAT decision formulations using ladder-shaped distance constraints, solving large-scale telecommunication instances to provable optimality.",
    "bibtex": "@article{dao2026ieee,\n  title={A SAT-Based Exact Approach for the Minimum Order Frequency Assignment Problem},\n  author={Dao, Xuan Nghia and Dang, Anh Phuong and To, Van Khanh},\n  journal={IEEE Latin America Transactions},\n  year={2026},\n  note={Under Major Revisions}\n}",
    "is_featured": False,
    "highlighted_authors": ["Dao Xuan Nghia", "Dang Anh Phuong", "To Van Khanh"]
  },
  {
    "id": "duong-2026-no-hole-anti-k-dmaa",
    "title": "An exact approach solving no hole anti-k-labeling of graphs",
    "authors": ["Pham Ngoc Hai Duong", "Dao Xuan Nghia", "To Van Khanh"],
    "venue": "Discrete Mathematics, Algorithms and Applications (DMAA) / VJCS, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q3 SCOPUS (SUBMITTED)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["no-hole-labeling", "anti-k-labeling", "graph-labeling"],
    "abstract": "No-hole anti-k-labeling requires finding an injective vertex labeling with consecutive integers (no gaps or holes) such that distance-d neighbors satisfy span inequalities. We introduce an exact SAT encoding establishing exact values for trees, grids, and cycles.",
    "bibtex": "@article{duong2026dmaa,\n  title={An exact approach solving no hole anti-k-labeling of graphs},\n  author={Pham, Ngoc Hai Duong and Dao, Xuan Nghia and To, Van Khanh},\n  journal={Discrete Mathematics, Algorithms and Applications},\n  publisher={World Scientific},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Pham Ngoc Hai Duong", "Dao Xuan Nghia", "To Van Khanh"]
  },
  {
    "id": "duc-2026-bandwidth-coloring-pesquisa",
    "title": "Sat encodings for bandwidth coloring: a systematic design study",
    "authors": ["Nguyen Kim Trung Duc", "Kieu Van Tuyen", "To Van Khanh"],
    "venue": "Pesquisa Operacional, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q4 SCOPUS (SUBMITTED)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["bandwidth-coloring", "vertex-coloring", "distance-constraints"],
    "abstract": "Bandwidth coloring generalizes graph coloring by imposing edge-specific separation distances between color assignments. We conduct an exhaustive evaluation of direct, support, and order SAT encodings coupled with symmetry breaking clauses.",
    "bibtex": "@article{duc2026bandwidth,\n  title={Sat encodings for bandwidth coloring: a systematic design study},\n  author={Nguyen, Kim Trung Duc and Kieu, Van Tuyen and To, Van Khanh},\n  journal={Pesquisa Operacional},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Nguyen Kim Trung Duc", "Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "kieu-2026-cutting-stock-jcsc",
    "title": "Solving the Two-Dimensional Single Stock Size Cutting Stock Problem with SAT and MaxSAT",
    "authors": ["Kieu Van Tuyen", "Hoang Linh Chi", "To Van Khanh"],
    "venue": "Journal of Computer Science and Cybernetics (JCSC), 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "JCSC (SUBMITTED)",
    "doi": None,
    "link": None,
    "research_pillar": "packing_cutting",
    "primary_pillar_id": "packing_cutting",
    "keywords": ["cutting-stock", "2d-cutting", "maxsat-optimization"],
    "abstract": "We present exact SAT and MaxSAT models for the 2D Single Stock Size Cutting Stock Problem (2D-SSSCSP). Our approach models spatial item interactions with compact non-overlap clauses and minimizes scrap area.",
    "bibtex": "@article{kieu2026jcsc,\n  title={Solving the Two-Dimensional Single Stock Size Cutting Stock Problem with SAT and MaxSAT},\n  author={Kieu, Van Tuyen and Hoang, Linh Chi and To, Van Khanh},\n  journal={Journal of Computer Science and Cybernetics},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Kieu Van Tuyen", "Hoang Linh Chi", "To Van Khanh"]
  },
  {
    "id": "kieu-2026-train-rescheduling-csonet",
    "title": "An Efficient MaxSAT-DDD Approach for Train Rescheduling via Precedence Propagation and Hybrid AMO Encodings",
    "authors": ["Kieu Van Tuyen", "Nguyen Huu Tan", "To Van Khanh"],
    "venue": "15th International Conference on Computational Social Networks (CSoNet 2026), Submitted",
    "year": 2026,
    "type": "Conference",
    "badge": "CSONET 2026 (SUBMITTED)",
    "doi": None,
    "link": None,
    "research_pillar": "line_balancing_scheduling",
    "primary_pillar_id": "line_balancing_scheduling",
    "keywords": ["train-rescheduling", "maxsat-ddd", "railway-networks"],
    "abstract": "We introduce MaxSAT-DDD, a railway train rescheduling framework that combines Dynamic Decoupled Domain (DDD) temporal reasoning with weighted Partial MaxSAT formulations. Experiments on dense corridor lines show real-time response times under unexpected track delays.",
    "bibtex": "@inproceedings{kieu2026csonet,\n  title={An Efficient MaxSAT-DDD Approach for Train Rescheduling via Precedence Propagation and Hybrid AMO Encodings},\n  author={Kieu, Van Tuyen and Nguyen, Huu Tan and To, Van Khanh},\n  booktitle={15th International Conference on Computational Social Networks (CSoNet 2026)},\n  year={2026}\n}",
    "is_featured": True,
    "highlighted_authors": ["Kieu Van Tuyen", "Nguyen Huu Tan", "To Van Khanh"]
  },
  {
    "id": "huong-2026-radio-labeling-wireless",
    "title": "An exact approach for Radio–k labeling of general graphs",
    "authors": ["Vu Thanh Huong", "Dao Van Duc", "To Van Khanh"],
    "venue": "Wireless Networks, Springer, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["radio-labeling", "channel-assignment", "wireless-networks"],
    "abstract": "Radio-k labeling assigns non-negative integers to vertices such that labels differ by at least k+1-d(u,v). We provide the first comprehensive exact SAT formulation for general graphs, settling open problems on large diameter topologies.",
    "bibtex": "@article{huong2026radio,\n  title={An exact approach for Radio-k labeling of general graphs},\n  author={Vu, Thanh Huong and Dao, Van Duc and To, Van Khanh},\n  journal={Wireless Networks},\n  publisher={Springer},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Vu Thanh Huong", "Dao Van Duc", "To Van Khanh"]
  },
  {
    "id": "minh-2026-2d-bandwidth-dam",
    "title": "Exact SAT Solving for the Two-Dimensional Bandwidth Minimization Problem",
    "authors": ["Pham Quang Minh", "Dao Xuan Nghia", "To Van Khanh"],
    "venue": "Discrete Applied Mathematics, Elsevier, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["2d-bandwidth", "grid-embedding", "matrix-bandwidth"],
    "abstract": "The 2D Bandwidth Minimization Problem seeks to embed graph vertices onto a 2D integer grid while minimizing maximum Euclidean edge length. We present an exact SAT decision procedure leveraging geometric bounding boxes.",
    "bibtex": "@article{minh2026bandwidth,\n  title={Exact SAT Solving for the Two-Dimensional Bandwidth Minimization Problem},\n  author={Pham, Quang Minh and Dao, Xuan Nghia and To, Van Khanh},\n  journal={Discrete Applied Mathematics},\n  publisher={Elsevier},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Pham Quang Minh", "Dao Xuan Nghia", "To Van Khanh"]
  },
  {
    "id": "duc-2026-bandwidth-multicoloring-rairo",
    "title": "Providing optimality of the bandwidth multicoloring problem by SAT",
    "authors": ["Nguyen Kim Trung Duc", "To Van Khanh"],
    "venue": "RAIRO - Operations Research, EDP Sciences, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q3 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["multicoloring", "bandwidth-multicoloring", "exact-sat"],
    "abstract": "In bandwidth multicoloring, each vertex requires a set of distinct colors subject to distance constraints. We design order encodings that exploit multi-interval relaxations, solving challenging instances from the literature.",
    "bibtex": "@article{duc2026multicoloring,\n  title={Providing optimality of the bandwidth multicoloring problem by SAT},\n  author={Nguyen, Kim Trung Duc and To, Van Khanh},\n  journal={RAIRO - Operations Research},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Nguyen Kim Trung Duc", "To Van Khanh"]
  },
  {
    "id": "bao-2026-ualbp-engopt",
    "title": "Makespan minimization for Simple Assembly Line Balancing Problem with power peak consumption constraints: modeling and solving in SAT",
    "authors": ["Hoang Gia Bao", "Kieu Van Tuyen", "To Van Khanh"],
    "venue": "Engineering Optimization, Taylor & Francis, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "line_balancing_scheduling",
    "primary_pillar_id": "line_balancing_scheduling",
    "keywords": ["salbp", "makespan-minimization", "power-peak"],
    "abstract": "We investigate joint makespan and peak electrical demand optimization in assembly line manufacturing. By mapping the coupled scheduling domain into SAT cardinality networks, our method finds provably optimal configurations.",
    "bibtex": "@article{bao2026salbp,\n  title={Makespan minimization for Simple Assembly Line Balancing Problem with power peak consumption constraints: modeling and solving in SAT},\n  author={Hoang, Gia Bao and Kieu, Van Tuyen and To, Van Khanh},\n  journal={Engineering Optimization},\n  publisher={Taylor & Francis},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Hoang Gia Bao", "Kieu Van Tuyen", "To Van Khanh"]
  },
  {
    "id": "truong-2026-antibandwidth-dam",
    "title": "Minimum-Span Antibandwidth and Cyclic Antibandwidth Labeling Problems",
    "authors": ["Truong Xuan Hieu", "To Van Khanh"],
    "venue": "Discrete Applied Mathematics, Elsevier, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "graph_labeling_fap",
    "primary_pillar_id": "graph_labeling_fap",
    "keywords": ["antibandwidth", "cyclic-antibandwidth", "minimum-span"],
    "abstract": "We explore minimum-span variations of the antibandwidth problem on graphs. A comprehensive SAT-based constraint pipeline establishes theoretical upper and lower bounds for standard benchmark classes.",
    "bibtex": "@article{truong2026antibandwidth,\n  title={Minimum-Span Antibandwidth and Cyclic Antibandwidth Labeling Problems},\n  author={Truong, Xuan Hieu and To, Van Khanh},\n  journal={Discrete Applied Mathematics},\n  publisher={Elsevier},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Truong Xuan Hieu", "To Van Khanh"]
  },
  {
    "id": "dao-2026-sequence-constraints-sat",
    "title": "Solving Sequence Constraints in SAT",
    "authors": ["Dao Xuan Nghia", "To Van Khanh"],
    "venue": "Constraints / Journal of Automated Reasoning, Springer, 2026",
    "year": 2026,
    "type": "Journal",
    "badge": "Q2/Q3 ISI (MANUSCRIPT)",
    "doi": None,
    "link": None,
    "research_pillar": "encodings_solvers",
    "primary_pillar_id": "encodings_solvers",
    "keywords": ["sequence-constraints", "automated-reasoning", "sat-encoding"],
    "abstract": "Sequence constraints arise in scheduling, car sequencing, and employee rostering. We conduct a systematic analysis of decomposition methods into Boolean formulas, proving generalized arc consistency conditions for our novel encodings.",
    "bibtex": "@article{dao2026sequence,\n  title={Solving Sequence Constraints in SAT},\n  author={Dao, Xuan Nghia and To, Van Khanh},\n  journal={Constraints},\n  publisher={Springer},\n  year={2026}\n}",
    "is_featured": False,
    "highlighted_authors": ["Dao Xuan Nghia", "To Van Khanh"]
  }
]

with open(f"{data_dir}/publications.json", "w", encoding="utf-8") as f:
    json.dump(publications, f, indent=2, ensure_ascii=False)

# 5. people.json
people = {
  "leadership_and_faculty": [
    {
      "id": "to-van-khanh",
      "name": "Dr. To Van Khanh",
      "name_en": "Dr. To Van Khanh",
      "title": "Senior Lecturer / Head of SATLab",
      "role_badge": "HEAD OF SATLAB / SENIOR LECTURER",
      "affiliation": "Faculty of Information Technology, UET-VNU",
      "email": "khanhtv@vnu.edu.vn",
      "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi",
      "bio": "Dr. To Van Khanh is the Head of SATLab and Senior Lecturer at the Faculty of Information Technology, VNU University of Engineering and Technology (UET-VNU). He specializes in Formal Automated Reasoning, SAT/MaxSAT/PB Encodings, Software Verification, Symbolic Execution, and Combinatorial Optimization, authoring publications in COAP, RAIRO-OR, and ICAART.",
      "avatar": "/assets/images/people/to_van_khanh.png",
      "research_interests": ["Satisfiability (SAT/MaxSAT/PB)", "Software Verification", "Combinatorial Optimization", "Automated Reasoning"]
    },
    {
      "id": "kieu-van-tuyen",
      "name": "M.Sc. Kieu Van Tuyen",
      "name_en": "M.Sc. Kieu Van Tuyen",
      "title": "Lead Researcher / PhD Candidate",
      "role_badge": "LEAD RESEARCHER / PHD CANDIDATE",
      "affiliation": "Faculty of Information Technology, UET-VNU",
      "email": "tuyenkv@vnu.edu.vn",
      "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi",
      "bio": "M.Sc. Kieu Van Tuyen is a PhD candidate and lead researcher at SATLab UET. He leads research in SAT encodings for Industrial Scheduling, Assembly Line Balancing, Social Golfer, 2D Strip Packing, and Real-Time Railway Rescheduling via MaxSAT-DDD, with first-author papers in RAIRO-OR, CIT, Pesquisa Operacional, and JCO.",
      "avatar": "/assets/images/people/kieu_van_tuyen.png",
      "research_interests": ["SAT/MaxSAT Encodings", "Assembly Line Balancing", "2D Packing & Cutting", "Railway Rescheduling", "Exact Solvers"]
    },
    {
      "id": "truong-xuan-hieu",
      "name": "M.Sc. Student Truong Xuan Hieu",
      "name_en": "M.Sc. Student Truong Xuan Hieu",
      "title": "M.Sc. Student / Senior Researcher",
      "role_badge": "SENIOR RESEARCHER / MSC CANDIDATE",
      "affiliation": "Faculty of Information Technology, UET-VNU",
      "email": "hieutx@vnu.edu.vn",
      "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi",
      "bio": "M.Sc. student at UET-VNU and primary developer of the SCLib architecture. First author of the breakthrough Cyclic Antibandwidth paper in Computational Optimization and Applications (COAP, Q1 ISI) and staircase cardinality counter algorithms in ICAART 2025.",
      "avatar": "/assets/images/people/truong_xuan_hieu.png",
      "research_interests": ["Cardinality Encodings (AMO/AMK)", "Sequential Counters", "Cyclic Antibandwidth", "C++ Solver Design"]
    },
    {
      "id": "vu-thanh-huong",
      "name": "M.Sc. Vu Thanh Huong",
      "name_en": "M.Sc. Vu Thanh Huong",
      "title": "Researcher / Lecturer",
      "role_badge": "FACULTY RESEARCHER",
      "affiliation": "Faculty of Information Technology, UET-VNU",
      "email": "huongvt@vnu.edu.vn",
      "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi",
      "bio": "Researcher at SATLab specializing in Pseudo-Boolean constraints, distance-constrained graph labelings (Radio-k Labeling, k-Safe Labeling), incremental SAT solving algorithms, and formal verification methods.",
      "avatar": "/assets/images/people/vu_thanh_huong.png",
      "research_interests": ["Incremental SAT", "Radio-k Labeling", "Safe Labeling", "Pseudo-Boolean Optimization"]
    },
    {
      "id": "dao-xuan-nghia",
      "name": "M.Sc. Student Dao Xuan Nghia",
      "name_en": "M.Sc. Student Dao Xuan Nghia",
      "title": "M.Sc. Student / Researcher",
      "role_badge": "MSC RESEARCHER",
      "affiliation": "Faculty of Information Technology, UET-VNU",
      "email": "nghiadx@vnu.edu.vn",
      "office": "Building E3, 144 Xuan Thuy, Cau Giay, Hanoi",
      "bio": "Researcher in sequence constraints, frequency assignment problems (MO-FAP), cellular network optimization, and automated decision solvers in IEEE Latin America Transactions and Constraints.",
      "avatar": "/assets/images/people/dao_xuan_nghia.png",
      "research_interests": ["Sequence Constraints", "Frequency Assignment (FAP)", "Telecommunications Optimization"]
    }
  ],
  "web_tech_lead": [
    {
      "id": "kieu-van-tuyen-lead",
      "name": "M.Sc. Kieu Van Tuyen",
      "role_badge": "SYSTEMS & ALGORITHMS ARCHITECT",
      "role": "Systems & Algorithms Architect",
      "affiliation": "SATLab UET",
      "current_status": "PhD Candidate & Lab Lead Researcher",
      "featured_publications": ["kieu-2026-social-golfer-rairo", "kieu-2025-strip-packing-pesquisa"],
      "research_interests": ["Automated Reasoning", "Distributed Solver Frameworks", "Algorithm Engineering"],
      "email": "tuyenkv@vnu.edu.vn"
    }
  ],
  "hall_of_fame": [
    {
      "id": "hof-1",
      "name": "Truong Xuan Hieu",
      "name_en": "Truong Xuan Hieu",
      "achievement": "First author of Q1 ISI Springer Paper (COAP) during Master studies",
      "achievement_en": "Authored Q1 ISI Springer Paper (COAP) with novel SAT encodings for Cyclic Antibandwidth",
      "destination_institution": "VNU University of Engineering and Technology",
      "country": "Vietnam",
      "year": 2026,
      "award_type": "Research Excellence Award",
      "field": "Combinatorial Optimization"
    },
    {
      "id": "hof-2",
      "name": "Nguyen Kim Trung Duc",
      "name_en": "Nguyen Kim Trung Duc",
      "achievement": "Valedictorian / Outstanding Undergraduate Researcher with 3 international papers",
      "achievement_en": "Published 3 peer-reviewed international papers (RAIRO-OR, Pesquisa, CITA) as undergraduate (K68CS3)",
      "destination_institution": "VNU University of Engineering and Technology",
      "country": "Vietnam",
      "year": 2026,
      "award_type": "Best Student Researcher Award",
      "field": "Graph Labeling & SAT"
    },
    {
      "id": "hof-3",
      "name": "Nguyen Tan Nguyen",
      "name_en": "Nguyen Tan Nguyen",
      "achievement": "Co-author in RAIRO - Operations Research (Q3 ISI) during undergraduate program",
      "achievement_en": "Co-authored high-impact operations research breakthrough for the Social Golfer Problem",
      "destination_institution": "VNU University of Engineering and Technology",
      "country": "Vietnam",
      "year": 2025,
      "award_type": "Undergraduate Research Fellow",
      "field": "Combinatorial Optimization"
    }
  ],
  "graduate_and_undergraduate_student_researchers": [
    {
      "id": "nguyen-kim-trung-duc",
      "name": "Nguyen Kim Trung Duc",
      "name_en": "Nguyen Kim Trung Duc",
      "major": "Computer Science (K68CS3)",
      "institution": "UET-VNU",
      "email": "ducnkt_68@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Bandwidth Coloring (Pesquisa 2026)", "Bandwidth Multicoloring (RAIRO-OR)", "k-Safe Labeling (CITA 2026)"],
      "research_interests": ["Bandwidth Coloring", "Multicoloring", "Safe Labeling", "Incremental SAT"]
    },
    {
      "id": "le-quy-duong",
      "name": "Le Quy Duong",
      "name_en": "Le Quy Duong",
      "major": "Computer Science (K66CS)",
      "institution": "UET-VNU",
      "email": "duonglq_66@vnu.edu.vn",
      "current_status": "Alumnus / Co-Author",
      "featured_publications": ["2D Strip Packing in Pesquisa Operacional (2025)"],
      "research_interests": ["2D Strip Packing", "Spatial Constraint Encodings"]
    },
    {
      "id": "hoang-linh-chi",
      "name": "Hoang Linh Chi",
      "name_en": "Hoang Linh Chi",
      "major": "Computer Science (K67CS)",
      "institution": "UET-VNU",
      "email": "chihl_67@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["2D Bin Packing (KSE 2025)", "Cutting Stock Problem (JCSC 2026)"],
      "research_interests": ["2D Bin Packing", "Cutting Stock Problem", "MaxSAT"]
    },
    {
      "id": "nguyen-tan-nguyen",
      "name": "Nguyen Tan Nguyen",
      "name_en": "Nguyen Tan Nguyen",
      "major": "Computer Science High-Quality Program (K67CC)",
      "institution": "UET-VNU",
      "email": "nguyennt_67@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Social Golfer Problem in RAIRO - Operations Research (2026)"],
      "research_interests": ["Symmetry Breaking", "Social Golfer Problem"]
    },
    {
      "id": "nguyen-hong-quan",
      "name": "Nguyen Hong Quan",
      "name_en": "Nguyen Hong Quan",
      "major": "Computer Engineering (K67C)",
      "institution": "UET-VNU",
      "email": "quannh_67@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Nurse Rostering Sequence Constraints (ISCIT 2025)"],
      "research_interests": ["Nurse Rostering", "Sequence Constraints in SAT"]
    },
    {
      "id": "hoang-gia-bao",
      "name": "Hoang Gia Bao",
      "name_en": "Hoang Gia Bao",
      "major": "Information Technology (K68IT20)",
      "institution": "UET-VNU",
      "email": "baohg_68@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Power Peak Minimization in Assembly Lines (JCO 2026, EngOpt 2026)"],
      "research_interests": ["Assembly Line Balancing", "Power Peak Minimization", "Makespan Optimization"]
    },
    {
      "id": "nguyen-chi-phong",
      "name": "Nguyen Chi Phong",
      "name_en": "Nguyen Chi Phong",
      "major": "Information Technology (K69IT1)",
      "institution": "UET-VNU",
      "email": "phongnc_69@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Assembly Line Balancing SAT Encodings in JCO (2026)"],
      "research_interests": ["Assembly Line Balancing", "SAT Cumulative Constraints"]
    },
    {
      "id": "pham-ngoc-hai-duong",
      "name": "Pham Ngoc Hai Duong",
      "name_en": "Pham Ngoc Hai Duong",
      "major": "Computer Science (K68CS3)",
      "institution": "UET-VNU",
      "email": "duongpnh_68@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["No-Hole Anti-k-Labeling (DMAA / VJCS 2026)"],
      "research_interests": ["No-Hole Anti-k-Labeling", "Graph Labeling Algorithms"]
    },
    {
      "id": "do-duc-long",
      "name": "Do Duc Long",
      "name_en": "Do Duc Long",
      "major": "Computer Science (K69CS2)",
      "institution": "UET-VNU",
      "email": "longdd_69@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Exact k-Safe Labeling via Incremental SAT (CITA 2026)"],
      "research_interests": ["k-Safe Labeling", "Incremental SAT Solvers"]
    },
    {
      "id": "dang-anh-phuong",
      "name": "Dang Anh Phuong",
      "name_en": "Dang Anh Phuong",
      "major": "Information Technology (K69IT5)",
      "institution": "UET-VNU",
      "email": "phuongda_69@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Minimum Order Frequency Assignment Problem (IEEE Latin America Trans 2026)"],
      "research_interests": ["Frequency Assignment Problems (FAP)", "Cellular Network Optimization"]
    },
    {
      "id": "nguyen-huu-tan",
      "name": "Nguyen Huu Tan",
      "name_en": "Nguyen Huu Tan",
      "major": "Computer Science (K67CS1)",
      "institution": "UET-VNU",
      "email": "tannh_67@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Railway Train Rescheduling via MaxSAT-DDD (CSoNet 2026)"],
      "research_interests": ["MaxSAT Dynamic Decoupled Domain", "Railway Train Rescheduling"]
    },
    {
      "id": "dao-van-duc",
      "name": "Dao Van Duc",
      "name_en": "Dao Van Duc",
      "major": "Computer Science (K69CS5)",
      "institution": "UET-VNU",
      "email": "ducdv_69@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["Radio-k Labeling of General Graphs (Wireless Networks 2026)"],
      "research_interests": ["Radio-k Labeling", "Channel Assignment in Wireless Networks"]
    },
    {
      "id": "pham-quang-minh",
      "name": "Pham Quang Minh",
      "name_en": "Pham Quang Minh",
      "major": "Information Technology (K69IT5)",
      "institution": "UET-VNU",
      "email": "minhpq_69@vnu.edu.vn",
      "current_status": "Active Student Researcher",
      "featured_publications": ["2D Bandwidth Minimization Problem (Discrete Applied Math 2026)"],
      "research_interests": ["2D Bandwidth Minimization", "Geometric Graph Embeddings"]
    }
  ],
  "alumni": [
    {
      "id": "alumni-1",
      "name": "Le Quy Duong",
      "name_en": "Le Quy Duong",
      "period": "2021 – 2025",
      "former_role": "Undergraduate Researcher (K66CS)",
      "current_position": "Software Engineer & Research Fellow",
      "institution": "Hanoi, Vietnam",
      "email": ""
    }
  ],
  "global_academic_partners": [
    {
      "id": "uet-vnu",
      "name": "VNU University of Engineering and Technology (UET-VNU)",
      "country": "Vietnam",
      "institution": "VNU University of Engineering and Technology (UET-VNU)",
      "research_focus": "Automated Reasoning, SAT Encodings & Optimization",
      "joint_papers_count": 21
    },
    {
      "id": "vnu-hus",
      "name": "VNU University of Science (VNU-HUS)",
      "country": "Vietnam",
      "institution": "VNU University of Science (VNU-HUS)",
      "research_focus": "Discrete Mathematics & Graph Algorithms",
      "joint_papers_count": 8
    }
  ]
}

with open(f"{data_dir}/people.json", "w", encoding="utf-8") as f:
    json.dump(people, f, indent=2, ensure_ascii=False)

# 6. projects.json
projects = [
  {
    "id": "sclib-solver",
    "title_en": "SCLib: Shared Counter Library & Solver Ecosystem",
    "title_vi": "Hệ sinh thái thư viện bộ đếm chia sẻ SCLib cho SAT",
    "category": "Core Solvers",
    "category_en": "Core Solvers",
    "sponsor": "VNU University of Engineering and Technology (UET-VNU)",
    "period": "2024 – Present",
    "status": "Active",
    "research_domain": "Automated Reasoning & Encodings",
    "leads": [
      {"name": "M.Sc. Student Truong Xuan Hieu", "role": "Lead Architect", "affiliation": "UET-VNU"},
      {"name": "Dr. To Van Khanh", "role": "Principal Investigator", "affiliation": "UET-VNU"}
    ],
    "description_en": "High-performance C++ solver library implementing New Sequential Counter (NSC) variants, ladder-shaped AMO/AMK cardinality encodings, and Pseudo-Boolean translations. SCLib provides optimal clause representations for large-scale industrial satisfiability instances.",
    "outcomes": [
      "New Sequential Counter (NSC) implementation with halved auxiliary variable overhead",
      "Staircase and ladder cardinality constraint translations maintaining unit propagation",
      "Published in COAP (Q1 ISI) and ICAART 2025"
    ],
    "tags": ["sclib", "cardinality-constraints", "sequential-counters", "sat-solver"]
  },
  {
    "id": "maxsat-ddd-railway",
    "title_en": "MaxSAT-DDD: Real-Time Railway Train Rescheduling System",
    "title_vi": "Hệ thống điều hành và lập lại lịch trình tàu hỏa thời gian thực bằng MaxSAT-DDD",
    "category": "Industrial Applications",
    "category_en": "Industrial Applications",
    "sponsor": "National Research Initiative",
    "period": "2025 – Present",
    "status": "Active",
    "research_domain": "Industrial Scheduling & Operations Research",
    "leads": [
      {"name": "M.Sc. Kieu Van Tuyen", "role": "Lead Researcher", "affiliation": "UET-VNU"},
      {"name": "Nguyen Huu Tan", "role": "Co-Investigator", "affiliation": "UET-VNU"},
      {"name": "Dr. To Van Khanh", "role": "Principal Investigator", "affiliation": "UET-VNU"}
    ],
    "description_en": "Real-time railway rescheduling system combining Dynamic Decoupled Domain (DDD) temporal reasoning with weighted Partial MaxSAT formulations. Outperforms CP and MIP solvers under dynamic disturbance scenarios on single-track and multi-track corridors.",
    "outcomes": [
      "Precedence propagation and dynamic domain pruning reducing resolution search trees by up to 80%",
      "Sub-second re-optimization across complex passenger and freight traffic networks",
      "Submitted to CSoNet 2026"
    ],
    "tags": ["train-rescheduling", "maxsat-ddd", "railway-networks", "dynamic-scheduling"]
  },
  {
    "id": "salbp-power",
    "title_en": "SALBP-Power: Assembly Line Power Peak Minimization",
    "title_vi": "Tối thiểu hóa đỉnh công suất điện trên dây chuyền lắp ráp công nghiệp",
    "category": "Manufacturing & Scheduling",
    "category_en": "Manufacturing & Scheduling",
    "sponsor": "UET-VNU",
    "period": "2025 – Present",
    "status": "Active",
    "research_domain": "Manufacturing & Energy Optimization",
    "leads": [
      {"name": "M.Sc. Kieu Van Tuyen", "role": "Lead Researcher", "affiliation": "UET-VNU"},
      {"name": "Nguyen Chi Phong", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Hoang Gia Bao", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Dr. To Van Khanh", "role": "Principal Investigator", "affiliation": "UET-VNU"}
    ],
    "description_en": "SAT encodings for minimizing peak energy consumption and makespan in Simple and U-shaped Assembly Line Balancing Problems (SALBP / UALBP). Addresses industrial peak-shaving needs while enforcing strict precedence and cycle-time boundaries.",
    "outcomes": [
      "First exact SAT formulation for power peak constrained line balancing",
      "Proven superior to CPLEX and CP-SAT on benchmark problem libraries",
      "Under Major Revision at Journal of Combinatorial Optimization (JCO) & Engineering Optimization"
    ],
    "tags": ["line-balancing", "salbp", "power-peak", "energy-efficiency"]
  },
  {
    "id": "sat-packing-cutting",
    "title_en": "SAT-Packing: 2D Strip Packing & Cutting Stock Solvers",
    "title_vi": "Bộ giải SAT cho bài toán xếp hình 2 chiều và cắt vật liệu tối ưu",
    "category": "Spatial Optimization",
    "category_en": "Spatial Optimization",
    "sponsor": "UET-VNU",
    "period": "2024 – Present",
    "status": "Active",
    "research_domain": "Geometric Optimization & Cutting Stock",
    "leads": [
      {"name": "M.Sc. Kieu Van Tuyen", "role": "Lead Researcher", "affiliation": "UET-VNU"},
      {"name": "Le Quy Duong", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Hoang Linh Chi", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Dr. To Van Khanh", "role": "Principal Investigator", "affiliation": "UET-VNU"}
    ],
    "description_en": "Compact SAT and MaxSAT encodings for 2D Strip Packing, 2D Bin Packing, and Cutting Stock Problems. Integrates order encodings with non-overlapping bounding constraints to establish new optimal solutions for open instances.",
    "outcomes": [
      "Published in Pesquisa Operacional (2025) and IEEE KSE 2025",
      "Optimal stock utilization algorithm submitted to JCSC 2026",
      "Significant speedups over mixed-integer programming (MIP)"
    ],
    "tags": ["strip-packing", "bin-packing", "cutting-stock", "2d-packing"]
  },
  {
    "id": "sat-graph-labeling",
    "title_en": "SAT-Graph: Exact Graph Labeling & Frequency Assignment",
    "title_vi": "Giải pháp SAT chính xác cho gán nhãn đồ thị và phân bổ tần số vô tuyến",
    "category": "Graph Theory & Telecom",
    "category_en": "Graph Theory & Telecom",
    "sponsor": "UET-VNU",
    "period": "2024 – Present",
    "status": "Active",
    "research_domain": "Graph Embeddings & Wireless Communications",
    "leads": [
      {"name": "M.Sc. Student Truong Xuan Hieu", "role": "Lead Researcher", "affiliation": "UET-VNU"},
      {"name": "M.Sc. Student Dao Xuan Nghia", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Nguyen Kim Trung Duc", "role": "Researcher", "affiliation": "UET-VNU"},
      {"name": "Dr. To Van Khanh", "role": "Principal Investigator", "affiliation": "UET-VNU"}
    ],
    "description_en": "Exact decision algorithms for Antibandwidth, Cyclic Antibandwidth, Radio-k Labeling, Bandwidth Multicoloring, and Order Frequency Allocation using SAT and incremental solving pipelines.",
    "outcomes": [
      "Published in Computational Optimization and Applications (COAP, Q1 ISI)",
      "Published in IEEE Latin America Transactions, RAIRO-OR, and CITA 2026",
      "Settled decades-old open problems on hypercubes, grid graphs, and cycle embeddings"
    ],
    "tags": ["cyclic-antibandwidth", "antibandwidth", "radio-labeling", "frequency-assignment"]
  }
]

with open(f"{data_dir}/projects.json", "w", encoding="utf-8") as f:
    json.dump(projects, f, indent=2, ensure_ascii=False)

# 7. events.json
events = [
  {
    "id": "event-coap-cyclic-antibandwidth-accepted",
    "title": "SATLab Paper on Cyclic Antibandwidth Accepted in COAP (Q1 ISI Springer)",
    "title_vi": "Bài báo về Cyclic Antibandwidth của SATLab được chấp nhận đăng trên tạp chí COAP (Q1 ISI Springer)",
    "date": "2026-03-15",
    "category": "Scientific Breakthrough",
    "badge": "Q1 ISI ACCEPTANCE",
    "summary": "Our paper 'Solving Cyclic Antibandwidth Problem by SAT' authored by Truong Xuan Hieu and Dr. To Van Khanh has been formally accepted for publication in Computational Optimization and Applications (COAP, Springer).",
    "summary_vi": "Công trình nghiên cứu 'Solving Cyclic Antibandwidth Problem by SAT' của Trương Xuân Hiếu và TS. Tô Văn Khánh chính thức được chấp nhận đăng trên tạp chí Computational Optimization and Applications (COAP, Springer, Q1 ISI).",
    "tags": ["cyclic-antibandwidth", "coap", "springer", "q1-isi"],
    "featured": True
  },
  {
    "id": "event-monograph-release-2026",
    "title": "Release of Academic Monograph: 'Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp'",
    "title_vi": "Phát hành sách chuyên khảo: 'Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp'",
    "date": "2026-04-10",
    "category": "Publication Release",
    "badge": "FLAGSHIP MONOGRAPH",
    "summary": "SATLab officially releases the comprehensive 116-page academic monograph synthesizing theoretical foundations and practical software engineering for optimal SAT encodings in combinatorial optimization, available in online HTML edition and PDF.",
    "summary_vi": "SATLab chính thức ra mắt cuốn sách chuyên khảo dài 116 trang tổng hợp nền tảng lý thuyết và kỹ thuật biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp, đọc trực tuyến và tải PDF miễn phí.",
    "tags": ["sat-monograph", "academic-book", "open-access", "uet-vnu"],
    "featured": True
  },
  {
    "id": "event-jco-major-revisions-salbp",
    "title": "Power Peak Line Balancing Manuscript Received Major Revision in JCO (Springer)",
    "title_vi": "Bản thảo tối thiểu hóa đỉnh công suất trên dây chuyền lắp ráp nhận Major Revision tại JCO (Springer)",
    "date": "2026-06-02",
    "category": "Scientific Breakthrough",
    "badge": "JOURNAL PROGRESS",
    "summary": "Our research on 'Compact SAT Encoding for Power Peak Minimization in Assembly Line Balancing' by Kieu Van Tuyen, Nguyen Chi Phong, Hoang Gia Bao, and Dr. To Van Khanh received positive reviewer reports and Major Revision in Journal of Combinatorial Optimization.",
    "summary_vi": "Nghiên cứu về biểu diễn SAT cho bài toán tối thiểu hóa công suất đỉnh trong cân bằng chuyền nhận đánh giá rất tích cực và đang hoàn thiện Major Revision tại Journal of Combinatorial Optimization (Springer).",
    "tags": ["line-balancing", "jco", "energy-minimization", "major-revision"],
    "featured": True
  },
  {
    "id": "event-cita-2026-acceptance-safe-labeling",
    "title": "Exact k-Safe Labeling via Incremental SAT Accepted at CITA 2026",
    "title_vi": "Công trình k-Safe Labeling qua SAT gia tăng được chấp nhận tại hội nghị CITA 2026",
    "date": "2026-05-20",
    "category": "Conference Presentation",
    "badge": "CONFERENCE ACCEPTANCE",
    "summary": "The paper 'Exact k-Safe Labeling via Incremental SAT Solving' co-authored by Vu Thanh Huong, Nguyen Kim Trung Duc, Do Duc Long, and Dr. To Van Khanh has been accepted for presentation at CITA 2026.",
    "summary_vi": "Bài báo về thuật toán giải chính xác k-Safe Labeling bằng SAT gia tăng được chấp nhận báo cáo tại hội nghị CITA 2026.",
    "tags": ["cita-2026", "incremental-sat", "safe-labeling"],
    "featured": False
  },
  {
    "id": "event-no-hole-anti-k-submission",
    "title": "No-Hole Anti-k-Labeling Exact Approach Submitted to VJCS / DMAA",
    "title_vi": "Nộp bản thảo nghiên cứu No-Hole Anti-k-Labeling tới tạp chí VJCS / DMAA",
    "date": "2026-02-18",
    "category": "Research Submission",
    "badge": "MANUSCRIPT SUBMISSION",
    "summary": "Pham Ngoc Hai Duong, Dao Xuan Nghia, and Dr. To Van Khanh finalized and submitted their exact SAT framework solving no-hole anti-k-labeling of graphs, establishing optimal span values for complex graph classes.",
    "summary_vi": "Nhóm nghiên cứu Phạm Ngọc Hải Dương, Đào Xuân Nghĩa và TS. Tô Văn Khánh hoàn thiện nộp bản thảo giải chính xác No-Hole Anti-k-Labeling của đồ thị.",
    "tags": ["no-hole-labeling", "vjcs", "dmaa", "graph-labeling"],
    "featured": False
  }
]

with open(f"{data_dir}/events.json", "w", encoding="utf-8") as f:
    json.dump(events, f, indent=2, ensure_ascii=False)

# 8. achievements.json
achievements = [
  {
    "id": "achieve-coap",
    "title": "Paper Accepted in Computational Optimization and Applications (Q1 ISI)",
    "date": "2026",
    "description": "Groundbreaking exact SAT algorithm for Cyclic Antibandwidth published in prestigious Springer journal COAP.",
    "category": "Publication"
  },
  {
    "id": "achieve-monograph",
    "title": "Published 116-Page Monograph on Optimal SAT Encodings",
    "date": "2026",
    "description": "Comprehensive reference monograph for automated reasoning and combinatorial optimization at UET-VNU.",
    "category": "Monograph"
  },
  {
    "id": "achieve-students",
    "title": "Over 10 Undergraduates Co-Authoring International Peer-Reviewed Papers",
    "date": "2025–2026",
    "description": "Exceptional student research mentorship with undergraduate co-authors in RAIRO-OR, Pesquisa, KSE, ISCIT, and CITA.",
    "category": "Mentorship"
  }
]

with open(f"{data_dir}/achievements.json", "w", encoding="utf-8") as f:
    json.dump(achievements, f, indent=2, ensure_ascii=False)

# 9. seminars.json
seminars = [
  {
    "id": "sem-1",
    "title": "Cardinality and Pseudo-Boolean Encodings in Modern SAT Solvers",
    "speaker": "Dr. To Van Khanh",
    "affiliation": "SATLab UET",
    "date": "2026-03-20",
    "venue": "Room 302, Building E3, UET-VNU",
    "venue_type": "Hybrid",
    "status": "Archived",
    "abstract": "An overview of translation techniques from AMO, AMK, and general Pseudo-Boolean inequalities to CNF clauses maintaining generalized arc consistency."
  },
  {
    "id": "sem-2",
    "title": "Solving Industrial Scheduling & Line Balancing with MaxSAT",
    "speaker": "M.Sc. Kieu Van Tuyen",
    "affiliation": "SATLab UET",
    "date": "2026-04-15",
    "venue": "Room 302, Building E3, UET-VNU",
    "venue_type": "Hybrid",
    "status": "Archived",
    "abstract": "Formulations for Simple Assembly Line Balancing (SALBP) with power peak limits and precedence propagation."
  }
]

with open(f"{data_dir}/seminars.json", "w", encoding="utf-8") as f:
    json.dump(seminars, f, indent=2, ensure_ascii=False)

# 10. conferences_talks.json
conferences_talks = [
  {
    "id": "talk-icaart-2025",
    "title": "Sequential counter encoding for staircase at-most-one constraints",
    "conference": "ICAART 2025",
    "speaker": "M.Sc. Student Truong Xuan Hieu",
    "year": 2025,
    "location": "Porto, Portugal / Hybrid"
  },
  {
    "id": "talk-iscit-2025",
    "title": "Solving at-Least Sequence Constraints in Nurse Rostering Problem Using SAT",
    "conference": "ISCIT 2025",
    "speaker": "M.Sc. Student Dao Xuan Nghia",
    "year": 2025,
    "location": "IEEE ISCIT"
  }
]

with open(f"{data_dir}/conferences_talks.json", "w", encoding="utf-8") as f:
    json.dump(conferences_talks, f, indent=2, ensure_ascii=False)

# 11. social_posts.json
social_posts = [
  {
    "id": "post-1",
    "content": "SATLab chúc mừng Trương Xuân Hiếu và TS. Tô Văn Khánh với công trình nghiên cứu 'Solving Cyclic Antibandwidth Problem by SAT' vừa được chấp nhận đăng trên tạp chí Computational Optimization and Applications (COAP, Q1 ISI Springer)!",
    "date": "2026-03-15",
    "link": "https://www.facebook.com/satlab.uet/"
  },
  {
    "id": "post-2",
    "content": "Chính thức ra mắt cuốn sách chuyên khảo: 'Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp' (116 trang) do SATLab UET biên soạn. Bạn đọc có thể đọc online hoặc tải PDF miễn phí trên website của Lab.",
    "date": "2026-04-10",
    "link": "https://www.facebook.com/satlab.uet/"
  }
]

with open(f"{data_dir}/social_posts.json", "w", encoding="utf-8") as f:
    json.dump(social_posts, f, indent=2, ensure_ascii=False)

print("All SATLab data generated successfully!")
