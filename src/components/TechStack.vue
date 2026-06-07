<script setup lang="ts">
interface TechItem {
  layer: string
  technology: string
}

const techStack: TechItem[] = [
  { layer: 'Frontend Framework', technology: 'Nuxt 4, Vue 3, Tailwind CSS 4' },
  { layer: 'UI Components', technology: 'shadcn-vue, Reka UI, Phosphor Icons' },
  { layer: 'Code Editor', technology: 'CodeMirror' },
  { layer: 'Backend', technology: 'Go, Echo v4' },
  { layer: 'Database', technology: 'SQLite via GORM' },
  { layer: 'Auth', technology: 'JWT, Argon2id, HttpOnly cookies' },
  { layer: 'Realtime', technology: 'SSE broker, gorilla/websocket' },
  { layer: 'Runtime', technology: 'Bun, Nitro server' }
]
</script>

<template>
  <section class="py-12 md:py-16 border-b border-border bg-muted">
    <div class="container max-w-6xl px-4 mx-auto">
      <div class="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 items-start">
        <div>
          <div class="section-kicker mb-3">Built With</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Small stack, clear boundaries.
          </h2>
          <p class="text-sm text-muted-foreground leading-relaxed">
            The project keeps the frontend, backend, persistence, auth, and realtime layers explicit.
          </p>
        </div>

        <div class="surface-tactile overflow-hidden">
          <div class="grid sm:grid-cols-2">
            <div
              v-for="item in techStack"
              :key="item.layer"
              class="p-4 border-b border-border sm:[&:nth-child(odd)]:border-r last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
            >
              <div class="text-xs font-black uppercase text-muted-foreground mb-1">{{ item.layer }}</div>
              <div class="font-heading font-bold text-foreground">{{ item.technology }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
