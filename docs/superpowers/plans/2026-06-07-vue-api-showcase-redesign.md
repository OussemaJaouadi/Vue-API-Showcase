# Vue API Showcase Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing Vue API Workbench showcase into an architecture-led, app-native tactile product page that follows `starter/CONTENT.md` and `starter/DESIGN.md`.

**Architecture:** Keep the current Vue 3 + Vite + Tailwind CSS 4 app. Replace the current generic section implementations with focused, static Vue components: compact technical hero, architecture proof, credibility band, grouped workflows, honest screenshot slots, compact stack/quick-start/footer. Keep all content local and component-scoped; no new routing, state management, or runtime dependencies.

**Tech Stack:** Vue 3 `<script setup>`, TypeScript, Vite 8, Tailwind CSS 4, Phosphor Icons, browser Clipboard API.

---

## File Structure

- Modify `src/style.css`: global tokens, scrollbar correction, reusable tactile/surface utilities, reduced decorative styling, responsive helpers.
- Modify `src/App.vue`: quieter header nav, section order, anchor links.
- Modify `src/components/ThemeToggle.vue`: square tactile icon button, preserve `.dark` behavior and reduced-motion class.
- Modify `src/components/Hero.vue`: compact architecture/product hero with `View Demo ▸` CTA and product-surface placeholder.
- Modify `src/components/Architecture.vue`: replace toy flowchart with architecture proof section and credibility band.
- Modify `src/components/FeatureCards.vue`: replace nine equal cards with three workflow groups using starter copy.
- Modify `src/components/Screenshots.vue`: remove interactive fake tabs; create honest screenshot slots with captions.
- Modify `src/components/TechStack.vue`: keep exact stack, tighten layout.
- Modify `src/components/QuickStart.vue`: simplify terminal chrome, make displayed code match copied code.
- Modify `src/components/Footer.vue`: keep minimal footer links and credit.
- Verify `index.html`: ensure font links and metadata still match product page.

No new dependencies should be added.

## Chunk 1: Global Styling And Shell

### Task 1: Correct Global Visual Rules

**Files:**
- Modify: `src/style.css`

- [ ] **Step 1: Inspect current token differences**

Run:

```bash
sed -n '1,240p' src/style.css
```

Expected: existing OKLCH variables are present, but scrollbar uses `4px`, some reusable components allow rounded UI, and decorative blob support exists.

- [ ] **Step 2: Patch global CSS**

Make these concrete changes:

- Set scrollbar width/height to `3px`.
- Remove thumb radius or keep it visually minimal.
- Keep exact light/dark OKLCH variables.
- Keep `.btn-tactile-primary`, `.btn-tactile-muted`, `.card-workbench`.
- Add reusable classes:
  - `.surface-tactile`: card-like surface with app border/shadow.
  - `.surface-flat`: border-only quiet surface.
  - `.section-kicker`: small uppercase technical label.
  - `.diagram-node`: reusable architecture node treatment.
  - `.screenshot-slot`: honest placeholder slot.
- Avoid adding new decorative gradients or blob utilities.

Example target additions:

```css
.surface-tactile {
  background: var(--card);
  border: 2px solid var(--border);
  box-shadow: 4px 4px 0 0 oklch(0.508 0.118 165.612 / 0.12);
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.diagram-node {
  border: 2px solid var(--border);
  background: var(--card);
  padding: 0.75rem;
}

.screenshot-slot {
  border: 2px dashed oklch(0.508 0.118 165.612 / 0.28);
  background: oklch(0.508 0.118 165.612 / 0.035);
}
```

- [ ] **Step 3: Verify no token drift**

Run:

```bash
rg "oklch|scrollbar|rounded-full|blur-3xl" src/style.css
```

Expected: OKLCH tokens still match `starter/DESIGN.md`; scrollbar is `3px`; no new blob-style utilities are introduced.

### Task 2: Quiet The App Shell

**Files:**
- Modify: `src/App.vue`
- Modify: `src/components/ThemeToggle.vue`

- [ ] **Step 1: Update header nav**

In `src/App.vue`, keep the sticky header but make nav links match the new section order:

- `Architecture` → `#architecture`
- `Proof` → `#credibility`
- `Features` → `#features`
- `Screenshots` → `#screenshots`
- `Setup` → `#quick-start`
- GitHub external link

