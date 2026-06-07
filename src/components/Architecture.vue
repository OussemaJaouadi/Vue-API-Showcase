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
  <section id="architecture" class="py-12 md:py-16 border-b border-border bg-background">
    <div class="container max-w-6xl px-4 mx-auto">
      <div class="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start mb-10">
        <div>
          <div class="section-kicker mb-3">Architecture</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The browser never connects directly to target APIs.
          </h2>
          <p class="text-muted-foreground text-base md:text-lg leading-relaxed">
            The browser never connects directly to target APIs. All request
            execution and WebSocket traffic flows through a Go backend proxy,
            isolating the network boundary. An SSE broker with single-use
            tickets delivers real-time events to the frontend.
          </p>
        </div>

        <div class="surface-tactile p-4 md:p-5 overflow-x-auto">
          <div class="min-w-[720px]">
            <div class="grid grid-cols-[1fr_auto_1fr_auto_1.15fr] gap-3 items-center">
              <div class="diagram-node">
                <div class="flex items-center gap-2 text-primary mb-2">
                  <PhGlobe :size="20" weight="bold" />
                  <span class="text-xs font-black uppercase">Browser UI</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Vue/Nuxt interface for requests, collections, environments, and response inspection.
                </p>
              </div>

              <div class="text-muted-foreground font-bold">→</div>

              <div class="diagram-node">
                <div class="flex items-center gap-2 text-foreground mb-2">
                  <PhTerminalWindow :size="20" weight="bold" />
                  <span class="text-xs font-black uppercase">Nitro</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Frontend runtime boundary before backend request execution.
                </p>
              </div>

              <div class="text-muted-foreground font-bold">→</div>

              <div class="diagram-node border-primary/50 bg-primary/5">
                <div class="flex items-center gap-2 text-primary mb-2">
                  <PhShieldCheck :size="20" weight="bold" />
                  <span class="text-xs font-black uppercase">Go backend proxy</span>
                </div>
                <p class="text-xs text-muted-foreground leading-relaxed">
                  Executes HTTP requests, relays WebSockets, records history, and enforces auth context.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-[1fr_1fr_1fr] gap-3 mt-3">
              <div class="diagram-node">
                <div class="flex items-center gap-2 text-primary mb-2">
                  <PhDatabase :size="18" weight="bold" />
                  <span class="text-xs font-black uppercase">SQLite</span>
                </div>
                <p class="text-xs text-muted-foreground">Workspaces, collections, auth, environments, and execution history.</p>
              </div>

              <div class="diagram-node">
                <div class="flex items-center gap-2 text-primary mb-2">
                  <PhBroadcast :size="18" weight="bold" />
                  <span class="text-xs font-black uppercase">SSE broker</span>
                </div>
                <p class="text-xs text-muted-foreground">Single-use tickets stream real-time backend events to the frontend.</p>
              </div>

              <div class="diagram-node">
                <div class="flex items-center gap-2 text-primary mb-2">
                  <PhWebhooksLogo :size="18" weight="bold" />
                  <span class="text-xs font-black uppercase">Target APIs</span>
                </div>
                <p class="text-xs text-muted-foreground">HTTP and WebSocket destinations reached through the backend relay.</p>
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

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="point in proofPoints"
            :key="point.title"
            class="surface-flat p-4 hover:border-primary/40 transition-colors"
          >
            <component :is="point.icon" :size="22" weight="bold" class="text-primary mb-3" />
            <h4 class="font-heading font-bold text-foreground mb-2">{{ point.title }}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ point.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
