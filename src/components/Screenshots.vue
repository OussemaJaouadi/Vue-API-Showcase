<script setup lang="ts">
import { PhBracketsCurly, PhImageSquare, PhMoon, PhTreeStructure, PhWrench } from '@phosphor-icons/vue'

const screenshots = [
  {
    title: 'Workbench Editor',
    caption: 'Workbench Editor — build and execute requests with live response inspection.',
    icon: PhWrench,
    primary: true
  },
  {
    title: 'Collections Tree',
    caption: 'Collections Tree — organize requests into folders with drag-and-drop ordering.',
    icon: PhTreeStructure
  },
  {
    title: 'Environments',
    caption: 'Environments — manage variables and secrets per workspace environment.',
    icon: PhBracketsCurly
  },
  {
    title: 'Dark Mode',
    caption: 'Dark Mode — full dark theme with system preference detection.',
    icon: PhMoon
  }
]
</script>

<template>
  <section id="screenshots" class="py-12 md:py-16 border-b border-border bg-background">
    <div class="container max-w-6xl px-4 mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <div class="section-kicker mb-3">Screenshots</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Product evidence slots.
          </h2>
        </div>
        <p class="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Real screenshots will land here later. Until then, the page keeps honest placeholders instead of fabricated UI.
        </p>
      </div>

      <div class="grid lg:grid-cols-[1.35fr_1fr] gap-5">
        <article
          v-for="shot in screenshots.filter((item) => item.primary)"
          :key="shot.title"
          class="surface-tactile p-4 md:p-5"
        >
          <div class="screenshot-slot min-h-[260px] md:min-h-[360px] flex flex-col items-center justify-center text-center p-6">
            <component :is="shot.icon" :size="38" weight="bold" class="text-primary mb-4" />
            <div class="font-heading font-bold text-xl text-foreground mb-2">{{ shot.title }}</div>
            <div class="text-sm font-bold text-muted-foreground">Screenshot pending</div>
          </div>
          <p class="mt-4 text-sm text-muted-foreground leading-relaxed">{{ shot.caption }}</p>
        </article>

        <div class="grid gap-5">
          <article
            v-for="shot in screenshots.filter((item) => !item.primary)"
            :key="shot.title"
            class="surface-flat p-4"
          >
            <div class="screenshot-slot min-h-[130px] flex items-center justify-center text-center p-5 mb-4">
              <div>
                <component :is="shot.icon" :size="28" weight="bold" class="text-primary mx-auto mb-3" />
                <div class="font-heading font-bold text-foreground">{{ shot.title }}</div>
                <div class="text-xs font-bold text-muted-foreground mt-1">Screenshot pending</div>
              </div>
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">{{ shot.caption }}</p>
          </article>
        </div>
      </div>

      <div class="surface-flat p-4 mt-5 flex items-start gap-3">
        <PhImageSquare :size="22" weight="bold" class="text-primary shrink-0 mt-0.5" />
        <p class="text-sm text-muted-foreground leading-relaxed">
          Drop final screenshots into this section later without changing the page structure:
          primary editor view first, then collections, environments, and dark mode support.
        </p>
      </div>
    </div>
  </section>
</template>
