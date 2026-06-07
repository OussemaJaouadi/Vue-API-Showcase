# Vue API Workbench Showcase Redesign

## Goal

Redesign the current Vue API Workbench showcase so it matches Oussema Jaouadi's public quality bar: technical, product-grade, architecture-aware, and visually faithful to the real app. The current implementation feels like a generic landing page with the right colors. The redesign should feel like a serious self-hosted developer tool page.

## Source Of Truth

- `starter/INSTRUCTION.md`: static showcase requirements and constraints.
- `starter/CONTENT.md`: required copy and section content.
- `starter/DESIGN.md`: required design tokens and component aesthetic.
- Existing implementation in `src/`: Vue 3, Vite, Tailwind CSS 4, Phosphor icons.

The redesign must preserve the starter's strict token discipline: OKLCH colors, Nunito Sans body font, Public Sans headings, tactile buttons, workbench shadows, thin scrollbar, `.dark` class theming, and reduced-motion support.

## Approved Direction

Use an architecture-led Product Workbench page.

The page should still present Vue API Workbench as a product, but the first serious proof point is architecture, not screenshots. The hierarchy is:

1. Compact technical hero.
2. Architecture proof as the first major section.
3. Credibility band.
4. Grouped feature workflows.
5. Screenshot slots for future real screenshots.
6. Built With and Get Started.
7. Footer.

The visual language is App-Native Tactile as the base, with sharper workbench density in the hero and architecture section. It should use the real app's tokens and tactile border/shadow treatment rather than a generic SaaS aesthetic.

## Page Structure

### Header

Keep a compact sticky header, but make it quieter. It should support navigation to the main sections and expose GitHub plus theme toggle. Avoid oversized brand treatment in the header because the hero already carries the product identity.

### Hero

The hero should be compact and technical:

- Headline: `Vue API Workbench`.
- Tagline from `starter/CONTENT.md`, using the same meaning and preferably exact wording.
- Primary CTA: `View on GitHub`.
- Secondary CTA: `View Demo ▸`. If no demo exists yet, keep the CTA visually present but point it to a placeholder target or disable it deliberately rather than replacing it with unrelated "Read the Docs" copy.
- Tech badges row: `Go 1.25+ · Nuxt 4 · Bun 1.3 · SQLite · MIT License`.

The hero's right side should not use a fake screenshot tab UI. It should use a structured product-surface placeholder: request method, URL, status/timing, request composer and response inspector panels. This acts as a screenshot slot that can later be replaced by real imagery.

### Architecture

Architecture is the first major section after the hero.

It should communicate the central product claim:

> The browser never connects directly to target APIs.

Use the body copy from `starter/CONTENT.md`, then show a serious styled diagram for:

- Browser UI.
- Nitro/frontend server boundary.
- Go backend proxy.
- SQLite persistence.
- SSE broker with single-use tickets.
- WebSocket relay.
- Target APIs.

The diagram should feel like a system model, not a toy flowchart. Use tactile surfaces, crisp lines, app token colors, and restrained annotations. If the Mermaid source becomes available, this section should be able to swap to a rendered Mermaid/SVG diagram without redesigning the page.

### Credibility Band

Place credibility directly after architecture. This section should read like engineering proof, not marketing badges.

Include compact proof points such as:

- JWT access and refresh tokens.
- HttpOnly refresh cookies.
- Argon2id password hashing.
- Token version invalidation.
- Workspaces, roles, and per-resource grants.
- OpenAPI, Swagger, Postman, and Workbench JSON import/export.
- Persisted execution history.
- SSE and WebSocket relay support.

Use concise tiles or rows, not large decorative cards.

### Grouped Features

Replace the current nine equal feature tiles with three workflow groups:

- Build requests: Request Editor, Auth Profiles, Environment Variables.
- Execute safely: HTTP Execution Proxy, WebSocket Relay, Execution History.
- Organize teams: Workspaces, Import & Export, Authentication.

Within each group, use the verbatim feature copy from `starter/CONTENT.md` where practical. The goal is to reduce the "nine disconnected cards" feeling and make the product story easier to scan.

### Screenshots

The user will add screenshots later. Until then, do not fabricate polished fake screenshots.

Use calm screenshot slots with captions from `starter/CONTENT.md`:

- Workbench Editor.
- Collections Tree.
- Environments.
- Dark Mode.

The layout should make replacement easy:

- One large primary screenshot slot.
- Two or three smaller secondary slots.
- Captions visible and useful.

Do not keep the current interactive fake screenshot tabs. They add invented UI, create false product evidence, and make the page feel less mature.

### Built With

Keep a compact table or dense grid using the exact stack from `starter/CONTENT.md`:

- Nuxt 4, Vue 3, Tailwind CSS 4.
- shadcn-vue, Reka UI, Phosphor Icons.
- CodeMirror.
- Go, Echo v4.
- SQLite via GORM.
- JWT, Argon2id, HttpOnly cookies.
- SSE broker, gorilla/websocket.
- Bun, Nitro server.

### Quick Start

Keep a copyable terminal block, but reduce decorative terminal chrome. The code should match `starter/CONTENT.md` as closely as possible. If the GitHub URL replaces `<repo-url>`, that is acceptable, but avoid adding extra explanatory lines that break the verbatim copy requirement.

### Footer

Keep it minimal:

- Built with Go + Nuxt + SQLite.
- MIT License.
- GitHub, Security, Changelog.
- Optional credit: Project by Oussema Jaouadi.

## Visual Rules

- Use exact OKLCH tokens from `starter/DESIGN.md`.
- Default to dark mode behavior, while respecting first-visit system preference as required.
- Keep button styling tactile: square corners, border-2, active translation, workbench shadows.
- Use card shadows only where they support product surfaces or proof sections.
- Avoid decorative blobs, generic gradients, oversized empty hero spacing, and generic SaaS card rhythm.
- Use sharper, denser composition in hero and architecture only; keep the rest restrained.
- Use screenshot placeholders as honest slots, not fake screenshots.
- Use a 3px custom scrollbar per the starter design.
- Ensure mobile layouts stack cleanly, with fixed-width diagrams becoming horizontally scrollable only where necessary.

## Current Implementation Changes

Remove or replace:

- Hero secondary CTA `Read the Docs`; use `View Demo ▸`.
- Floating blob-like decorative accents.
- Hand-drawn toy architecture diagram.
- Nine equal feature cards as the main feature structure.
- Interactive fake screenshot tabs and invented fake product UI.
- Rounded controls that conflict with the tactile square-corner rule.
- Extra quick-start helper comments that make the block less faithful to the starter.

Keep and improve:

- Vue 3 + Vite + Tailwind CSS setup.
- Phosphor icon usage.
- Theme toggle behavior.
- Existing token definitions, corrected where they diverge.
- Copyable quick-start behavior.

## Success Criteria

- The page no longer feels like a generic landing template.
- Architecture is immediately visible and credible.
- The design visibly belongs to Vue API Workbench's app aesthetic.
- Screenshot areas can accept real images later without layout rework.
- Starter content and design rules are respected.
- The implementation builds successfully with the existing `npm/bun` scripts.
