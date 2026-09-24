import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { PaperCard } from '../components/PaperCard';
import { ResearchAreaIcon } from '../components/ResearchAreaIcon';
import { useResearchPillars, useTopicPublications } from '../context/DataContext';
import { PageRoute, ResearchPillarId } from '../types';
import researchKeywords from '../data/research_keywords.json';

interface ResearchTopicsPageProps {
  onNavigate: (route: PageRoute) => void;
}

const areas: {
  id: ResearchPillarId;
  topics: string[];
}[] = [
  {
    id: 'encodings_solvers',
    topics: [
      'cardinality-constraints',
      'sequential-counter',
      'staircase-amo',
      'ladder-amk',
      'social-golfer',
      'symmetry-breaking',
      'sequence-constraints',
      'automated-reasoning',
    ],
  },
  {
    id: 'line_balancing_scheduling',
    topics: [
      'scheduling',
      'task-scheduling',
      'parallel-resources',
      'assembly-line-balancing',
      'salbp',
      'power-peak',
      'energy-minimization',
      'makespan-minimization',
      'train-rescheduling',
      'maxsat-ddd',
      'nurse-rostering',
    ],
  },
  {
    id: 'packing_cutting',
    topics: [
      'strip-packing',
      'bin-packing',
      'cutting-stock',
      '2d-packing',
      'maxsat-optimization',
      'mip-cp-comparison',
    ],
  },
  {
    id: 'graph_labeling_fap',
    topics: [
      'cyclic-antibandwidth',
      'antibandwidth',
      'safe-labeling',
      'incremental-sat',
      'frequency-assignment',
      'minimum-order-fap',
      'no-hole-labeling',
      'anti-k-labeling',
      'bandwidth-coloring',
      'multicoloring',
      'radio-labeling',
      '2d-bandwidth',
    ],
  },
];

const topicIntroductions: Record<string, string> = {
  'cyclic-antibandwidth': 'Maximizing distance between adjacent vertices when embedding graphs on a ring cycle (COAP Q1 ISI).',
  'antibandwidth': 'Finding permutations of vertices that maximize the minimum difference between adjacent vertex labels.',
  'cardinality-constraints': 'Mating At-Most-One (AMO) and At-Most-K (AMK) constraints to CNF clauses preserving arc consistency.',
  'sequential-counter': 'Encoding counting networks with linear variables and clauses for unit propagation.',
  'staircase-amo': 'Compact sequential counter variants for staircase-structured cardinality constraints (ICAART 2025).',
  'ladder-amk': 'Shared counter registers across overlapping cardinality constraints with ladder geometry.',
  'social-golfer': 'Solving the round-robin golf pairing problem (CSPLib prob016) via symmetry breaking and SAT.',
  'symmetry-breaking': 'Pruning isomorphic permutations in combinatorial search spaces using lexicographic leader constraints.',
  'scheduling': 'Allocating scarce resources over discrete time horizons under precedence and capacity limits.',
  'task-scheduling': 'Exact SAT models for non-preemptive task scheduling on multiple identical resources (CIT 2025).',
  'parallel-resources': 'Distributing simultaneous execution demands across parallel machine architectures.',
  'strip-packing': 'Minimizing strip height while packing 2D rectangular items without overlap (Pesquisa 2025).',
  'bin-packing': 'Minimizing bin count when packing 2D geometric items with rotation options (KSE 2025).',
  'cutting-stock': 'Optimizing industrial cutting patterns on raw material sheets with minimal scrap (JCSC 2026).',
  '2d-packing': 'Encoding non-overlapping spatial boundaries into Boolean logic clauses.',
  'maxsat-optimization': 'Solving optimization objectives through weighted Partial MaxSAT and cost-bounding algorithms.',
  'mip-cp-comparison': 'Empirical benchmarking of SAT formulations against commercial Gurobi/CPLEX and CP-SAT solvers.',
  'sequence-constraints': 'Modeling consecutive occurrence rules in employee rostering and production line sequencing.',
  'nurse-rostering': 'Automating nurse shift scheduling under complex legal and organizational requirements (ISCIT 2025).',
  'safe-labeling': 'Assigning vertex labels such that distance-d neighbors satisfy distance gap conditions (CITA 2026).',
  'incremental-sat': 'Reusing learned clauses across repeated solver queries to accelerate optimization search.',
  'assembly-line-balancing': 'Distributing production tasks across assembly workstations under precedence constraints.',
  'power-peak': 'Minimizing peak electrical power demand on industrial manufacturing lines (JCO 2026).',
  'energy-minimization': 'Peak-shaving and energy-conscious combinatorial optimization in automated factories.',
  'frequency-assignment': 'Allocating radio channels in wireless communications to avoid electro-magnetic interference.',
  'minimum-order-fap': 'Minimizing the maximum frequency assigned in cellular telecommunication networks.',
  'no-hole-labeling': 'Injective vertex labeling without holes (gaps) satisfying distance separation inequalities.',
  'anti-k-labeling': 'Generalizing distance-constrained graph labelings to arbitrary distance metrics.',
  'bandwidth-coloring': 'Graph vertex coloring with edge-specific color separation intervals.',
  'multicoloring': 'Assigning sets of discrete color channels to vertices under adjacent interference bounds.',
  'train-rescheduling': 'Dynamic real-time dispatching and delay minimization on complex railway networks.',
  'maxsat-ddd': 'Integrating Dynamic Decoupled Domain reasoning with MaxSAT for real-time train dispatching.',
  'radio-labeling': 'Assigning radio channels to transmitters subject to geographic distance constraints.',
  '2d-bandwidth': 'Minimizing edge spans for 2D spatial embeddings of graph networks.',
  'salbp': 'Simple Assembly Line Balancing Problem exact resolution via propositional satisfiability.',
  'makespan-minimization': 'Minimizing total production run time across balancing workstations.',
  'automated-reasoning': 'Leveraging modern conflict-driven clause learning (CDCL) engines to solve discrete optimization.',
};

