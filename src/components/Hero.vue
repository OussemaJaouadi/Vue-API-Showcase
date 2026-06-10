<script setup lang="ts">
import { PhArrowSquareOut, PhGithubLogo, PhShieldCheck } from '@phosphor-icons/vue'
import FallingPattern from './ui/FallingPattern.vue'
</script>

<template>
  <section class="hero-section relative border-b border-border bg-background dot-grid overflow-hidden animate-section scroll-mt-24" style="animation-delay: 0s">
    <FallingPattern
      class="falling-pattern-hero"
      color="oklch(0.508 0.118 165.612 / 0.38)"
      background-color="transparent"
      :duration="90"
      blur-intensity="0.3rem"
      :density="1.25"
      :opacity="1"
    />
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

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
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
            Explore Features
            <PhArrowSquareOut :size="18" weight="bold" />
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
