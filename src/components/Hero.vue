<script setup lang="ts">
import { PhArrowSquareOut, PhGithubLogo, PhShieldCheck } from '@phosphor-icons/vue'
</script>

<template>
  <section class="relative border-b border-border bg-background dot-grid overflow-hidden">
    <div class="traffic-pattern"></div>
    <div class="container max-w-6xl px-4 mx-auto py-12 md:py-16 relative z-10">
      <div class="grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-center">
        <div class="text-left">
          <div class="section-kicker mb-4">Self-hosted API workbench</div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            Vue API <span class="text-primary">Workbench</span>
          </h1>

          <p class="text-lg text-muted-foreground leading-relaxed mb-7 max-w-2xl">
            Self-hosted API workbench built with Nuxt 4 and Go.
            Manage workspaces, collections, environments, and execute
            proxied HTTP and WebSocket requests from a browser UI.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 mb-7">
            <a
              href="https://github.com/OussemaJaouadi/Vue-API"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-tactile-primary px-5 py-3 text-sm font-bold inline-flex items-center justify-center gap-2"
            >
              <PhGithubLogo :size="20" weight="bold" />
              View on GitHub
            </a>
            <a
              href="#screenshots"
              class="btn-tactile-muted px-5 py-3 text-sm font-bold inline-flex items-center justify-center gap-2"
            >
              View Demo ▸
              <PhArrowSquareOut :size="18" weight="bold" />
            </a>
          </div>

          <div class="surface-flat p-3 flex flex-wrap items-center gap-x-3 gap-y-2 max-w-xl">
            <span class="text-xs font-extrabold text-foreground">Go 1.25+</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-xs font-extrabold text-foreground">Nuxt 4</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-xs font-extrabold text-foreground">Bun 1.3</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-xs font-extrabold text-foreground">SQLite</span>
            <span class="text-muted-foreground/40">·</span>
            <span class="text-xs font-extrabold text-primary">MIT License</span>
          </div>
        </div>

        <div class="surface-tactile p-4 md:p-5">
          <div class="flex items-center justify-between gap-4 border-b border-border pb-3 mb-4">
            <div>
              <div class="section-kicker">Proxied execution</div>
              <div class="mt-1 font-heading font-bold text-foreground">Request surface placeholder</div>
            </div>
            <div class="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 border border-primary/20 px-2 py-1">
              <PhShieldCheck :size="14" weight="bold" />
              Go boundary
            </div>
          </div>

          <div class="grid gap-3">
            <div class="surface-flat p-3 flex flex-col sm:flex-row sm:items-center gap-3">
              <span class="text-xs font-black text-primary border border-primary/30 bg-primary/5 px-2 py-1">GET</span>
              <span class="font-mono text-sm text-foreground truncate">/api/workspaces/:id/requests</span>
              <span class="sm:ml-auto text-xs font-black text-primary">200 OK · 148 ms</span>
            </div>

            <div class="grid md:grid-cols-2 gap-3">
              <div class="surface-flat p-3 min-h-36">
                <div class="text-xs font-extrabold text-muted-foreground uppercase mb-3">Request composer</div>
                <div class="space-y-2 font-mono text-xs">
                  <div class="h-2.5 w-3/4 bg-primary/20"></div>
                  <div class="h-2.5 w-full bg-muted"></div>
                  <div class="h-2.5 w-5/6 bg-muted"></div>
                  <div class="h-2.5 w-2/3 bg-muted"></div>
                </div>
              </div>

              <div class="surface-flat p-3 min-h-36">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-extrabold text-muted-foreground uppercase">Response inspector</span>
                  <span class="text-[11px] font-black text-primary">TTFB 41 ms</span>
                </div>
                <div class="space-y-2 font-mono text-xs">
                  <div class="h-2.5 w-1/2 bg-primary/20"></div>
                  <div class="h-2.5 w-full bg-muted"></div>
                  <div class="h-2.5 w-4/5 bg-muted"></div>
                  <div class="h-2.5 w-3/5 bg-muted"></div>
                </div>
              </div>
            </div>

            <div class="surface-flat p-3 grid sm:grid-cols-3 gap-3 text-xs">
              <div>
                <div class="font-black text-foreground">Proxy</div>
                <div class="text-muted-foreground">Backend executes traffic</div>
              </div>
              <div>
                <div class="font-black text-foreground">Auth</div>
                <div class="text-muted-foreground">Profiles and tokens</div>
              </div>
              <div>
                <div class="font-black text-foreground">History</div>
                <div class="text-muted-foreground">Persisted snapshots</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
