
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface InsightData {
  name: string;
  efficiency: number;
  cost: number;
  automation: number;
}
