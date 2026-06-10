<script setup lang="ts">
import { PhArrowSquareOut, PhGlobe, PhShieldCheck } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="relative border-t border-border bg-background overflow-hidden">
    <div class="px-4 sm:px-6 lg:px-8 py-5">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-primary mb-1.5">
            <PhShieldCheck :size="14" weight="bold" />
            Vue API Workbench
          </div>
          <div class="text-muted-foreground">
            MIT License · by <span class="text-foreground font-semibold">Oussema Jaouadi</span>
          </div>
        </div>

        <a
          href="https://oussemajaouadi.site"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 font-heading font-bold text-foreground hover:text-primary transition-colors"
        >
          <PhGlobe :size="17" weight="bold" />
          oussemajaouadi.site
          <PhArrowSquareOut :size="14" weight="bold" class="text-primary" />
        </a>
      </div>
    </div>
  </footer>
</template>
