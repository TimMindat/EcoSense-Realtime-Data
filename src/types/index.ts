export interface SensorDataType {
  gas: number;
  humidity: number;
  temperature: number;
}

export interface ThresholdConfig {
  low: number;
  medium: number;
  high: number;
  unit: string;
}

export interface DataCardProps {
  title: string;
  value: number | undefined;
  unit: string;
  icon: React.ReactNode;
  loading: boolean;
  error: string | null;
  thresholds: ThresholdConfig;
}