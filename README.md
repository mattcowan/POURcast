# POURcast — Your Curb Cut to Certification

A study app for IAAP accessibility certifications, built with accessibility at its core.

## What It Does

POURcast helps you prepare for the **CPACC** (Certified Professional in Accessibility Core Competencies) and **WAS** (Web Accessibility Specialist) certification exams through:

- **Practice quizzes** — 300 questions across 5 domains (3 CPACC, 2 WAS), with detailed feedback explaining why each answer is right or wrong
- **Missed questions bank** — Questions you get wrong are saved to a persistent review bank; get them right and they're automatically removed
- **The Study Shelf** — A knowledge base of 65 reference topics covering disability models, WCAG, universal design, legal frameworks, ARIA, and more
- **Progress tracking** — XP, study streaks, and score history per domain stored locally

Questions link directly to Study Shelf topics, so you can drill into concepts you missed.

## Accessibility Features

- 4 color themes: light (off-white), dark, high contrast light, high contrast dark
- 4 font options: Atkinson Hyperlegible (default), Inter, Lora, Comic Neue — all bundled as web fonts for cross-platform consistency
- Adjustable font size, letter spacing, and line height
- Reduce motion control (system default, force reduce, allow)
- Underline links toggle
- Skip navigation, semantic landmarks, aria-live announcements
- Full keyboard support with visible focus indicators
- Color-independent feedback (symbols + text alongside color)
- WCAG AA contrast compliance verified across all themes

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/pourcast/`.

To use a different port, pass it to Vite:

```bash
npm run dev -- --port 3000
```

## Production Build

```bash
npm run build
```

Outputs static files to `dist/`. Deploy the contents to your web server. The app uses HashRouter, so no server-side URL rewriting is needed.

## Tech Stack

- React 19 + Vite
- Tailwind CSS 4 (utility classes + CSS custom properties for theming)
- React Router 7 (HashRouter)
- Lucide React (icons)
- No backend — all client-side with localStorage persistence
