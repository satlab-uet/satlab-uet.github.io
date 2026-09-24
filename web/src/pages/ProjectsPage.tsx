import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { useProjects } from '../context/DataContext';

export const ProjectsPage: React.FC = () => {
  const projects = useProjects();
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const domains = [
    { id: 'all', label: 'All Projects' },
    { id: 'solver', label: 'Core Solvers & SCLib' },
    { id: 'sched', label: 'Scheduling & Railway' },
    { id: 'packing', label: '2D Packing & Cutting' },
    { id: 'graph', label: 'Graph & FAP' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesDomain =
      selectedDomain === 'all' ||
      (selectedDomain === 'solver' && (project.id.includes('sclib') || project.tags?.some((t) => t.toLowerCase().includes('solver') || t.toLowerCase().includes('cardinality')))) ||
      (selectedDomain === 'sched' && (project.id.includes('railway') || project.id.includes('power') || project.tags?.some((t) => t.toLowerCase().includes('sched') || t.toLowerCase().includes('line-balancing')))) ||
      (selectedDomain === 'packing' && (project.id.includes('packing') || project.tags?.some((t) => t.toLowerCase().includes('packing') || t.toLowerCase().includes('cutting')))) ||
      (selectedDomain === 'graph' && (project.id.includes('graph') || project.tags?.some((t) => t.toLowerCase().includes('graph') || t.toLowerCase().includes('frequency') || t.toLowerCase().includes('antibandwidth'))));

    const matchesSearch =
      searchQuery.trim() === '' ||
      (project.title_en && project.title_en.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.description_en && project.description_en.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.leads?.some((l) => l.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDomain && matchesSearch;
  });

  return (
    <div className="section-shell py-10 sm:py-14 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-800 mb-4">
          <Icon name="work" className="h-3.5 w-3.5 text-sky-600" />
          <span>Research Initiatives &amp; Solvers</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
          Projects &amp; Solver Initiatives
        </h1>
        <p className="mt-4 font-editorial text-lg text-slate-600 leading-relaxed max-w-3xl">
          SATLab leads research projects translating propositional satisfiability and MaxSAT theories into
          high-performance exact solvers, industrial scheduling pipelines, and open-source computational libraries.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-2xl border border-slate-200/90 bg-white/85 p-4 shadow-xs backdrop-blur-md">
        {/* Domain Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {domains.map((dom) => (
            <button
              key={dom.id}
              type="button"
              onClick={() => setSelectedDomain(dom.id)}
              className={`rounded-xl px-3 py-1.5 font-editorial text-xs font-semibold transition ${
                selectedDomain === dom.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dom.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, lead, tag..."
            className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 font-editorial text-xs text-slate-800 placeholder:text-slate-400 focus-ring"
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-3xl border border-slate-200/80 bg-white/95 p-7 shadow-xs backdrop-blur-sm flex flex-col justify-between hover:border-sky-300 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="rounded-lg bg-sky-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-sky-900">
                  {project.category_en || project.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {project.period}
                </span>
              </div>

              <h2 className="font-editorial text-xl font-bold text-slate-950 leading-snug">
                {project.title_en}
              </h2>

              <p className="mt-3 font-editorial text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.description_en}
              </p>

              {/* Outcomes list */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                    Key Outcomes &amp; Impact
                  </p>
                  <ul className="space-y-1 font-editorial text-xs text-slate-700">
                    {project.outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Icon name="check" className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              {/* Leads */}
              {project.leads && project.leads.length > 0 && (
                <div className="text-xs text-slate-600 mb-3">
                  <strong className="text-slate-900">Project Leads: </strong>
                  <span>{project.leads.map((l) => l.name).join(', ')}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
