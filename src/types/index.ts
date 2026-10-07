export interface CollectionPoint {
  id: string;
  name: string;
  campus: string;
  address: string;
  city: string;
  schedule: string;
  room: string;
  contactEmail: string;
  status: 'Ativo' | 'Em implantação';
}

export interface LedComponentAnatomy {
  id: string;
  name: string;
  failureRate: string;
  reusableRate: string;
  role: string;
  diagnostic: string;
  repairMethod: string;
}

export interface RepairGuideStep {
  number: string;
  title: string;
  category: 'seguranca' | 'diagnostico' | 'intervencao' | 'teste';
  description: string;
  tools: string[];
  warning?: string;
  proTip: string;
}