Keep logo and `ThemeToggle`.

- [ ] **Step 2: Make theme toggle tactile and square**

In `src/components/ThemeToggle.vue`, change the button class from rounded card style to square tactile icon style:

```vue
class="btn-tactile-muted p-2 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
```

Keep existing `localStorage`, `.dark`, and `reduce-motion` logic.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 4: Commit chunk**

```bash
git add src/style.css src/App.vue src/components/ThemeToggle.vue
git commit -m "refactor: align showcase shell with redesign"
```

## Chunk 2: Hero And Architecture Proof

### Task 3: Rebuild Hero

**Files:**
- Modify: `src/components/Hero.vue`

- [ ] **Step 1: Replace generic hero composition**

Remove:

- Floating blob accents.
- Oversized centered hero.
- `Read the Docs` CTA.
- Rounded logo card.

Create:

- Compact two-column hero on desktop.
- Left column: kicker, `Vue API Workbench`, verbatim tagline, CTA row, tech badge row.
- Right column: structured product-surface placeholder with request method, URL, response status/timing, request composer, response inspector, proxy note.

Use exact CTA labels:

```text
View on GitHub
View Demo ▸
```

If no demo URL exists, use `href="#screenshots"` for now and make it visually secondary.

- [ ] **Step 2: Keep honest placeholder copy**

The right-side product surface may include short labels like:

```text
GET /api/workspaces/:id/requests
200 OK
Proxied through Go backend
Request composer
Response inspector
```

Do not imply these are real screenshots.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

### Task 4: Rebuild Architecture And Credibility

**Files:**
- Modify: `src/components/Architecture.vue`

- [ ] **Step 1: Add section anchors**

The architecture root section must have:

```vue
<section id="architecture" ...>
```

Add a credibility subsection with:

```vue
<div id="credibility" ...>
```

- [ ] **Step 2: Replace toy flowchart**

Build a serious tactile diagram with these nodes:

- Browser UI.
- Nitro.
- Go backend proxy.
- SQLite.
- SSE broker.
- WebSocket relay.
- Target APIs.

Use the required architecture body copy from `starter/CONTENT.md`.

- [ ] **Step 3: Add compact credibility band**

Add concise proof tiles:

- JWT + HttpOnly refresh cookies.
- Argon2id + token version invalidation.
- Workspace roles + grants.
- Import/export formats.
- Persisted execution history.
- SSE tickets + WebSocket relay.

- [ ] **Step 4: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

- [ ] **Step 5: Commit chunk**

```bash
git add src/components/Hero.vue src/components/Architecture.vue
git commit -m "feat: add architecture-led hero and proof"
```

## Chunk 3: Features And Screenshot Slots

### Task 5: Replace Equal Feature Grid With Workflow Groups

**Files:**
- Modify: `src/components/FeatureCards.vue`

- [ ] **Step 1: Group existing feature data**

Replace flat `features` with workflow groups:

```ts
const groups = [
  {
    title: 'Build requests',
    summary: 'Compose requests with editor, auth, and environment context.',
    items: ['Request Editor', 'Auth Profiles', 'Environment Variables']
  },
  {
    title: 'Execute safely',
    summary: 'Route HTTP and WebSocket traffic through the backend boundary.',
    items: ['HTTP Execution Proxy', 'WebSocket Relay', 'Execution History']
  },
  {
    title: 'Organize teams',
    summary: 'Manage workspaces, access, authentication, and imports.',
    items: ['Workspaces', 'Import & Export', 'Authentication']
  }
]
```

Keep the item descriptions from `starter/CONTENT.md`.

- [ ] **Step 2: Render three tactile group cards**

Each group should:

- Use a strong icon.
- Show summary.
- List the three features with title and short description.
- Avoid looking like nine unrelated tiles.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

### Task 6: Replace Fake Screenshots With Slots

**Files:**
- Modify: `src/components/Screenshots.vue`

- [ ] **Step 1: Remove tab state and fake UI**

Delete:

- `activeTab`.
- Tabs.
- Mock request editor UI.
- Mock collections tree UI.
- Mock environments table.
- Mock dark mode widget.

