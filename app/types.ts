export interface SectionProps {
  delay: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface ProjectData {
  title: string;
  description: string;
  content: string;
  url?: string;
}
