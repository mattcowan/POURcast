# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173/pourcast/)
npm run build      # Production build to dist/
npm run preview    # Preview production build
npm run lint       # ESLint
```

No test framework is configured yet.

## Architecture

**POURcast** is a client-side-only React 19 study app for IAAP accessibility certifications (CPACC and WAS). No backend — all data ships as JS modules, persisted via localStorage.

### Routing

HashRouter (`/#/path`) — required for Apache subdirectory hosting at `/pourcast/`. Vite `base: '/pourcast/'` matches. Routes:

- `/` — Dashboard (course selector + domain cards)
- `/quiz/:domainId` — Active quiz session (10 shuffled questions)
- `/results` — Post-quiz results
- `/learn` — The Study Shelf (knowledge base home)
- `/learn/:slug` — Individual topic page
- `/activity` — Recent activity log (all completed lessons)

KnowledgeHome and TopicPage are lazy-loaded via `React.lazy()`.

### State Management

- **Quiz state**: `useQuiz` hook — manages question pool, scoring, feedback, missed questions. Lives in App.jsx, passed down as props.
- **User stats**: `useLocalStorage('pourcast-stats')` — XP, streak, domain score history. Tracks completion per `courseId` (cpacc/was).
- **Accessibility prefs**: `AccessibilityProvider` context via `useAccessibility` — theme, font, spacing, motion preferences stored in `localStorage('pourcast-a11y')`. Applied as `data-*` attributes on `<html>` which CSS selectors target.

### Theming & CSS

All colors use CSS custom properties (`var(--text-primary)`, `var(--bg-surface)`, etc.) — never hardcoded Tailwind color classes. Four themes defined in `index.css`: light (warm ivory `#fffff0`), dark, hc-light, hc-dark. Components use inline `style={{}}` with these variables.

Additional CSS-driven accessibility axes: font-family (4 options, Atkinson Hyperlegible default), font-size, letter-spacing, line-height, underline-links, reduce-motion — all via `data-*` attribute selectors.

### Data Layer

**Questions** (`src/data/questions/`): 5 domain files (3 CPACC, 2 WAS). Each exports a domain object with `id`, `courseId`, `questions[]`. Questions have `explanation`, `wrongExplanations` (keyed by wrong option index), `topicLinks` (slugs into knowledge base), `difficulty`, `tags`.

**Knowledge base** (`src/data/knowledgeBase/index.js`): ~65 topics with `applicableTo` tags (`['cpacc']`, `['was']`, or both). Content is structured data arrays (paragraph/heading/list/callout types) — never raw HTML. Topics are linked from quiz feedback via `topicLinks`.

### Accessibility Patterns

This app studies accessibility, so it must be accessible itself:

- **Skip nav** in AppShell targets `<main tabIndex={-1}>`
- **Focus management**: `usePageFocus` hook skips auto-focus on initial load (preserving skip-nav as first Tab stop) but focuses page headings on in-app route changes. QuizCard focuses on each new question.
- **Screen reader announcements**: `LiveRegion` provides `aria-live="polite"` region; `useAnnounce` hook used throughout quiz flow.
- **Color independence**: feedback always uses symbols + text alongside color (checkmark/X icons).
- **Dialogs** (AccessibilityPanel, StatsPopover): `aria-haspopup="dialog"`, focus moves into dialog on open, Escape returns focus to trigger.
- **Tab pattern** (CourseSelector/Dashboard): both tabpanels always rendered with `hidden` on inactive; `aria-labelledby` connects tabs to panels via stable IDs.

### Key Conventions

- Minimum text size is `text-base` (16px) — never use `text-sm` or `text-xs`.
- Icons from `lucide-react` with `aria-hidden="true"`.
- All interactive surfaces need visible hover AND focus states using CSS variables.
- CSP in index.html — no `'unsafe-inline'` for scripts.
