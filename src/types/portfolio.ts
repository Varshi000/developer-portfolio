export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  location: string;
  avatarUrl: string;
  availableForHire: boolean;
  statusText: string;
  resumeDownloadUrl: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
  iconName: string;
}

export interface AboutInfo {
  greeting: string;
  headline: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Proficient", "Familiar"
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  playStoreUrl?: string;
  badge?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string; // or "Present"
  current: boolean;
  employmentType?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  gradeOrHonors?: string;
  highlights: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  iconName: string;
  primary?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
  siteKeywords: string[];
  siteUrl: string;
  author: string;
  navLinks: NavLink[];
  resumeUrl: string;
  footerText: string;
}