export const ResearchTopicsPage: React.FC<ResearchTopicsPageProps> = () => {
  const publications = useTopicPublications();
  const pillars = useResearchPillars();
  const [selectedArea, setSelectedArea] = useState<ResearchPillarId>('encodings_solvers');
  const [selectedTopic, setSelectedTopic] = useState('cardinality-constraints');

  const topicKeywords = researchKeywords.filter((keyword) => keyword.kind === 'topic');
  const papersForTopic = (topicId: string) => publications.filter((paper) => paper.keywords?.includes(topicId));
  const topicCount = (topicId: string) => papersForTopic(topicId).length;
  const activeTopics = topicKeywords.filter((keyword) => topicCount(keyword.id) > 0);
  const currentArea = areas.find((area) => area.id === selectedArea) ?? areas[0];
  const currentTopics = activeTopics
    .filter((keyword) => currentArea.topics.includes(keyword.id))
    .sort((a, b) => topicCount(b.id) - topicCount(a.id) || a.label.localeCompare(b.label));
  const currentTopic = currentTopics.find((keyword) => keyword.id === selectedTopic) ?? currentTopics[0];
  const relatedPapers = currentTopic ? papersForTopic(currentTopic.id) : [];

  const chooseArea = (areaId: ResearchPillarId) => {
    setSelectedArea(areaId);
    const area = areas.find((item) => item.id === areaId);
    const firstTopic = activeTopics
      .filter((keyword) => area?.topics.includes(keyword.id))
      .sort((a, b) => topicCount(b.id) - topicCount(a.id))[0];
    if (firstTopic) setSelectedTopic(firstTopic.id);
  };

  return (
    <div className="section-shell py-10 sm:py-14 animate-in fade-in duration-300">
      <div className="max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-800">
          <Icon name="hub" className="h-3.5 w-3.5" />
          Explore SATLab Research
        </div>
        <h1 className="font-editorial text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Core Research Topics
        </h1>
        <p className="mt-4 max-w-3xl font-editorial text-lg leading-relaxed text-slate-600">
          Explore the theoretical questions and applied optimization domains driving SATLab.
          Choose a research pillar, then click a topic to inspect our methodologies and peer-reviewed publications.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">4 Core Pillars</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">{activeTopics.length} Active Topics</span>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5">{publications.length} Research Papers</span>
        </div>
      </div>

      <section aria-labelledby="research-areas-title" className="mt-12">
        <div className="mb-5">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">Strategic Pillars</p>
          <h2 id="research-areas-title" className="mt-1 font-editorial text-2xl font-bold text-slate-950 sm:text-3xl">
            Four Foundational Research Areas
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const isSelected = pillar.id === selectedArea;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => chooseArea(pillar.id as ResearchPillarId)}
                className={`soft-card flex flex-col justify-between p-5 text-left transition-all duration-200 ${
                  isSelected
                    ? 'ring-2 ring-sky-500 bg-white shadow-lift'
                    : 'bg-white/80 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <ResearchAreaIcon areaId={pillar.id as ResearchPillarId} className="!h-12 !w-12 rounded-xl" />
                    <h3 className="font-editorial text-sm font-bold text-slate-950 leading-snug">
                      {(pillar as unknown as { title_en?: string }).title_en || pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 font-editorial text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-sky-700">
                  <span>{isSelected ? 'Selected' : 'Select Pillar'}</span>
                  <Icon name="arrow_forward" className="h-3.5 w-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Topic selector */}
      <section className="mt-14">
        <div className="mb-4">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">Active Topics</p>
          <h3 className="font-editorial text-xl font-bold text-slate-950">
            Select a Topic within this Pillar
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {currentTopics.map((topic) => {
            const isSelected = (currentTopic?.id === topic.id);
            const count = topicCount(topic.id);
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopic(topic.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 font-editorial text-xs font-semibold transition ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{topic.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] font-bold ${
                    isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected Topic Detail & Papers */}
      {currentTopic && (
        <section className="mt-10 rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="rounded-lg bg-sky-100 px-2.5 py-1 font-mono text-[11px] font-bold text-sky-900">
              {currentTopic.label}
            </span>
            <p className="mt-3 font-editorial text-base text-slate-700 leading-relaxed">
              {topicIntroductions[currentTopic.id] ||
                `SATLab researchers formulate exact satisfiability models and algorithm pipelines for ${currentTopic.label}.`}
            </p>
          </div>

          <h4 className="font-editorial text-lg font-bold text-slate-950 mb-4">
            Related Publications ({relatedPapers.length})
          </h4>

          {relatedPapers.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPapers.map((paper) => (
                <PaperCard key={paper.id} paper={paper} />
              ))}
            </div>
          ) : (
            <p className="font-editorial text-sm text-slate-500 italic">
              No publications directly tagged with this keyword yet. Check our complete Publications archive.
            </p>
          )}
        </section>
      )}
    </div>
  );
};
