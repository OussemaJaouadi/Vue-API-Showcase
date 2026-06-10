<script setup lang="ts">
import { PhArrowSquareOut, PhGithubLogo, PhGlobe } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="px-4 sm:px-6 lg:px-8 py-5">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
        <span class="text-muted-foreground">
          MIT · <span class="text-foreground font-semibold">Oussema Jaouadi</span>
        </span>

        <div class="flex items-center gap-4">
          <a
            href="https://github.com/OussemaJaouadi/Vue-API"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <PhGithubLogo :size="16" weight="bold" />
            GitHub
          </a>
          <a
            href="https://oussemajaouadi.site"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <PhGlobe :size="16" weight="bold" />
            oussemajaouadi.site
            <PhArrowSquareOut :size="12" weight="bold" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
