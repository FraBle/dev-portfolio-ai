# dev-portfolio-ai

An installable Astro theme package for building print-friendly portfolio/CV sites. Forked from [Smilesharks/dev-portfolio](https://github.com/Smilesharks/dev-portfolio) and restructured as a reusable component library.

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)

## Features

- **Print-friendly** - Optimised layout for PDF export and printing
- **Dark/Light mode** - System preference detection with manual override
- **5 Colour themes** - Default, blue, red, green, and cyber themes
- **Keyboard shortcuts** - Command palette with `Cmd/Ctrl + K` (extendable with custom commands)
- **Responsive design** - Mobile-first approach with Tailwind CSS 4
- **Composable sections** - Use individual components or the full layout
- **Props-based API** - Feed data via Astro props instead of hardcoded JSON
- **SSR compatible** - Works with Astro's server-side rendering and Cloudflare Workers
- **3,000+ skill icons** - Auto-resolved via [simple-icons-astro](https://github.com/dzeiocom/simple-icons-astro)

## Stack

- [**Astro**](https://astro.build/) - The next-gen web framework
- [**Tailwind CSS 4**](https://tailwindcss.com/) - A utility-first CSS framework with CSS-first configuration
- [**Alpine.js**](https://alpinejs.dev/) - Lightweight JavaScript framework for composing behaviour
- [**TypeScript**](https://www.typescriptlang.org/) - JavaScript with type syntax
- [**HotKeyPad**](https://github.com/nicosommi/hotkeypad) - Command palette with keyboard shortcuts
- [**simple-icons-astro**](https://github.com/dzeiocom/simple-icons-astro) - 3,000+ brand SVG icons as Astro components

## Installation

Install as a dependency in your Astro project:

```bash
# Using a GitHub reference
bun add dev-portfolio-ai@github:FraBle/dev-portfolio-ai

# Or with npm/pnpm
npm install github:FraBle/dev-portfolio-ai
```

### Peer dependencies

You also need these in your project:

```bash
bun add tailwindcss @tailwindcss/vite alpinejs @alpinejs/collapse simple-icons-astro
# Optional: command palette
bun add hotkeypad
```

Add the Tailwind vite plugin to your `astro.config.mjs`:

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## Usage

### Basic layout

```astro
---
import { BaseLayout } from "dev-portfolio-ai";
import type { PortfolioConfig } from "dev-portfolio-ai";

const config: PortfolioConfig = {
  title: "Your Name",
  description: "Your portfolio description",
  author: "Your Name",
  site: "https://your-site.com",
  theme: "default", // "default" | "blue" | "red" | "green" | "cyber"
};
---

<BaseLayout title="Home" config={config}>
  <!-- Your content here -->
</BaseLayout>
```

### Composable sections

```astro
---
import {
  BaseLayout,
  Hero,
  About,
  Experience,
  Education,
  Projects,
  Skills,
  Section,
  ThemeSwitch,
  KeyboardManager,
} from "dev-portfolio-ai";
---

<BaseLayout title="Portfolio" config={config}>
  <main class="relative grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-6 md:p-16">
    <div class="min-w-0 space-y-6 md:col-span-2">
      <Hero
        name="Your Name"
        label="Your Title"
        image="/avatar.jpg"
        email="you@example.com"
        profiles={[{ network: "GitHub", username: "you", url: "https://github.com/you" }]}
      />
      <About summary="Your bio here." />
      <ThemeSwitch />
    </div>
    <div class="min-w-0 space-y-12 md:col-span-4">
      <Experience items={experienceData} />
      <Projects items={projectData} />
      <Skills items={skillData} />
      <Education items={educationData} />
    </div>
  </main>
  <KeyboardManager profiles={profiles} extraCommands={extraCommands} />
</BaseLayout>
```

### Custom sections

Use the generic `Section` component for content not covered by built-in sections:

```astro
---
import { Section } from "dev-portfolio-ai";
---

<Section title="Patents">
  <!-- Your custom content -->
</Section>
```

## Exported components

| Component | Description |
|-----------|-------------|
| `BaseLayout` | HTML shell with theme, SEO meta tags, Alpine.js init |
| `Hero` | Name, title, avatar, location, social links, email copy |
| `About` | Summary/bio section |
| `Experience` | Work history timeline with expandable Summary, Responsibilities, Achievements, and Highlights |
| `Education` | Education entries with year ranges + optional certificates |
| `Projects` | Project cards grid with GitHub links |
| `Skills` | Skill pills with auto-resolved icons (100+ technologies mapped) |
| `Section` | Generic section wrapper with title |
| `ThemeSwitch` | Light/dark/system theme selector |
| `KeyboardManager` | Cmd+K command palette (accepts `extraCommands` prop) |

### Skill icon mapping

The `SKILL_ICONS` mapping auto-resolves 100+ technology names to [simple-icons-astro](https://github.com/dzeiocom/simple-icons-astro) components. Covers: languages (Python, Go, Rust, TypeScript, ...), frameworks (React, Next.js, FastAPI, ...), cloud (Kubernetes, Docker, Terraform, ...), CI/CD (GitHub Actions, ArgoCD, ...), databases (PostgreSQL, Redis, MongoDB, ...), observability (Datadog, Grafana, Sentry, ...), and more.

Consumers can extend or override via the `skillIcons` prop on `Experience` and `Skills`.

### UI icons

Four non-brand UI icons are exported for custom use:

- `ArrowIcon` — external link arrow
- `MailIcon` — email icon
- `PhoneIcon` — phone icon
- `WorldMapIcon` — location globe icon
- `LinkedInIcon` — LinkedIn logo (removed from simple-icons for trademark reasons)

## TypeScript types

All prop interfaces are exported:

```ts
import type {
  PortfolioConfig,
  HeroProps,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  SkillItem,
  ProfileItem,
  CertificateItem,
  KeyboardCommand,
} from "dev-portfolio-ai";
```

## Colour themes

| Theme | Description |
|-------|-------------|
| `default` | Orange accent |
| `blue` | Blue/slate accent |
| `red` | Red/stone accent |
| `green` | Lime/green accent |
| `cyber` | Yellow/cyan cyberpunk style |

Each theme includes light and dark mode variants. Set the theme in your `PortfolioConfig`:

```ts
const config: PortfolioConfig = {
  theme: "blue",
  // ...
};
```

**Creating custom themes:** Edit the CSS variables in your own stylesheet, following the pattern in `src/styles/global.css` (`:root [data-theme="your-theme"]` for light, `.dark [data-theme="your-theme"]` for dark).

## Differences from upstream

This fork restructures the original [Smilesharks/dev-portfolio](https://github.com/Smilesharks/dev-portfolio) from a standalone Astro site into an installable theme package:

- Components accept data via **Astro props** instead of importing from a `cv.json` file
- All path aliases (`@cv`, `@/`) replaced with relative imports for `node_modules` compatibility
- Exports barrel (`src/index.ts`) with all components, icons, and TypeScript types
- Peer dependencies instead of bundled dependencies (Astro 6, Tailwind CSS 4, Alpine.js)
- Tailwind CSS `@source` directive for automatic content scanning from `node_modules`
- Standalone site files removed (pages, cv.json, astro config)
- Brand icons replaced with [simple-icons-astro](https://github.com/dzeiocom/simple-icons-astro) (3,000+ icons)
- CSS base resets moved to `@layer base` for proper Tailwind utility override
- `KeyboardManager` accepts `extraCommands` prop for consumer-defined palette entries
- Hotkeys use lowercase to work around hotkeypad case-sensitivity bug in click activation

## Credits

This project is a fork of [**dev-portfolio**](https://github.com/Smilesharks/dev-portfolio) by [**Ariel Corte** (SmileSharks)](https://github.com/Smilesharks). The original design, component architecture, theme system, and print-friendly layout are his work.

The original project was in turn inspired by:
- [**Bartosz Jarocki**](https://github.com/BartoszJarocki/cv) - Print-friendly, minimalist CV page
- [**Miguel Angel Duran**](https://github.com/midudev/minimalist-portfolio-json) - minimalist-portfolio-json

CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)

## License

MIT
