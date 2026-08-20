# Brian van Vlymen · Portfolio

**Live site: [van-vlymen.com](https://van-vlymen.com)**

Portfolio of Brian van Vlymen — Senior Full-Stack Engineer · AWS Cloud Engineer, and a certified Web Accessibility Specialist (WAS). A minimalist, accessible site built with Next.js (App Router, static export), React, and Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## 🛠 Tech Stack

| Layer | Tools |
| :--- | :--- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, `output: "export"`) |
| UI | React 18 · Tailwind CSS · Framer Motion · Font Awesome |
| Theming | next-themes (light/dark mode) |
| SEO | Generated `sitemap.xml` + `robots.txt`, Open Graph & JSON-LD metadata |
| Hosting | GitHub Pages with custom domain, deployed by GitHub Actions |

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Hot reload is enabled.

> **WSL tip:** Run this project from the Linux filesystem (e.g. `~/Github/...`), not `/mnt/c/...`, so Hot Module Replacement stays fast.

To create a production build locally:

```bash
npm run build
```

The static site is exported to the `out/` folder.

## 📦 Deployment

Deployment is fully automated — **push to `main` and GitHub Actions does the rest:**

1. The [`publish.yml`](.github/workflows/publish.yml) workflow builds the site with `next build`.
2. The exported `out/` folder is uploaded as a Pages artifact.
3. GitHub Pages publishes it to [van-vlymen.com](https://van-vlymen.com).

No manual deploy step is needed. `main` is the only branch — the site is published from a Pages artifact, not from a branch.

## 📁 Project Structure

```
app/
├── layout.js      # Root layout, SEO metadata, JSON-LD
├── page.js        # Home page
├── sitemap.js     # Generates sitemap.xml
├── robots.js      # Generates robots.txt
├── components/    # UI components
└── projects/      # Project case-study pages
public/
└── images/        # Static assets
```

---

> 💡 **Reminder:** While developing in WSL, keep projects in the Linux home directory (`~/...`), not on the Windows C: drive (`/mnt/c/...`). File access across the Windows/Linux boundary is much slower and breaks Hot Module Replacement.
