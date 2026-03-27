// Layout
export { default as BaseLayout } from "./layouts/BaseLayout.astro";

// Section components
export { default as Hero } from "./components/sections/Hero.astro";
export { default as About } from "./components/sections/About.astro";
export { default as Experience } from "./components/sections/Experience.astro";
export { default as Education } from "./components/sections/Education.astro";
export { default as Projects } from "./components/sections/Projects.astro";
export { default as Skills } from "./components/sections/Skills.astro";

// Utility components
export { default as Section } from "./components/Section.astro";
export { default as ThemeSwitch } from "./components/ThemeSwitch.astro";
export { default as KeyboardManager } from "./components/KeyboardManager.astro";

// UI icons (non-brand)
export { default as ArrowIcon } from "./icons/Arrow.astro";
export { default as MailIcon } from "./icons/Mail.astro";
export { default as PhoneIcon } from "./icons/Phone.astro";
export { default as WorldMapIcon } from "./icons/WorldMap.astro";

// Brand icons removed from simple-icons (trademark restrictions)
export { default as LinkedInIcon } from "./icons/LinkedIn.astro";

// Skill icon mapping (brand icons via simple-icons-astro)
export { SKILL_ICONS } from "./skill-icons";

// Types
export type {
  PortfolioConfig,
  NavItem,
  FooterConfig,
  OpenGraphConfig,
  TwitterConfig,
  ProfileItem,
  LocationInfo,
  HeroProps,
  ExperienceItem,
  EducationItem,
  CertificateItem,
  ProjectItem,
  SkillItem,
  KeyboardCommand,
  SocialIcon,
} from "./types";
