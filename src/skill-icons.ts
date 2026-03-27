/**
 * Centralized mapping from common skill/technology names to simple-icons-astro components.
 * Used internally by Experience and Skills components to resolve icons by name.
 * Consumers can extend this via the skillIcons prop.
 *
 * Uses direct imports (simple-icons-astro/Name) for fast builds.
 */
import Html5 from "simple-icons-astro/Html5";
import CssIcon from "simple-icons-astro/Css";
import Javascript from "simple-icons-astro/Javascript";
import Typescript from "simple-icons-astro/Typescript";
import ReactIcon from "simple-icons-astro/React";
import Nodedotjs from "simple-icons-astro/Nodedotjs";
import Nextdotjs from "simple-icons-astro/Nextdotjs";
import Mysql from "simple-icons-astro/Mysql";
import Git from "simple-icons-astro/Git";
import Github from "simple-icons-astro/Github";
import Tailwindcss from "simple-icons-astro/Tailwindcss";
import Swift from "simple-icons-astro/Swift";
import Kotlin from "simple-icons-astro/Kotlin";
import Flutter from "simple-icons-astro/Flutter";
import Figma from "simple-icons-astro/Figma";
import Gitlab from "simple-icons-astro/Gitlab";
import Kubernetes from "simple-icons-astro/Kubernetes";
import Terraform from "simple-icons-astro/Terraform";
import Python from "simple-icons-astro/Python";
import Go from "simple-icons-astro/Go";
import Docker from "simple-icons-astro/Docker";
import Postgresql from "simple-icons-astro/Postgresql";
import Redis from "simple-icons-astro/Redis";
import Graphql from "simple-icons-astro/Graphql";
import Amazonwebservices from "simple-icons-astro/Amazonwebservices";
import Googlecloud from "simple-icons-astro/Googlecloud";
import Fastapi from "simple-icons-astro/Fastapi";
import Express from "simple-icons-astro/Express";
import Ansible from "simple-icons-astro/Ansible";
import Pnpm from "simple-icons-astro/Pnpm";
import Githubactions from "simple-icons-astro/Githubactions";
import Argocd from "simple-icons-astro/Argocd";
import Circleci from "simple-icons-astro/Circleci";
import Apachekafka from "simple-icons-astro/Apachekafka";
import Rabbitmq from "simple-icons-astro/Rabbitmq";
import Celery from "simple-icons-astro/Celery";
import Tensorflow from "simple-icons-astro/Tensorflow";
import Keras from "simple-icons-astro/Keras";
import Scikitlearn from "simple-icons-astro/Scikitlearn";
import Datadog from "simple-icons-astro/Datadog";
import Grafana from "simple-icons-astro/Grafana";
import Prometheus from "simple-icons-astro/Prometheus";
import Pagerduty from "simple-icons-astro/Pagerduty";
import Opentelemetry from "simple-icons-astro/Opentelemetry";
import Splunk from "simple-icons-astro/Splunk";
import Sentry from "simple-icons-astro/Sentry";
import Snyk from "simple-icons-astro/Snyk";
import Cloudflare from "simple-icons-astro/Cloudflare";
import Jira from "simple-icons-astro/Jira";
import Trello from "simple-icons-astro/Trello";
import Notion from "simple-icons-astro/Notion";
import Confluence from "simple-icons-astro/Confluence";
import Slack from "simple-icons-astro/Slack";
import Zoom from "simple-icons-astro/Zoom";
import Linkedin from "simple-icons-astro/Linkedin";
import Angular from "simple-icons-astro/Angular";
import Vuedotjs from "simple-icons-astro/Vuedotjs";
import Svelte from "simple-icons-astro/Svelte";
import Astro from "simple-icons-astro/Astro";
import Rust from "simple-icons-astro/Rust";
import Cplusplus from "simple-icons-astro/Cplusplus";
import Csharp from "simple-icons-astro/Csharp";
import Java from "simple-icons-astro/Java";
import Php from "simple-icons-astro/Php";
import Ruby from "simple-icons-astro/Ruby";
import Mongodb from "simple-icons-astro/Mongodb";
import Sqlite from "simple-icons-astro/Sqlite";
import Elasticsearch from "simple-icons-astro/Elasticsearch";
import Nginx from "simple-icons-astro/Nginx";
import Vercel from "simple-icons-astro/Vercel";
import Netlify from "simple-icons-astro/Netlify";
import Firebase from "simple-icons-astro/Firebase";
import Supabase from "simple-icons-astro/Supabase";
import Prisma from "simple-icons-astro/Prisma";
import Webpack from "simple-icons-astro/Webpack";
import Vite from "simple-icons-astro/Vite";
import Jest from "simple-icons-astro/Jest";
import Vitest from "simple-icons-astro/Vitest";
import Playwright from "simple-icons-astro/Playwright";
import Cypress from "simple-icons-astro/Cypress";
import Npm from "simple-icons-astro/Npm";
import Yarn from "simple-icons-astro/Yarn";
import Bun from "simple-icons-astro/Bun";
import Linux from "simple-icons-astro/Linux";
import Gnubash from "simple-icons-astro/Gnubash";
import Visualstudiocode from "simple-icons-astro/Visualstudiocode";
import Neovim from "simple-icons-astro/Neovim";
import Githubcopilot from "simple-icons-astro/Githubcopilot";

