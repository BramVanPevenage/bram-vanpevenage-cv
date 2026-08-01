# Bram Van Pevenage — Curriculum Vitae

Personal CV site, live at **[bramvanpevenage.github.io/bram-vanpevenage-cv](https://bramvanpevenage.github.io/bram-vanpevenage-cv/)**.

It's built dual-audience:
1. **Humans** get a clean, responsive portfolio-style page.
2. **AI agents / LLMs** get a raw, dynamically compiled Markdown version at [`/cv.md`](https://bramvanpevenage.github.io/bram-vanpevenage-cv/cv.md), for recruiters' scrapers and AI assistants to parse without HTML noise.

> Content is still being filled in — the design/structure above is done, the CV data itself is next.

---

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **CMS**: [Keystatic](https://keystatic.com/) (local file-based mode)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Rendering**: [Markdoc](https://markdoc.dev/)

## Project Structure

```text
├── src/
│   ├── content/                 # CV data, managed via Keystatic
│   │   ├── personal/            # Personal profile singleton
│   │   ├── work-experience/     # Work history entries
│   │   ├── education/           # Academic history entries
│   │   ├── projects/            # Development projects
│   │   └── skills/              # Categorized skills
│   ├── layouts/Layout.astro     # Page shell: fonts, meta tags, dark mode
│   ├── pages/
│   │   ├── index.astro          # The CV page
│   │   └── cv.md.ts             # AI-parseable raw Markdown endpoint
│   └── content.config.ts        # Content collection schemas
├── keystatic.config.ts          # Keystatic configuration
└── astro.config.ts              # Site config (base path, adapter, etc.)
```

## Running Locally

```bash
npm install
npm run dev
```

- Site: [http://localhost:4321](http://localhost:4321)
- AI-parseable Markdown: [http://localhost:4321/cv.md](http://localhost:4321/cv.md)
- Keystatic CMS admin: [http://localhost:4321/keystatic](http://localhost:4321/keystatic)

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Editing Content

1. `npm run dev`, then open [http://localhost:4321/keystatic](http://localhost:4321/keystatic).
2. Update personal details, work experience, education, projects, or skills.
3. Click **Publish** — Keystatic writes the changes to `src/content/`.
4. Commit and push to deploy (GitHub Actions builds and publishes to Pages on every push to `main`).
