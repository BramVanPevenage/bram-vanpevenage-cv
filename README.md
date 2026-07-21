# 🚀 Web CV (Astro + Keystatic CMS + TypeScript)

A modern, highly customizable, and responsive Web CV template. It is designed for **dual-audience consumption**:
1. **Humans**: A beautiful, clean, and responsive portfolio-style web page.
2. **AI Agents / LLMs**: A raw, dynamically compiled, semantic Markdown representation served directly at `/cv.md` for seamless parsing.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5)
- **CMS**: [Keystatic CMS](https://keystatic.com/) (Local File-Based mode)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Rendering**: [Markdoc](https://markdoc.dev/)

---

## ✨ Features

- **Local CMS Editing**: Fully integrated with Keystatic CMS. Edit your CV fields in a friendly graphical interface, and Keystatic will automatically update local JSON and Markdoc (`.mdoc`) files in your codebase.
- **AI-Friendly Markdown Endpoint**: Serves a beautifully formatted raw Markdown file at `/cv.md`. This allows recruiters' AI scrapers and custom LLM assistants to parse your resume cleanly without getting bogged down by HTML markup.
- **Responsive Frontend**: Fast, responsive, and modern layout built with Tailwind CSS. Includes quick links for direct CV downloads/parsing and editing.
- **Type-Safe Content Collections**: Leverages Astro's new Content Layer with `astro:content` and Zod schema validation to guarantee 100% type-safe data loading.

---

## 📁 Project Structure

```text
├── src/
│   ├── content/                 # Folder where Keystatic saves your CV details
│   │   ├── personal/            # Personal profile singleton (index.json)
│   │   ├── work-experience/     # Work history entries (Markdoc)
│   │   ├── education/           # Academic history entries (Markdoc)
│   │   ├── projects/            # Development projects (Markdoc)
│   │   └── skills/              # List of skills categorized (JSON)
│   ├── layouts/
│   │   └── Layout.astro         # Layout wrapper with Inter font & layout constraints
│   ├── pages/
│   │   ├── index.astro          # Human-friendly web portfolio route
│   │   └── cv.md.ts             # Dynamic AI-parseable raw Markdown API endpoint
│   └── content.config.ts        # Astro content collections schema and glob loaders
├── keystatic.config.ts          # Keystatic configuration (schema & local storage mode)
├── tailwind.config.mjs          # Tailwind CSS layout configuration
├── tsconfig.json                # TypeScript project settings
└── package.json                 # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v20 or newer recommended)
- **npm** (v10 or newer)

### Installation

Clone the repository, navigate into the directory, and install dependencies:

```bash
npm install
```

### Running the Development Server

To launch the local server with hot-reloading:

```bash
npm run dev
```

The site will be available at:
- **Web CV Homepage**: [http://localhost:4321](http://localhost:4321)
- **AI-Parseable Markdown View**: [http://localhost:4321/cv.md](http://localhost:4321/cv.md)
- **Keystatic CMS Admin Panel**: [http://localhost:4321/keystatic](http://localhost:4321/keystatic)

### Building for Production

Compile a production-ready server and client build:

```bash
npm run build
```

The production output is generated in the `dist/` directory.

### Previewing the Production Build

To preview the built site locally before deploying:

```bash
npm run preview
```

---

## ✏️ How to Edit Content

You can manage all your CV content seamlessly using Keystatic:

1. Start your local development server (`npm run dev`).
2. Visit [http://localhost:4321/keystatic](http://localhost:4321/keystatic) in your web browser.
3. Update your personal details, add new job experiences, projects, academic qualifications, or skills.
4. Click **Publish** to save. The changes will be immediately written to the local files under the `src/content/` directory.
5. Commit the updated content files to Git to deploy your changes.

---

## 🤖 AI Agent Parsing

Recruiters, hiring algorithms, and personal AI assistants can retrieve your CV directly in standard Markdown format.

Simply direct them to your website's URL suffixed with `/cv.md`.

For example:
`https://yourwebsite.com/cv.md`

This endpoint returns a raw body with the `Content-Type: text/markdown; charset=utf-8` header, enabling immediate semantic parsing by LLMs without HTML noise.
