/**
 * Centralized mapping from common skill/technology names to simple-icons-astro components.
 * Used internally by Experience and Skills components to resolve icons by name.
 * Consumers can extend this via the skillIcons prop.
 */
import {
  Html5,
  Css as CssIcon,
  Javascript,
  Typescript,
  React as ReactIcon,
  Nodedotjs,
  Nextdotjs,
  Mysql,
  Git,
  Github,
  Tailwindcss,
  Swift,
  Kotlin,
  Flutter,
  Figma,
  Gitlab,
  Kubernetes,
  Terraform,
  Python,
  Go,
  Docker,
  Postgresql,
  Redis,
  Graphql,
  Amazonwebservices,
  Googlecloud,
  Fastapi,
  Express,
  Ansible,
  Pnpm,
  Githubactions,
  Argocd,
  Circleci,
  Apachekafka,
  Rabbitmq,
  Celery,
  Tensorflow,
  Keras,
  Scikitlearn,
  Datadog,
  Grafana,
  Prometheus,
  Pagerduty,
  Opentelemetry,
  Splunk,
  Sentry,
  Snyk,
  Cloudflare,
  Jira,
  Trello,
  Notion,
  Confluence,
  Slack,
  Zoom,
  Linkedin,
  Angular,
  Vuedotjs,
  Svelte,
  Astro,
  Rust,
  Cplusplus,
  Csharp,
  Java,
  Php,
  Ruby,
  Elixir,
  Haskell,
  Lua,
  Mongodb,
  Sqlite,
  Elasticsearch,
  Nginx,
  Apache,
  Vercel,
  Netlify,
  Firebase,
  Supabase,
  Prisma,
  Webpack,
  Vite,
  Esbuild,
  Babel,
  Jest,
  Vitest,
  Playwright,
  Cypress,
  Storybook,
  Npm,
  Yarn,
  Bun,
  Linux,
  Ubuntu,
  Gnubash,
  Powershell,
  Visualstudiocode,
  Neovim,
  Githubcopilot,
} from "simple-icons-astro";

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
  Elixir: Elixir,
  Haskell: Haskell,
  Lua: Lua,
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
  Apache: Apache,

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

  // Build tools
  Webpack: Webpack,
  Vite: Vite,
  esbuild: Esbuild,
  Babel: Babel,
  pnpm: Pnpm,
  npm: Npm,
  Yarn: Yarn,
  Bun: Bun,

  // Testing
  Jest: Jest,
  Vitest: Vitest,
  Playwright: Playwright,
  Cypress: Cypress,
  Storybook: Storybook,

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

  // Shell
  Linux: Linux,
  Ubuntu: Ubuntu,
  Bash: Gnubash,
  PowerShell: Powershell,

  // ORM / DB tools
  Prisma: Prisma,
};
