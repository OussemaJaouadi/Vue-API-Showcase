<script setup lang="ts">
import { PhGithubLogo, PhBookOpen } from '@phosphor-icons/vue'
import logoMark from '../assets/logo-mark.png'
</script>

<template>
  <section class="relative py-14 md:py-20 flex flex-col items-center justify-center text-center overflow-hidden border-b border-border dot-grid">
    <!-- Animated floating background accent shapes -->
    <div class="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float-slow pointer-events-none"></div>
    <div class="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-float-slower pointer-events-none"></div>

    <div class="container max-w-4xl px-4 mx-auto flex flex-col items-center relative z-10">
      <!-- Logo Mark with float-in animation -->
      <div class="mb-8 p-3 bg-card border-2 border-border shadow-[4px_4px_0_0_oklch(0.508_0.118_165.612/0.12)] rounded-2xl animate-float-slow hover:shadow-[6px_6px_0_0_oklch(0.508_0.118_165.612/0.18)] transition-all">
        <img :src="logoMark" alt="Vue API Workbench Logo" class="w-16 h-16 object-contain" />
      </div>

      <!-- Title / Headline -->
      <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
        Vue API <span class="text-primary font-extrabold relative">Workbench
          <span class="absolute bottom-1 left-0 w-full h-0.5 bg-primary/30 rounded"></span>
        </span>
      </h1>

      <!-- Tagline -->
      <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
        Self-hosted API workbench built with Nuxt 4 and Go. Manage workspaces, collections, environments, and execute proxied HTTP and WebSocket requests from a browser UI.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
        <a
          href="https://github.com/OussemaJaouadi/Vue-API"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-tactile-primary px-8 py-3.5 text-base font-semibold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
        >
          <PhGithubLogo :size="20" weight="bold" />
          View on GitHub
        </a>
        <a
          href="https://github.com/OussemaJaouadi/Vue-API/blob/main/README.md"
          class="btn-tactile-muted px-8 py-3.5 text-base font-semibold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
        >
          <PhBookOpen :size="20" weight="bold" />
          Read the Docs
        </a>
      </div>

      <!-- Tech Badges Row -->
      <div class="flex flex-wrap items-center justify-center gap-2 max-w-lg border border-border bg-card p-3 rounded-none shadow-[2px_2px_0_0_rgba(16,185,129,0.08)]">
        <span class="text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground rounded-none">Go 1.25+</span>
        <span class="text-muted-foreground/30 text-sm">·</span>
        <span class="text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground rounded-none">Nuxt 4</span>
        <span class="text-muted-foreground/30 text-sm">·</span>
        <span class="text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground rounded-none">Bun 1.3</span>
        <span class="text-muted-foreground/30 text-sm">·</span>
        <span class="text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground rounded-none">SQLite</span>
        <span class="text-muted-foreground/30 text-sm">·</span>
        <span class="text-xs font-semibold px-2.5 py-1 bg-muted text-muted-foreground rounded-none">MIT License</span>
      </div>
    </div>
  </section>
</template>
