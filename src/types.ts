export interface NavItem {
  name: string;
  url: string;
}

export interface FooterConfig {
  text: string;
  url: string;
  blank?: boolean;
}

export interface OpenGraphConfig {
  image?: string;
  type?: string;
  locale?: string;
  siteName?: string;
}

export interface TwitterConfig {
  card?: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
  image?: string;
}

export interface PortfolioConfig {
  title: string;
  description: string;
  author: string;
  site?: string;
  favicon?: string;
  theme?: string;
  nav?: NavItem[];
  footer?: FooterConfig;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  socialProfiles?: string[];
}

export interface ProfileItem {
  network: string;
  username: string;
  url: string;
}

export interface LocationInfo {
  city: string;
  region: string;
}

export interface HeroProps {
  name: string;
  label: string;
  image: string;
  email?: string;
  phone?: string;
  location?: LocationInfo;
  profiles?: ProfileItem[];
  resumeUrl?: string;
}

export interface ExperienceItem {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string | null;
  summary?: string | string[];
  highlights?: string[];
  responsibilities?: string[];
  achievements?: string[];
  skills?: string[];
  location?: string;
  locationType?: string;
}

export interface EducationItem {
  institution: string;
  url?: string;
  area: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface CertificateItem {
  name: string;
  date: string;
  issuer: string;
  url?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  url?: string;
  github?: string;
  isActive?: boolean;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  keywords?: string[];
}

export interface KeyboardCommand {
  id: string;
  title: string;
  icon?: string;
  hotkey?: string;
  section?: string;
  url?: string;
}

export type SocialIcon = Record<string, string | any>;
