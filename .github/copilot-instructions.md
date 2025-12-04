## Repo snapshot

- Framework: React (JSX) scaffolded with Vite.
- Dev server: Vite (HMR enabled). Key scripts in `package.json`: `dev`, `build`, `preview`, `lint`.
- Source root: `src/`. Entry: `src/main.jsx`. Main app: `src/App.jsx`.

## What an AI coding agent should know (concise)

- Keep changes small and focused. This is a minimal Vite + React template used for local development and demos.
- Dev workflow:
  - Run locally: `npm run dev` (Vite dev server, fast refresh/HMR).
  - Build production: `npm run build`.
  - Preview build: `npm run preview`.
  - Lint: `npm run lint` (runs `eslint .`).
- The project uses `@vitejs/plugin-react` (see `vite.config.js`) — avoid removing or replacing the plugin without updating `vite.config.js` accordingly.

## Important files and patterns

- `index.html` — root HTML. It loads `/src/main.jsx` and uses `<div id="root"></div>`.
- `src/main.jsx` — React entry, uses `createRoot` and `StrictMode`.
- `src/App.jsx` — primary component. Examples of common patterns to follow:
  - Static asset import: `import reactLogo from './assets/react.svg'`.
  - Root-relative import (Vite): `import viteLogo from '/vite.svg'` — note the leading `/` refers to project root served by Vite.
  - CSS imports colocated with components: `import './App.css'`.

## Project-specific conventions and gotchas

- File extensions: components use `.jsx` (not `.js` or `.tsx`). Maintain extension consistency for tooling.
- Type packages are present in `devDependencies` (`@types/react`, `@types/react-dom`) but the project is JavaScript. Do not convert to TypeScript unless explicitly requested.
- Image / asset handling relies on Vite's import behavior. Use imports for images where possible instead of hard-coded paths.
- Preserve HMR-friendly code shapes: prefer pure React components and avoid side-effects at module top-level that would break hot reload.

## Editing guidance for agents

- When editing UI files (e.g., `src/App.jsx`):
  - Keep changes minimal and single-purpose. Include a short comment explaining the change when it affects layout or behavior.
  - Update or add CSS in the same folder where applicable (`src/App.css`).
- When changing build or tooling config (`vite.config.js`, `package.json`):
  - Explain the reason for the change in your commit message and in the PR description.
  - If adding dependencies, add them to `dependencies` (runtime) or `devDependencies` (build/test only) in `package.json` and prefer the currently used versions (see existing deps).
- Linting: The repo exposes `npm run lint`. Respect existing ESLint config (`eslint.config.js`) and fix issues rather than disabling rules.

## Integration points

- No backend or API layer is present in the template — this is a client-only scaffold. If integrating external APIs, follow typical React patterns and add environment variables to Vite (`.env` files) rather than hard-coding secrets.

## Examples agents can use

- Add a new component: create `src/components/MyWidget.jsx` + `src/components/MyWidget.css`, import it from `src/App.jsx`, and keep changes limited to those files.
- Add image asset: place under `src/assets/` and import as `import logo from './assets/foo.png'`.

## What not to do

- Don't migrate to TypeScript or change major toolchain pieces without explicit user instruction.
- Don't change package versions silently — call out upgrades and rationale.

## Where to look first when debugging or extending

- `package.json` — scripts and deps.
- `vite.config.js` — plugin and build config.
- `src/main.jsx`, `src/App.jsx`, `index.html` — app wiring and mounting.

---
If any sections are unclear or you want this file to enforce stricter rules (commit message format, testing requirements, or PR labels), tell me what to add and I'll iterate.
