export interface Author {
  name: string;
  affiliation?: string;
  isCoFirst?: boolean;
  isCorresponding?: boolean;
  email?: string;
}

export interface MetricData {
  subject: string;
  SAM3: number;
  MedicalSAM3: number;
  fullMark: number;
}

export interface NavItem {
  label: string;
  href: string;
}