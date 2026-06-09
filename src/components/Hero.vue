<script setup lang="ts">
import { PhArrowSquareOut, PhGithubLogo, PhShieldCheck, PhCode, PhRocket, PhLightning, PhDatabase } from '@phosphor-icons/vue'
</script>

<template>
  <section class="relative border-b border-border bg-background dot-grid overflow-hidden animate-section scroll-mt-24" style="animation-delay: 0s">
    <div class="traffic-pattern"></div>
    <div class="container max-w-5xl px-4 mx-auto py-20 md:py-28 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-primary mb-6 border border-primary/20 bg-primary/5 px-3 py-1.5">
          <PhShieldCheck :size="14" weight="bold" />
          Self-hosted API workbench
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.08]">
          Vue API <span class="text-primary">Workbench</span>
        </h1>

        <p class="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          Self-hosted API workbench built with Nuxt 4 and Go.
          Manage workspaces, collections, environments, and execute
          proxied HTTP and WebSocket requests from a browser UI.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="https://github.com/OussemaJaouadi/Vue-API"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-tactile-primary px-6 py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2.5"
          >
            <PhGithubLogo :size="20" weight="bold" />
            View on GitHub
          </a>
          <a
            href="#features"
            class="btn-tactile-muted px-6 py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2.5"
          >
            Explore Features ▸
            <PhArrowSquareOut :size="18" weight="bold" />
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <!-- Go -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/25 bg-primary/[0.04] text-xs font-extrabold text-foreground hover:border-primary/50 transition-colors cursor-default">
            <PhCode :size="14" weight="bold" class="text-primary" />
            Go 1.25+
          </span>
          <!-- Nuxt -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[oklch(0.6_0.15_160)]/20 bg-[oklch(0.5_0.12_165)]/[0.04] text-xs font-extrabold text-foreground hover:border-[oklch(0.6_0.15_160)]/50 transition-colors cursor-default">
            <PhRocket :size="14" weight="bold" class="text-primary" />
            Nuxt 4
          </span>
          <!-- Bun -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[oklch(0.65_0.18_70)]/20 bg-[oklch(0.65_0.18_70)]/[0.04] text-xs font-extrabold text-foreground hover:border-[oklch(0.65_0.18_70)]/50 transition-colors cursor-default">
            <PhLightning :size="14" weight="bold" class="text-[oklch(0.65_0.18_70)]" />
            Bun 1.3
          </span>
          <!-- SQLite -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/20 bg-primary/[0.04] text-xs font-extrabold text-foreground hover:border-primary/50 transition-colors cursor-default">
            <PhDatabase :size="14" weight="bold" class="text-primary" />
            SQLite
          </span>
          <!-- MIT -->
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/25 bg-primary/[0.04] text-xs font-extrabold text-primary hover:border-primary/50 transition-colors cursor-default">
            <PhShieldCheck :size="14" weight="bold" />
            MIT License
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
