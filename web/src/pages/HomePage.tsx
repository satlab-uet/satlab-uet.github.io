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

  const coreEngines = [
    {
      title: 'SCLib Encodings Engine',
      category: 'SOLVER ARCHITECTURE',
      formula: 'O(n) NSC · Staircase AMO',
      desc: 'High-performance shared counter library generating minimal auxiliary variables and clauses for unit propagation.',
      icon: 'developer_board',
      route: 'research' as PageRoute,
    },
    {
      title: 'MaxSAT-DDD Engine',
      category: 'RAILWAY & SCHEDULING',
      formula: 'Deterministic Precedence · DDD',
      desc: 'Real-time train dispatching and rescheduling across multi-track networks via Dynamic Decoupled Domain.',
      icon: 'train',
      route: 'projects' as PageRoute,
    },
    {
      title: '2D Packing & Cutting',
      category: 'SPATIAL OPTIMIZATION',
      formula: 'Non-Overlapping SAT vs CPLEX',
      desc: 'Exact spatial models with rotation for 2D Strip Packing and Bin Packing outperforming classic MIP solvers.',
      icon: 'view_in_ar',
      route: 'research' as PageRoute,
    },
    {
      title: 'Distance Graph Labeling',
      category: 'GRAPH THEORY & FAP',
      formula: 'COAP Q1 ISI · Radio-k',
      desc: 'Breakthrough exact solvers for Cyclic Antibandwidth, Bandwidth Multicoloring, and Minimum Order FAP.',
      icon: 'hub',
      route: 'publications' as PageRoute,
    },
  ];

  const pillarDetails: Record<
    PillarId,
    {
      desc: string;
      tagline: string;
    }
  > = {
    encodings_solvers: {
      tagline: 'Foundations & Architecture',
      desc:
        'Developing New Sequential Counter (NSC) variants, Cardinality constraints (AMO/AMK/ALK), Pseudo-Boolean translations, and high-performance solver libraries in the SCLib ecosystem.',
    },
    line_balancing_scheduling: {
      tagline: 'Industrial Decision Engines',
      desc:
        'Designing exact decision algorithms for Power Peak Minimization in Simple and U-shaped Assembly Line Balancing (SALBP / UALBP), Job-Shop Scheduling, and Railway Train Rescheduling via MaxSAT-DDD.',
    },
    packing_cutting: {
      tagline: 'Exact Spatial Reasoning',
      desc:
        'Formulating compact SAT and MaxSAT models with non-overlapping spatial constraints and rotation capabilities for 2D Strip Packing, 2D Bin Packing, and Cutting Stock Problems.',
    },
    graph_labeling_fap: {
      tagline: 'Distance & Frequency Graphs',
      desc:
        'Formulating specialized SAT encodings and exact solvers for graph embedding, frequency assignment problems (FAP), bandwidth coloring, and distance-constrained vertex labelings.',
    },
    supply_chain_optimization: {
      tagline: 'Operations Optimization',
      desc: 'Operations research and mathematical optimization for complex systems.',
    },
    ai_supply_chain_intelligence: {
      tagline: 'Automated Reasoning Systems',
      desc: 'Artificial intelligence and automated reasoning for intelligent decision making.',
    },
    decision_analytics: {
      tagline: 'Discrete Decision Analytics',
      desc: 'Decision analytics and algorithmic solutions for discrete optimization.',
    },
  };

  return (
    <div className="space-y-20 sm:space-y-28 py-6 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="section-shell pt-4 pb-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-blue-900 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SATLab · UET - VNU Hanoi</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-700">Automated Reasoning &amp; Exact Solvers</span>
          </div>

          {/* Hero Headline */}
          <h1 className="mt-6 font-editorial text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.12]">
            Automated Reasoning &amp; Exact Solvers for{' '}
            <span className="electric-gradient-text">Combinatorial Optimization</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 font-sans text-base sm:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto font-normal">
            SATLab UET advances the theory, mathematical modeling, and software engineering of
            Propositional Satisfiability (SAT), MaxSAT, and Pseudo-Boolean encodings, delivering
            high-confidence exact solvers for industrial scheduling, 2D packing, graph theory, and formal verification.
          </p>

          {/* Faculty & Core Research Roster Card */}
          <div className="mt-7 mx-auto max-w-3xl rounded-xl border border-slate-200/90 bg-white/90 p-4 backdrop-blur-md shadow-xs text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                <span className="font-bold text-slate-950">Faculty Leadership: </span>
                <span className="font-semibold text-blue-900">Dr. To Van Khanh</span> (Head of Lab) ·{' '}
                <span className="font-semibold text-blue-900">M.Sc. Kieu Van Tuyen</span> (Lab Coordinator) ·{' '}
                <span className="text-slate-600">M.Sc. Student Truong Xuan Hieu, M.Sc. Vu Thanh Huong, M.Sc. Student Dao Xuan Nghia, Nguyen Kim Trung Duc</span>
              </div>
              <a
                href="https://www.facebook.com/satlab.uet/"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-xs font-bold text-blue-700 hover:text-blue-900 font-mono inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Fanpage</span>
                <Icon name="north_east" className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('publications')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-sans text-sm font-bold text-white shadow-lift hover:bg-blue-950 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="menu_book" className="h-4 w-4 text-blue-400" />
              <span>Research Publications ({publications.length})</span>
              <Icon name="arrow_forward" className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-blue-50/70 px-5 py-3 font-sans text-sm font-bold text-blue-950 shadow-xs hover:bg-blue-100 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="auto_stories" className="h-4 w-4 text-blue-700" />
              <span>SAT Monograph (116p)</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-sans text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="hub" className="h-4 w-4 text-emerald-700" />
              <span>Projects &amp; Solvers</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('people')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-sans text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
            >
              <Icon name="groups" className="h-4 w-4 text-blue-700" />
              <span>Team &amp; Scholars</span>
            </button>
          </div>
        </div>

        {/* 4-Quadrant SATLab Core Engines Cockpit */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-950 uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span>Core Research Engines &amp; Frameworks</span>
            </div>
            <span className="font-mono text-[11px] text-slate-500">Exact Mathematical Guarantee</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreEngines.map((engine, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(engine.route)}
                className="group cursor-pointer rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lift relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-slate-500 mb-3">
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-800 border border-blue-200/60">
                    {engine.category}
                  </span>
                  <Icon name={engine.icon} className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-editorial text-base font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                  {engine.title}
                </h3>

                <p className="mt-1 font-mono text-[11px] font-semibold text-emerald-700">
                  {engine.formula}
                </p>

                <p className="mt-2.5 font-sans text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {engine.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-blue-700 group-hover:text-blue-900">
                  <span>Explore Engine</span>
                  <Icon name="arrow_forward" className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Counter Strip */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-slate-200/90 bg-white/90 p-5 shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              {publications.length}
            </p>
            <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-slate-600">
              Peer-Reviewed Publications
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-white/90 p-5 shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-black text-blue-700 tracking-tight">
              {recentJournalCount + 2}
            </p>
            <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-slate-600">
              ISI &amp; Scopus Journals
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-white/90 p-5 shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight">
              13+
            </p>
            <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-slate-600">
              Active Student Researchers
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/90 bg-white/90 p-5 shadow-xs text-center">
            <p className="font-mono text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">
              100%
            </p>
            <p className="mt-1 font-sans text-xs sm:text-sm font-semibold text-slate-600">
              Exact Optimality Solved
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Monograph Spotlight — Executive Obsidian Navy Card */}
      <section className="section-shell">
        <div className="rounded-3xl border border-blue-900/60 bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#0A192F] p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
          {/* Ambient tech glow */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300">
                <Icon name="auto_stories" className="h-3.5 w-3.5 text-amber-400" />
                <span>Flagship 116-Page Monograph · UET-VNU</span>
              </div>

              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-black text-white leading-tight">
                Optimal SAT Encodings for Combinatorial Optimization Problems
              </h2>
              <p className="mt-1.5 font-sans text-xs text-blue-200/80 italic">
                Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp
              </p>

              <p className="mt-4 font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                A comprehensive 116-page academic monograph synthesizing propositional satisfiability theory
                and practical algorithm engineering for combinatorial optimization: from New Sequential Counter (NSC)
                variants, trapezoidal and ladder cardinality constraints, 2D Strip &amp; Bin Packing,
                to industrial assembly line balancing (SALBP-Power), railway train rescheduling, and distance graph labeling.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-slate-200">116 Pages</span>
                <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-blue-300">11 Research Chapters</span>
                <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-emerald-300">100% Open Access</span>
                <span className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-amber-300">LuaLaTeX &amp; C++ Source</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="./read.html"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-sans text-sm font-bold text-white shadow-lift hover:bg-blue-500 transition hover:-translate-y-0.5 focus-ring"
                >
                  <Icon name="menu_book" className="h-4 w-4 text-blue-100" />
                  <span>Read Online (HTML Reader) ↗</span>
                </a>

                <a
                  href="./downloads/sat-book.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-sans text-sm font-bold text-white shadow-xs hover:bg-white/20 transition hover:-translate-y-0.5 focus-ring backdrop-blur-md"
                >
                  <Icon name="download" className="h-4 w-4 text-blue-300" />
                  <span>Download PDF (116p)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-blue-300 hover:text-white px-3 py-2 transition"
                >
                  <span>Explore Table of Contents</span>
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="./read.html" title="Read SAT Monograph Online" className="group block relative">
                <img
                  src="./assets/images/book-cover.webp"
                  alt="Optimal SAT Encodings for Combinatorial Optimization Problems"
                  className="h-84 w-auto rounded-2xl object-cover shadow-2xl ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-xl bg-slate-950/90 px-2.5 py-1 font-mono text-[10px] font-bold text-amber-300 backdrop-blur-sm border border-amber-400/20">
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
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
            SCIENTIFIC FOUNDATIONS
          </p>
          <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-black text-slate-950">
            Core Research Pillars
          </h2>
          <p className="mt-3 font-sans text-base text-slate-600">
            Our scientific agenda integrates rigorous mathematical constraint modeling with high-performance Boolean and MaxSAT solving engines.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('research')}
            className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-bold text-blue-700 hover:text-blue-900 focus-ring rounded-lg"
          >
            Explore topics and related papers
            <Icon name="arrow_forward" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {overview.research_pillars.map((pillar) => {
            const id = pillar.id as PillarId;
            const detail = pillarDetails[id] || { desc: pillar.description, tagline: 'Research Domain' };
            const isSelected = selectedPillar === id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(id)}
                className={`rounded-2xl border p-6 sm:p-7 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-lift bg-white'
                    : 'border-slate-200/90 bg-white/95 hover:border-blue-400/70 hover:shadow-soft'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <ResearchAreaIcon areaId={id} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    {detail.tagline}
                  </span>
                  <h3 className="min-w-0 font-editorial text-lg font-bold leading-snug text-slate-950">
                    {(pillar as unknown as { title_en?: string }).title_en || pillar.title}
                  </h3>
                </div>
                <p className="mt-3.5 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {detail.desc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {pillar.topics.slice(0, 3).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-700"
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
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              INTELLIGENCE &amp; MILESTONES
            </p>
            <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-black text-slate-950">
              News Briefs &amp; Announcements
            </h2>
            <p className="mt-2 font-sans text-base text-slate-600">
              Recent acceptances, prestigious journal publications, student achievements, and solver releases.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('events')}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-blue-700 hover:text-blue-900 transition self-start sm:self-auto"
          >
            <span>Read All Briefs ({events.length})</span>
            <Icon name="chevron_right" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredEvents.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-xs flex flex-col justify-between hover:border-blue-400 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-md bg-blue-100/80 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-900">
                    {item.badge || item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-slate-950 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
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
                  className="font-sans text-xs font-bold text-blue-700 hover:text-blue-900"
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
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              SCHOLARLY OUTPUT
            </p>
            <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-black text-slate-950">
              Flagship Publications
            </h2>
            <p className="mt-2 font-sans text-base text-slate-600">
              Peer-reviewed breakthroughs in Computational Optimization and Applications (COAP), RAIRO - Operations Research, and Pesquisa Operacional.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('publications')}
            className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-blue-700 hover:text-blue-900 transition self-start sm:self-auto"
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
        <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-white to-blue-50/40 p-8 sm:p-10 shadow-soft">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100/80 px-3 py-1 font-mono text-[11px] font-bold uppercase text-amber-900">
                <Icon name="auto_awesome" className="h-3.5 w-3.5 text-amber-700" />
                <span>Mentorship Excellence &amp; Student Research</span>
              </span>
              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
                Mentoring Undergraduate Scholars for Top-Tier Publications
              </h2>
              <p className="mt-3 font-sans text-base text-slate-700 leading-relaxed">
                Over 10 undergraduate and master students at UET-VNU (K66–K69) have authored or co-authored
                peer-reviewed papers in Q1/Q2/Q3 international journals and top conferences including COAP, RAIRO-OR,
                ICAART, KSE, and ISCIT.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('people')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-sans text-sm font-bold text-white shadow-lift hover:bg-blue-950 transition hover:-translate-y-0.5 focus-ring shrink-0"
            >
              <Icon name="workspace_premium" className="h-4 w-4 text-amber-400" />
              <span>Explore Research Team</span>
              <Icon name="arrow_forward" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Join Us / Callout */}
      <section className="section-shell pb-8">
        <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/20 p-8 sm:p-12 text-slate-900 shadow-soft relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-100/70 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-blue-900">
                <span>Opportunities for Researchers &amp; Students</span>
              </div>
              <h2 className="mt-4 font-editorial text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
                Join SATLab at UET - VNU
              </h2>
              <p className="mt-4 font-sans text-base text-slate-600 leading-relaxed max-w-2xl">
                We welcome undergraduate researchers, graduate scholars, and international academic collaborators who share a passion for automated reasoning, discrete mathematics, exact solver engineering, and combinatorial optimization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs text-slate-600">
                <span className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 shadow-xs">
                  <Icon name="location_on" className="h-4 w-4 text-blue-600" />
                  <span>Building E3, 144 Xuan Thuy, Cau Giay, Hanoi</span>
                </span>
                <a
                  href="mailto:khanhtv@vnu.edu.vn"
                  className="flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 shadow-xs text-slate-700 hover:text-blue-700 hover:border-blue-300 transition"
                >
                  <Icon name="mail" className="h-4 w-4 text-blue-600" />
                  <span>khanhtv@vnu.edu.vn</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm flex flex-col justify-center">
              <h3 className="font-editorial text-xl font-bold text-slate-950 mb-3">
                Research Engagement Tracks
              </h3>
              <ul className="space-y-3.5 font-sans text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 font-semibold">Undergraduate Scholars:</strong> Mentorship in C++ SAT encodings, solver benchmarking, and paper co-authorship.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check_circle" className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
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
