export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
}

export interface Project {
  title: string;
  technologies: string;
  description: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  description: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  result: string;
}

export interface CertificateInfo {
  title: string;
  description: string;
  issuer?: string;
  fileUrl?: string; // used for preview/download
}
