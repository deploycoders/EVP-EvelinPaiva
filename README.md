# EVP - Evelin Paiva (React + Tailwind)

Base landing page built with **React (JavaScript)**, **Vite**, and **Tailwind CSS**, organized into reusable sections and ready to scale.

## Stack

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS 3 + PostCSS + Autoprefixer

## Brand Color Palette

Defined in `tailwind.config.js` under `theme.extend.colors.evp`.

- `evp.bg`: `#F7F3F0`
- `evp.section`: `#EFE9E4`
- `evp.accent`: `#AD5D43`
- `evp.accent-deep`: `#8A4833`
- `evp.title`: `#1A1A1A`
- `evp.body`: `#575757`
- `evp.border`: `#D9C5B2`

## Project Structure

```txt
.
├─ src/
│  ├─ app/
│  │  ├─ layout/
│  │  └─ router/
│  ├─ components/
│  │  ├─ common/
│  │  └─ layout/
│  ├─ data/
│  ├─ pages/
│  ├─ sections/
│  └─ styles/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Requirements

- Node.js 20+ (22 recommended)
- npm 10+

## Installation and Run

```bash
npm install
npm run dev
```

Local app: `http://localhost:5173`

## Available Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
```

## Tailwind Setup

- Main stylesheet: `src/styles/tailwind.css`
- Theme config: `tailwind.config.js`
- Utility classes directly in JSX
- Reusable section utility class: `section-shell`

## Routes

Defined in `src/app/router/AppRouter.jsx`.

- `/` -> Home
- `/home` -> redirects to `/`
- `/inicio` -> redirects to `/` (legacy)
- `*` -> NotFound

## Initial Sections

- Hero
- Manifesto Banner
- About
- Services
- Portfolio
- Testimonials
- Contact

All sections are under `src/sections/*` and ready for content replacement.

## Environment Variables

1. Copy the example file:

```bash
cp .env.example .env
```

In Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

2. Update values for your environment.

## Push to GitHub

If this is a new repository:

```bash
git init
git add .
git commit -m "feat: initial React + Tailwind EVP structure"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

If remote already exists and you only need to update:

```bash
git add .
git commit -m "chore: project setup and docs"
git push
```

## Production Build

```bash
npm run build
```

Output folder: `dist/`.

## Notes

- `node_modules/` and `dist/` are ignored by Git.
- The project uses JavaScript only (no TypeScript).
- You can safely extend design tokens in `tailwind.config.js`.