export const SKILL_ICONS: Record<string, any> = {
  // Web fundamentals
  HTML: Html5,
  HTML5: Html5,
  CSS: CssIcon,
  CSS3: CssIcon,
  JavaScript: Javascript,
  TypeScript: Typescript,

  // Frontend frameworks
  React: ReactIcon,
  "React.js": ReactIcon,
  Angular: Angular,
  "Vue.js": Vuedotjs,
  Vue: Vuedotjs,
  Svelte: Svelte,
  Astro: Astro,

  // Backend / runtimes
  Node: Nodedotjs,
  "Node.js": Nodedotjs,
  Next: Nextdotjs,
  "Next.js": Nextdotjs,
  Express: Express,
  "Express.js": Express,
  FastAPI: Fastapi,

  // Programming languages
  Python: Python,
  Go: Go,
  Golang: Go,
  Rust: Rust,
  "C++": Cplusplus,
  "C#": Csharp,
  Java: Java,
  PHP: Php,
  Ruby: Ruby,
  Swift: Swift,
  Kotlin: Kotlin,
  Flutter: Flutter,

  // Databases
  MySQL: Mysql,
  PostgreSQL: Postgresql,
  Redis: Redis,
  MongoDB: Mongodb,
  SQLite: Sqlite,
  Elasticsearch: Elasticsearch,

  // Cloud & infrastructure
  Kubernetes: Kubernetes,
  Docker: Docker,
  Terraform: Terraform,
  Ansible: Ansible,
  AWS: Amazonwebservices,
  GCP: Googlecloud,
  "Google Cloud": Googlecloud,
  Cloudflare: Cloudflare,
  Vercel: Vercel,
  Netlify: Netlify,
  Firebase: Firebase,
  Supabase: Supabase,
  Nginx: Nginx,

  // CI/CD
  "GitHub Actions": Githubactions,
  ArgoCD: Argocd,
  CircleCI: Circleci,

  // Version control
  Git: Git,
  GitHub: Github,
  GitLab: Gitlab,

  // Styling
  Tailwind: Tailwindcss,
  "Tailwind CSS": Tailwindcss,
  TailwindCSS: Tailwindcss,

  // Design
  Figma: Figma,

  // APIs
  GraphQL: Graphql,

  // Message queues
  Kafka: Apachekafka,
  RabbitMQ: Rabbitmq,
  Celery: Celery,

  // ML/AI
  TensorFlow: Tensorflow,
  Keras: Keras,
  "scikit-learn": Scikitlearn,

  // Observability
  Datadog: Datadog,
  Grafana: Grafana,
  Prometheus: Prometheus,
  PagerDuty: Pagerduty,
  OpenTelemetry: Opentelemetry,
  Splunk: Splunk,
  Sentry: Sentry,

  // Security
  Snyk: Snyk,

  // Build tools & package managers
  Webpack: Webpack,
  Vite: Vite,
  pnpm: Pnpm,
  npm: Npm,
  Yarn: Yarn,
  Bun: Bun,

  // Testing
  Jest: Jest,
  Vitest: Vitest,
  Playwright: Playwright,
  Cypress: Cypress,

  // Project management
  Jira: Jira,
  Trello: Trello,
  Notion: Notion,
  Confluence: Confluence,

  // Communication
  Slack: Slack,
  Zoom: Zoom,
  LinkedIn: Linkedin,

  // Editors
  "VS Code": Visualstudiocode,
  Neovim: Neovim,
  "GitHub Copilot": Githubcopilot,

  // Shell / OS
  Linux: Linux,
  Bash: Gnubash,

  // ORM / DB tools
  Prisma: Prisma,
};
