import React from 'react';
import {
  Binary,
  GanttChart,
  LayoutGrid,
  Network,
  Truck,
  BrainCircuit,
  ChartNoAxesCombined,
  type LucideIcon,
} from 'lucide-react';
import { ResearchPillarId } from '../types';

const areaIcons: Record<ResearchPillarId, { icon: LucideIcon; color: string }> = {
  encodings_solvers: { icon: Binary, color: 'bg-sky-700 shadow-sky-700/25' },
  line_balancing_scheduling: { icon: GanttChart, color: 'bg-emerald-700 shadow-emerald-700/25' },
  packing_cutting: { icon: LayoutGrid, color: 'bg-amber-600 shadow-amber-600/25' },
  graph_labeling_fap: { icon: Network, color: 'bg-indigo-700 shadow-indigo-700/25' },
  supply_chain_optimization: { icon: Truck, color: 'bg-sky-700 shadow-sky-700/25' },
  ai_supply_chain_intelligence: { icon: BrainCircuit, color: 'bg-emerald-700 shadow-emerald-700/25' },
  decision_analytics: { icon: ChartNoAxesCombined, color: 'bg-orange-700 shadow-orange-700/25' },
};

interface ResearchAreaIconProps {
  areaId: ResearchPillarId | string;
  className?: string;
}

export const ResearchAreaIcon: React.FC<ResearchAreaIconProps> = ({ areaId, className = '' }) => {
  const item = areaIcons[areaId as ResearchPillarId] || areaIcons.encodings_solvers;
  const AreaIcon = item.icon;
  const color = item.color;

  return (
    <span className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${color} ${className}`}>
      <AreaIcon className="h-[55%] w-[55%]" strokeWidth={2.2} aria-hidden="true" />
    </span>
  );
};
