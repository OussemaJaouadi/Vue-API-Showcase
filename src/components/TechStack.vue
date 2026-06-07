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
  <section class="py-10 md:py-16 border-b border-border bg-muted">
    <div class="container max-w-4xl px-4 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">Built With</h2>
        <div class="h-1 w-12 bg-primary mx-auto"></div>
      </div>

      <!-- Tech Stack Table Card -->
      <div class="card-workbench bg-card rounded-none overflow-hidden p-1">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-border bg-muted/30 text-muted-foreground text-xs uppercase font-bold tracking-wider">
                <th class="p-3 md:p-4 font-heading">Layer</th>
                <th class="p-3 md:p-4 font-heading">Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="item in techStack"
                :key="item.layer"
                class="border-b last:border-0 border-border bg-card hover:bg-muted/10 transition-colors"
              >
                <!-- Layer -->
                <td class="p-3 md:p-4 font-bold text-foreground text-sm md:text-base">
                  {{ item.layer }}
                </td>
                <!-- Technology -->
                <td class="p-3 md:p-4 text-muted-foreground text-sm md:text-base font-mono">
                  {{ item.technology }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
