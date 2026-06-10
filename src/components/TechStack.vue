<script setup lang="ts">
import {
  PhBroadcast,
  PhBracketsCurly,
  PhCode,
  PhCpu,
  PhDatabase,
  PhLockKey,
  PhPaintBrush,
  PhStack
} from '@phosphor-icons/vue'
import SectionHeader from './SectionHeader.vue'
import SectionShell from './SectionShell.vue'

interface TechItem {
  layer: string
  technology: string
  icon: any
  accent: string
}

const techStack: TechItem[] = [
  { layer: 'Frontend', technology: 'Nuxt 4, Vue 3, Tailwind CSS 4', icon: PhStack, accent: 'oklch(0.55 0.16 155)' },
  { layer: 'Interface', technology: 'shadcn-vue, Reka UI, Phosphor Icons', icon: PhPaintBrush, accent: 'oklch(0.58 0.16 305)' },
  { layer: 'Editor', technology: 'CodeMirror', icon: PhCode, accent: 'oklch(0.55 0.16 250)' },
  { layer: 'Backend', technology: 'Go, Echo v4', icon: PhCpu, accent: 'oklch(0.56 0.14 215)' },
  { layer: 'Database', technology: 'SQLite via GORM', icon: PhDatabase, accent: 'oklch(0.62 0.15 55)' },
  { layer: 'Auth', technology: 'JWT, Argon2id, HttpOnly cookies', icon: PhLockKey, accent: 'oklch(0.56 0.16 25)' },
  { layer: 'Realtime', technology: 'SSE broker, gorilla/websocket', icon: PhBroadcast, accent: 'oklch(0.5 0.13 185)' },
  { layer: 'Runtime', technology: 'Bun, Nitro server', icon: PhBracketsCurly, accent: 'oklch(0.58 0.12 120)' }
]
</script>

<template>
  <SectionShell id="tech-stack" tone="muted" rain="faint">
      <div class="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 items-start">
        <SectionHeader
          kicker="Stack"
          title="Built with"
          mode="stack"
        />

        <div class="surface-tactile overflow-hidden">
          <div class="grid sm:grid-cols-2">
            <div
              v-for="item in techStack"
              :key="item.layer"
              class="p-4 border-b border-border sm:[&:nth-child(odd)]:border-r last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0 flex gap-3"
            >
              <div
                class="shrink-0 w-9 h-9 border inline-flex items-center justify-center"
                :style="{
                  color: item.accent,
                  borderColor: `color-mix(in oklch, ${item.accent} 32%, transparent)`,
                  backgroundColor: `color-mix(in oklch, ${item.accent} 9%, transparent)`
                }"
              >
                <component :is="item.icon" :size="19" weight="bold" />
              </div>
              <div>
                <div class="text-xs font-black uppercase text-muted-foreground mb-1">{{ item.layer }}</div>
                <div class="font-heading font-bold text-foreground">{{ item.technology }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </SectionShell>
</template>
