export type Article = {
  id: string;
  title: string;
  description: string;
  component?: React.ComponentType;
  file?: string;
  category: string;
  featured: boolean;
  date: string;
  readTime: string;

  toc?: {
    id: string;
    label: string;
  }[];
};