export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'Corporate' | 'Startup' | 'Self-Employed' | 'Internship' | 'Agency';
}

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  tech: string[];
  points: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number; // 0-100 for visualization
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Leadership {
  role: string;
  organization: string;
  period: string;
  description: string[];
}