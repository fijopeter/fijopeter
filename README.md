# Fijo Peter — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio, with scroll-reveal
animations powered by Framer Motion and a light/dark theme toggle (next-themes).

## Before you run it

Open `lib/data.ts` and replace the two placeholder links:

```ts
linkedin: "https://linkedin.com/in/your-handle",
github: "https://github.com/your-handle",
```

Everything else on the page (summary, stack, experience, education) also lives in
that one file, so you can update content without touching any component.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.

**Option B — via the Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; it will build and give you a live URL.

## Project structure

```
app/            Next.js App Router pages, layout, and global styles
components/     Section components (Hero, About, Stack, Experience, ...)
lib/data.ts     All portfolio content — edit this to update the site
```
