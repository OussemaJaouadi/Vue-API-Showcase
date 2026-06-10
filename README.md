<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Vue%20API%20Workbench-Showcase-%234FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white&labelColor=%2335495e">
    <img alt="Vue API Workbench Showcase" src="https://img.shields.io/badge/Vue%20API%20Workbench-Showcase-%234FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white&labelColor=%2335495e">
  </picture>
</p>

<p align="center">
  <a href="https://github.com/OussemaJaouadi/Vue-API"><img src="https://img.shields.io/badge/product-Vue--API-00DC82?logo=github&logoColor=white" alt="Product repo"></a>
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue"></a>
  <a href="https://vite.dev"><img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Bun-1.3-%23f9f9f9?logo=bun&logoColor=black" alt="Bun"></a>
</p>

<p align="center">
  <b>Static showcase for <a href="https://github.com/OussemaJaouadi/Vue-API">Vue API Workbench</a></b>
  <br>
  Architecture-first product page for the self-hosted API workbench: proxy boundary, workflows, real screenshots, stack, and local setup.
</p>

<br>

---

## About

This repository contains the public-facing showcase site for [`OussemaJaouadi/Vue-API`](https://github.com/OussemaJaouadi/Vue-API).

The actual product lives in the main repo. This site exists to present it cleanly: what it is, why the backend proxy matters, what workflows it supports, and how the interface looks in real application states.

---

## Page Sections

- **Hero** — product identity, short pitch, and GitHub entry point
- **Architecture** — browser → Nitro → Go proxy → SQLite/SSE/target APIs
- **Features** — build requests, execute safely, organize teams
- **Preview** — real screenshots with modal inspection
- **Built with** — frontend, backend, persistence, auth, realtime, and runtime layers
- **Get Started** — clone, env files, secrets, migrations, and dev servers

---

## Screenshots

Screenshots live in [`src/assets/screenshots`](src/assets/screenshots):

| Screen | File |
|--------|------|
| Workbench editor | `workbench-editor.png` |
| Collections browser | `collections-browser.png` |
| Environment drawer | `environment-drawer.png` |
| Access policy | `access-policy.png` |
| Workspace control | `workspace-management.png` |
| Settings layout | `settings-layout.png` |
| Settings appearance | `settings-appearance.png` |

---

## Development

```bash
bun install
bun run dev
```

```bash
bun run build
bun run preview
```

---

## Deploy

Static Vite output. For Vercel:

| Setting | Value |
|---------|-------|
| Build command | `bun run build` |
| Output directory | `dist` |

---

## Related

- Product repo: [`OussemaJaouadi/Vue-API`](https://github.com/OussemaJaouadi/Vue-API)
- Personal site: [`oussemajaouadi.site`](https://oussemajaouadi.site)

