import React, { useState } from 'react';
import { Icon } from '../components/Icon';

export const BookPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@book{satlab2026monograph,
  title     = {Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp},
  english_title = {Optimal SAT Encodings for Combinatorial Optimization Problems},
  author    = {To, Van Khanh and Kieu, Van Tuyen and Truong, Xuan Hieu and Vu, Thanh Huong and Dao, Xuan Nghia and Nguyen, Kim Trung Duc},
  publisher = {SATLab Research Group, Faculty of Information Technology, VNU University of Engineering and Technology (UET-VNU)},
  year      = {2026},
  pages     = {116},
  url       = {https://satlab-uet.github.io/read.html}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const chapters = [
    { number: 'Chapter 1', title: 'Introduction & Research Background', desc: 'Research context, the pivotal role of SAT technology in modern computer science, and monograph syllabus overview.' },
    { number: 'Chapter 2', title: 'Propositional Logic & SAT Solving', desc: 'Conjunctive Normal Form (CNF), DPLL, Conflict-Driven Clause Learning (CDCL), clause learning, and unit propagation engines.' },
    { number: 'Chapter 3', title: 'Basic Constraint Encodings', desc: 'At-Most-One (AMO), At-Least-One (ALO), and Exactly-One (EO): Direct, Logarithmic, and Sequential Counter architectures.' },
    { number: 'Chapter 4', title: 'Cardinality Constraints & Advanced Encodings', desc: 'At-Most-K (AMK), At-Least-K (ALK), Totalizer, Sorting Networks, and binary counting networks.' },
    { number: 'Chapter 5', title: 'New Sequential Counter (NSC) for Cardinality Constraints', desc: 'Novel NSC architectures for staircase and ladder constraints, minimizing auxiliary variables and clause explosion.' },
    { number: 'Chapter 6', title: 'Two-Dimensional Strip Packing Problem (2D-SPP)', desc: 'Non-overlapping geometric modeling, relative coordinate constraints, binary height search, and CPLEX comparisons.' },
    { number: 'Chapter 7', title: 'Two-Dimensional Bin Packing Problem (2D-BPP)', desc: 'Bin assignment encodings, symmetry-breaking predicates, and comprehensive benchmarks against CP-SAT and MIP.' },
    { number: 'Chapter 8', title: 'Assembly Line Balancing with Power Peak Minimization (SALBP-Power)', desc: 'SALBP formulation under peak electrical load caps, real-time power accumulation, and station leveling.' },
    { number: 'Chapter 9', title: 'Real-Time Railway Train Rescheduling via MaxSAT-DDD', desc: 'MaxSAT Dynamic Decoupled Domain (DDD) framework integrating deterministic propagation with domain decomposition.' },
    { number: 'Chapter 10', title: 'Distance Graph Labeling & Frequency Assignment', desc: 'Antibandwidth, Cyclic Antibandwidth (COAP Q1 ISI), Radio-k Labeling, Bandwidth Multicoloring, and Minimum Order FAP.' },
    { number: 'Chapter 11', title: 'Conclusion & Open Research Directions', desc: 'Empirical scalability comparisons, performance synthesis, and open challenges in SAT/SMT/MaxSAT reasoning.' },
  ];

  return (
    <div className="section-shell py-10 sm:py-14 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-900 mb-4">
          <Icon name="auto_stories" className="h-3.5 w-3.5 text-sky-700" />
          <span>Official Academic Monograph</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
          Optimal SAT Encodings for Combinatorial Optimization Problems
        </h1>
        <p className="mt-2 font-editorial text-base text-slate-500 italic">
          Vietnamese title: Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp
        </p>
        <p className="mt-4 font-editorial text-lg text-slate-600 leading-relaxed max-w-3xl">
          A comprehensive 116-page peer-reviewed academic monograph authored by the SATLab UET research group,
          providing a rigorous journey from propositional satisfiability theory to advanced optimal encodings
          for classical and industrial combinatorial optimization challenges.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="mt-10 rounded-3xl border border-sky-200/90 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30 p-8 sm:p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-center">
          <div>
            <div className="space-y-4 font-editorial text-sm text-slate-700 leading-relaxed">
              <p>
                This monograph synthesizes years of foundational research and breakthrough results published in leading
                international journals—including <em>Computational Optimization and Applications</em> (COAP, Springer Q1 ISI),
                <em>RAIRO - Operations Research</em> (EDP Sciences, Q3 ISI), <em>Cybernetics and Information Technologies</em> (CIT, Q2 Scopus),
                <em>Pesquisa Operacional</em> (SciELO), and the <em>Journal of Combinatorial Optimization</em> (JCO, Springer).
              </p>
              <p>
                The volume presents standardized mathematical formulations and constraint models,
                validated across benchmark problem suites.
              </p>
            </div>

            {/* Quick Metadata Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Length</span>
                <span className="text-base font-extrabold text-slate-900">116 Pages</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Chapters</span>
                <span className="text-base font-extrabold text-sky-800">11 Chapters</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Formats</span>
                <span className="text-base font-extrabold text-emerald-800">PDF &amp; HTML</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Access</span>
                <span className="text-base font-extrabold text-amber-800">Open Access</span>
              </div>
            </div>

            {/* Download and Read CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="./read.html"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-900 px-6 py-3.5 font-editorial text-sm font-bold text-white shadow-lift hover:bg-sky-950 transition hover:-translate-y-0.5 focus-ring"
              >
                <Icon name="menu_book" className="h-4 w-4 text-cyan-300" />
                <span>Read Online (HTML Reader) ↗</span>
              </a>

              <a
                href="./downloads/sat-book.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-editorial text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
              >
                <Icon name="download" className="h-4 w-4 text-sky-700" />
                <span>Download Monograph PDF (116p)</span>
              </a>

              <a
                href="./downloads/sat-book-tex.zip"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-editorial text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5"
              >
                <Icon name="folder_zip" className="h-4 w-4 text-slate-500" />
                <span>LaTeX Source (ZIP)</span>
              </a>
            </div>
          </div>

          {/* Book Cover Visual */}
          <div className="flex flex-col items-center">
            <a href="./read.html" className="group block">
              <img
                src="./assets/images/book-cover.webp"
                alt="Book cover: Optimal SAT Encodings for Combinatorial Optimization Problems"
                className="h-80 w-auto rounded-2xl object-cover shadow-2xl ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-3 font-mono text-[11px] text-slate-500 text-center">
              Research &amp; Academic Monograph · UET-VNU
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents Section */}
      <section className="mt-16">
        <div className="max-w-3xl mb-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">
            STRUCTURE &amp; SYLLABUS
          </p>
          <h2 className="mt-1 font-editorial text-3xl font-bold text-slate-950">
            Table of Contents (11 Chapters)
          </h2>
          <p className="mt-2 font-editorial text-base text-slate-600">
            From propositional logic foundations to complex industrial optimization and distance graph labeling.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-xs backdrop-blur-sm hover:border-sky-300 transition"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-700 mb-1">
                <span>{ch.number}</span>
              </div>
              <h3 className="font-editorial text-base font-bold text-slate-950">
                {ch.title}
              </h3>
              <p className="mt-1.5 font-editorial text-xs text-slate-600 leading-relaxed">
                {ch.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BibTeX Citation Box */}
      <section className="mt-16 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="font-editorial text-base font-bold text-slate-950">
            Citation (BibTeX)
          </h3>
          <button
            type="button"
            onClick={handleCopyBibtex}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs font-semibold transition ${
              copied
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Icon name={copied ? 'check' : 'content_copy'} className="h-3.5 w-3.5" />
            <span>{copied ? 'Copied!' : 'Copy BibTeX'}</span>
          </button>
        </div>
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-sky-200 leading-relaxed">
          {bibtex}
        </pre>
      </section>
    </div>
  );
};
