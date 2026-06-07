<script setup lang="ts">
import { PhGithubLogo, PhShieldStar, PhClock } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="py-12 border-t border-border bg-card text-muted-foreground text-xs md:text-sm">
    <div class="container max-w-5xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left side info -->
      <div class="text-center md:text-left flex flex-col gap-1.5">
        <div class="font-bold text-foreground font-heading">
          Built with Go + Nuxt + SQLite
        </div>
        <div>
          MIT License © 2026. Project by <span class="text-foreground font-semibold">Oussema Jaouadi</span>
        </div>
      </div>

      <!-- Right side links -->
      <div class="flex items-center gap-4 flex-wrap justify-center font-semibold">
        <a 
          href="https://github.com/OussemaJaouadi/Vue-API" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <PhGithubLogo :size="16" />
          GitHub
        </a>
        <span class="text-muted-foreground/30 select-none">·</span>
        <a 
          href="https://github.com/OussemaJaouadi/Vue-API/blob/main/SECURITY.md" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <PhShieldStar :size="16" />
          Security
        </a>
        <span class="text-muted-foreground/30 select-none">·</span>
        <a 
          href="https://github.com/OussemaJaouadi/Vue-API/blob/main/CHANGELOG.md" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <PhClock :size="16" />
          Changelog
        </a>
      </div>
    </div>
  </footer>
</template>
