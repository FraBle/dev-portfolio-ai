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

// Icons
export { default as ArrowIcon } from "./icons/Arrow.astro";
export { default as MailIcon } from "./icons/Mail.astro";
export { default as PhoneIcon } from "./icons/Phone.astro";
export { default as XIcon } from "./icons/X.astro";
export { default as WorldMapIcon } from "./icons/WorldMap.astro";
export { default as GitHubIcon } from "./icons/GitHub.astro";
export { default as LinkedInIcon } from "./icons/LinkedIn.astro";
export { default as GitlabIcon } from "./icons/Gitlab.astro";
export { default as FigmaIcon } from "./icons/Figma.astro";
export { default as HTMLIcon } from "./icons/html.astro";
export { default as CSSIcon } from "./icons/css.astro";
export { default as JavaScriptIcon } from "./icons/javascript.astro";
export { default as TypeScriptIcon } from "./icons/type.astro";
export { default as ReactIcon } from "./icons/react.astro";
export { default as NodeIcon } from "./icons/node.astro";
export { default as NextIcon } from "./icons/next.astro";
export { default as SQLIcon } from "./icons/sql.astro";
export { default as TailwindIcon } from "./icons/tailwind.astro";
export { default as GitIcon } from "./icons/git.astro";
export { default as SwiftIcon } from "./icons/swift.astro";
export { default as SwiftUIIcon } from "./icons/swiftui.astro";
export { default as KotlinIcon } from "./icons/kotlin.astro";
export { default as FlutterIcon } from "./icons/flutter.astro";

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
