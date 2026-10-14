import personalData from "@/data/personal.json";
import aboutData from "@/data/about.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import socialLinksData from "@/data/social-links.json";
import siteConfigData from "@/data/site-config.json";

import type {
  PersonalInfo,
  AboutInfo,
  SkillCategory,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  SocialLink,
  SiteConfig,
} from "@/types";

export const personal: PersonalInfo = personalData as PersonalInfo;
export const about: AboutInfo = aboutData as AboutInfo;
export const skills: SkillCategory[] = skillsData as SkillCategory[];
export const projects: ProjectItem[] = projectsData as ProjectItem[];
export const experience: ExperienceItem[] = experienceData as ExperienceItem[];
export const education: EducationItem[] = educationData as EducationItem[];
export const socialLinks: SocialLink[] = socialLinksData as SocialLink[];
export const siteConfig: SiteConfig = siteConfigData as SiteConfig;