- [ ] **Step 2: Add screenshot slot data**

Use:

```ts
const screenshots = [
  {
    title: 'Workbench Editor',
    caption: 'Workbench Editor — build and execute requests with live response inspection.',
    primary: true
  },
  {
    title: 'Collections Tree',
    caption: 'Collections Tree — organize requests into folders with drag-and-drop ordering.'
  },
  {
    title: 'Environments',
    caption: 'Environments — manage variables and secrets per workspace environment.'
  },
  {
    title: 'Dark Mode',
    caption: 'Dark Mode — full dark theme with system preference detection.'
  }
]
```

- [ ] **Step 3: Render honest slots**

Create one large primary slot and smaller secondary slots. Slot text should say:

```text
Screenshot pending
```

Captions should be visible. Do not fabricate UI.

- [ ] **Step 4: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

- [ ] **Step 5: Commit chunk**

```bash
git add src/components/FeatureCards.vue src/components/Screenshots.vue
git commit -m "feat: group features and add screenshot slots"
```

## Chunk 4: Stack, Quick Start, Footer, Metadata

### Task 7: Tighten Built With

**Files:**
- Modify: `src/components/TechStack.vue`

- [ ] **Step 1: Keep exact stack data**

Do not change the technologies from `starter/CONTENT.md`.

- [ ] **Step 2: Tighten visual treatment**

Use a compact tactile table or dense two-column grid. Avoid oversized card padding.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

### Task 8: Simplify Quick Start

**Files:**
- Modify: `src/components/QuickStart.vue`

- [ ] **Step 1: Make copied and displayed code identical**

Use one source string for the display and clipboard. Prefer the exact starter block, with GitHub URL in place of `<repo-url>` acceptable:

```ts
const codeString = `git clone https://github.com/OussemaJaouadi/Vue-API && cd vue-api
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
openssl rand -hex 32  # → JWT_ACCESS_SECRET
openssl rand -hex 32  # → JWT_REFRESH_SECRET
openssl rand -hex 32  # → PASSWORD_PEPPER
task db:generate && task db:plan && task db:migrate
task backend:dev & task frontend:dev`
```

- [ ] **Step 2: Render with `<pre>`**

Use a clean `<pre>` block rather than manually splitting every line with extra comments. Keep copy button.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

### Task 9: Tighten Footer And Metadata

**Files:**
- Modify: `src/components/Footer.vue`
- Modify: `index.html`

- [ ] **Step 1: Footer**

Keep:

- Built with Go + Nuxt + SQLite.
- MIT License.
- GitHub, Security, Changelog.
- Project by Oussema Jaouadi.

Use square/tactile link styling where relevant.

- [ ] **Step 2: Metadata**

Check title and meta description still describe Vue API Workbench accurately. Keep the existing font preconnects.

- [ ] **Step 3: Build**

Run:

```bash
bun run build
```

Expected: build succeeds.

- [ ] **Step 4: Commit chunk**

```bash
git add src/components/TechStack.vue src/components/QuickStart.vue src/components/Footer.vue index.html
git commit -m "polish: tighten stack setup and footer sections"
```

## Chunk 5: Visual Verification

### Task 10: Run Full Build And Inspect Output

**Files:**
- Read: build output only

- [ ] **Step 1: Run production build**

```bash
bun run build
```

Expected: `vue-tsc -b && vite build` completes successfully.

- [ ] **Step 2: Start dev server**

```bash
bun run dev -- --host 127.0.0.1
```

Expected: Vite starts and prints a local URL.

- [ ] **Step 3: Manual browser inspection**

Inspect desktop and mobile widths. Confirm:

- Header nav does not wrap badly.
- Hero is compact and technical.
- Architecture is visible above feature cards.
- Credibility band reads like proof, not marketing.
- Feature grouping is clear.
- Screenshot slots look deliberate.
- No fake screenshot tabs remain.
- Dark/light toggle works.
- Reduced-motion class remains supported.

- [ ] **Step 4: Stop dev server**

Stop the Vite process cleanly with `Ctrl-C`.

- [ ] **Step 5: Final status**

Run:

```bash
git status --short
```

Expected: only intentional files are modified.

Do not commit generated `.superpowers/` visual companion files unless explicitly requested.
