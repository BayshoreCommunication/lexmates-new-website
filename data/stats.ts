export interface StatItem {
  count: number;
  suffix: string;
  label: string;
}

export const firmStats: StatItem[] = [
  { count: 16, suffix: '+', label: 'Years of Practice' },
  { count: 3000, suffix: '+', label: 'Cases Handled' },
  { count: 95, suffix: '%', label: 'Success Rate' },
  { count: 40, suffix: '', label: 'Practice Areas' },
];
