<script setup lang="ts">
import {
  PhBroadcast,
  PhDatabase,
  PhGlobe,
  PhLockKey,
  PhShieldCheck,
  PhSwap,
  PhTerminalWindow,
  PhUsersFour,
  PhWebhooksLogo
} from '@phosphor-icons/vue'

const proofPoints = [
  {
    title: 'JWT + HttpOnly refresh',
    description: 'Access and refresh tokens with separate secrets and browser-safe refresh cookies.',
    icon: PhLockKey
  },
  {
    title: 'Argon2id invalidation',
    description: 'Password hashing, pepper support, and token version invalidation for forced logout.',
    icon: PhShieldCheck
  },
  {
    title: 'Workspace grants',
    description: 'Membership roles and per-resource grants for team-scoped access control.',
    icon: PhUsersFour
  },
  {
    title: 'Import/export formats',
    description: 'Workbench JSON, OpenAPI 3.x, Swagger 2.x, and Postman v2.1 support.',
    icon: PhSwap
  },
  {
    title: 'Persisted history',
    description: 'Full request and response snapshots with method, URL, status, and timing.',
    icon: PhDatabase
  },
  {
    title: 'SSE + WebSocket relay',
    description: 'Single-use SSE tickets and backend-mediated bidirectional WebSocket traffic.',
    icon: PhBroadcast
  }
]
</script>

<template>
  <section id="architecture" class="relative py-12 md:py-16 border-b border-border bg-background overflow-hidden animate-section scroll-mt-24">
    <div class="traffic-pattern traffic-pattern-muted"></div>
    <div class="container max-w-6xl px-4 mx-auto relative z-10">
      <div class="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start mb-14">
        <div>
          <div class="section-kicker mb-3">Architecture</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The browser never connects directly to target APIs.
          </h2>
          <p class="text-muted-foreground text-base md:text-lg leading-relaxed">
            All request execution and WebSocket traffic flows through a Go backend proxy,
            isolating the network boundary. An SSE broker with single-use
            tickets delivers real-time events to the frontend.
          </p>
        </div>

        <div class="surface-tactile p-4 md:p-5 overflow-x-auto">
          <div class="min-w-[680px]">
            <!-- Frontend zone -->
            <div class="relative border border-dashed border-muted/50 p-3 pb-4">
              <span class="absolute -top-2.5 left-3 bg-card px-1.5 text-[11px] font-black uppercase text-muted-foreground tracking-wider">Frontend</span>
              <div class="flex items-center justify-center gap-2">
                <div class="flex flex-col items-center gap-1.5 p-3 border-2 border-border bg-card min-w-[110px] text-center">
                  <PhGlobe :size="22" weight="bold" class="text-primary" />
                  <span class="text-xs font-bold font-heading text-foreground">Browser UI</span>
                  <span class="text-[11px] text-muted-foreground leading-tight">Vue / Nuxt</span>
                </div>
                <span class="text-muted-foreground font-bold text-xl">→</span>
                <div class="flex flex-col items-center gap-1.5 p-3 border-2 border-border bg-card min-w-[90px] text-center">
                  <PhTerminalWindow :size="22" weight="bold" class="text-foreground" />
                  <span class="text-xs font-bold font-heading text-foreground">Nitro</span>
                  <span class="text-[11px] text-muted-foreground leading-tight">Runtime boundary</span>
                </div>
                <span class="text-muted-foreground font-bold text-xl">→</span>
              </div>
            </div>

            <div class="flex justify-center py-2" aria-hidden="true">
              <div class="flex flex-col items-center text-primary/70">
                <div class="h-5 w-px bg-primary/35"></div>
                <div class="text-lg leading-none">↓</div>
              </div>
            </div>

            <!-- Backend zone -->
            <div class="relative border border-dashed border-primary/25 bg-primary/[0.015] p-3">
              <span class="absolute -top-2.5 left-3 bg-card px-1.5 text-[11px] font-black uppercase text-primary tracking-wider">Backend</span>

              <!-- Proxy (hero node) -->
              <div class="flex justify-center mb-4">
                <div class="flex flex-col items-center gap-1.5 p-3.5 border-2 border-primary bg-primary/5 min-w-[140px] text-center relative">
                  <PhShieldCheck :size="24" weight="bold" class="text-primary" />
                  <span class="text-sm font-bold font-heading text-primary">Go Backend Proxy</span>
                  <span class="text-[11px] text-muted-foreground leading-tight">HTTP exec · WS relay · Auth · History</span>
                </div>
              </div>

              <!-- Downstream services -->
              <div class="flex items-center justify-center gap-3">
                <div class="flex flex-col items-center gap-1 p-2.5 border border-border bg-card min-w-[90px] text-center">
                  <PhDatabase :size="16" weight="bold" class="text-primary" />
                  <span class="text-xs font-bold font-heading text-foreground">SQLite</span>
                  <span class="text-[10px] text-muted-foreground leading-tight">Persistence</span>
                </div>
                <div class="text-muted-foreground font-bold text-lg">→</div>
                <div class="flex flex-col items-center gap-1 p-2.5 border border-border bg-card min-w-[90px] text-center">
                  <PhBroadcast :size="16" weight="bold" class="text-primary" />
                  <span class="text-xs font-bold font-heading text-foreground">SSE Broker</span>
                  <span class="text-[10px] text-muted-foreground leading-tight">Real-time events</span>
                </div>
                <div class="text-muted-foreground font-bold text-lg">↔</div>
                <div class="flex flex-col items-center gap-1 p-2.5 border border-border bg-card min-w-[90px] text-center">
                  <PhWebhooksLogo :size="16" weight="bold" class="text-primary" />
                  <span class="text-xs font-bold font-heading text-foreground">Target APIs</span>
                  <span class="text-[10px] text-muted-foreground leading-tight">HTTP / WS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="credibility" class="pt-3">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
          <div>
            <div class="section-kicker mb-3">Engineering proof</div>
            <h3 class="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Built like an internal tool you can operate.
            </h3>
          </div>
          <p class="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Compact proof points from the auth, team, import/export, history, and realtime layers.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="point in proofPoints"
            :key="point.title"
            class="card-workbench p-4 hover:border-primary/50 transition-all group"
          >
            <div class="flex items-start gap-3">
              <div class="shrink-0 w-9 h-9 border border-primary/25 bg-primary/5 text-primary inline-flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <component :is="point.icon" :size="18" weight="bold" />
              </div>
              <div>
                <h4 class="font-heading font-bold text-sm text-foreground mb-1">{{ point.title }}</h4>
                <p class="text-xs text-muted-foreground leading-relaxed">{{ point.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
