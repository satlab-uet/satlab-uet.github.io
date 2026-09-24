import React from 'react';
import { BrainCircuit, ChartNoAxesCombined, Truck, Cpu, Clock, Box, Network, type LucideIcon } from 'lucide-react';
import { ResearchPillarId } from '../types';

const areaIcons: Record<ResearchPillarId, { icon: LucideIcon; color: string }> = {
  encodings_solvers: { icon: Cpu, color: 'bg-sky-700 shadow-sky-700/25' },
  line_balancing_scheduling: { icon: Clock, color: 'bg-emerald-700 shadow-emerald-700/25' },
  packing_cutting: { icon: Box, color: 'bg-amber-600 shadow-amber-600/25' },
  graph_labeling_fap: { icon: Network, color: 'bg-indigo-700 shadow-indigo-700/25' },
  supply_chain_optimization: { icon: Truck, color: 'bg-sky-700 shadow-sky-700/25' },
  ai_supply_chain_intelligence: { icon: BrainCircuit, color: 'bg-emerald-700 shadow-emerald-700/25' },
  decision_analytics: { icon: ChartNoAxesCombined, color: 'bg-orange-700 shadow-orange-700/25' },
};

interface ResearchAreaIconProps {
  areaId: ResearchPillarId;
  className?: string;
}

export const ResearchAreaIcon: React.FC<ResearchAreaIconProps> = ({ areaId, className = '' }) => {
  const { icon: AreaIcon, color } = areaIcons[areaId];

  return (
    <span className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${color} ${className}`}>
      <AreaIcon className="h-9 w-9" strokeWidth={2.5} aria-hidden="true" />
    </span>
  );
};
