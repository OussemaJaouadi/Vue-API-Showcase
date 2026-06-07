<script setup lang="ts">
import { PhClock, PhGithubLogo, PhShieldStar } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="py-10 border-t border-border bg-card text-muted-foreground text-sm">
    <div class="container max-w-6xl px-4 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <div class="font-heading font-bold text-foreground mb-1">
          Built with Go + Nuxt + SQLite
        </div>
        <div>
          MIT License · Project by <span class="text-foreground font-semibold">Oussema Jaouadi</span>
        </div>
      </div>

      <nav class="flex items-center gap-2 flex-wrap font-bold">
        <a
          href="https://github.com/OussemaJaouadi/Vue-API"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-tactile-muted px-3 py-2 inline-flex items-center gap-2"
        >
          <PhGithubLogo :size="16" weight="bold" />
          GitHub
        </a>
        <a
          href="https://github.com/OussemaJaouadi/Vue-API/blob/main/SECURITY.md"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-tactile-muted px-3 py-2 inline-flex items-center gap-2"
        >
          <PhShieldStar :size="16" weight="bold" />
          Security
        </a>
        <a
          href="https://github.com/OussemaJaouadi/Vue-API/blob/main/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-tactile-muted px-3 py-2 inline-flex items-center gap-2"
        >
          <PhClock :size="16" weight="bold" />
          Changelog
        </a>
      </nav>
    </div>
  </footer>
</template>
