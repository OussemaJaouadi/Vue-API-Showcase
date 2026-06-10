<script setup lang="ts">
import {
  PhClockCounterClockwise,
  PhCode,
  PhFingerprint,
  PhKey,
  PhPaperPlaneTilt,
  PhPuzzlePiece,
  PhShieldCheck,
  PhSwap,
  PhUsersFour,
  PhBracketsCurly,
  PhWebhooksLogo
} from '@phosphor-icons/vue'
import SectionHeader from './SectionHeader.vue'
import SectionShell from './SectionShell.vue'
import FallingPattern from './ui/FallingPattern.vue'

interface FeatureItem {
  title: string
  description: string
  icon: any
}

interface FeatureGroup {
  title: string
  summary: string
  icon: any
  accent: string
  items: FeatureItem[]
}

const groups: FeatureGroup[] = [
  {
    title: 'Build requests',
    summary: 'Stop switching between editors, auth configs, and environment files. Compose everything in one surface before the request crosses the network boundary.',
    icon: PhPuzzlePiece,
    accent: 'oklch(0.55 0.16 250)',
    items: [
      {
        title: 'Request Editor',
        description: 'Full-featured editor powered by CodeMirror. Set method, URL, query params, headers, and body with syntax highlighting for JSON, XML, HTML, and YAML.',
        icon: PhCode
      },
      {
        title: 'Auth Profiles',
        description: 'Bearer token, Basic auth, API key, OAuth2 client credentials, and OIDC — with token sync for refresh-token and client-credentials grants.',
        icon: PhKey
      },
      {
        title: 'Environment Variables',
        description: 'Per-workspace environments with typed variables and secrets. Collection-level environment policies control which variables apply.',
        icon: PhBracketsCurly
      }
    ]
  },
  {
    title: 'Execute safely',
    summary: 'Direct browser-to-API calls leak credentials and bypass audit. Route every request through the Go proxy so execution is recorded, timed, and controlled.',
    icon: PhShieldCheck,
    accent: 'oklch(0.508 0.118 165.612)',
    items: [
      {
        title: 'HTTP Execution Proxy',
        description: 'Requests execute through the backend, capturing status code, headers, response body, size, duration, and time-to-first-byte (TTFB).',
        icon: PhPaperPlaneTilt
      },
      {
        title: 'WebSocket Relay',
        description: 'Bidirectional WebSocket proxy with a real-time event timeline. Send messages and receive responses through the backend relay.',
        icon: PhWebhooksLogo
      },
      {
        title: 'Execution History',
        description: 'Every execution is persisted with full request and response snapshots, method, URL, timing, and status — searchable per request.',
        icon: PhClockCounterClockwise
      }
    ]
  },
  {
    title: 'Organize teams',
    summary: 'Without workspace boundaries, shared API collections become credential spreadsheets. Isolate teams, imports, and auth into scoped workspaces.',
    icon: PhUsersFour,
    accent: 'oklch(0.58 0.16 305)',
    items: [
      {
        title: 'Workspaces',
        description: 'Isolated spaces with membership roles — admin, developer, tester — and per-resource grants for fine-grained access control.',
        icon: PhUsersFour
      },
      {
        title: 'Import & Export',
        description: 'Import from native Workbench JSON, OpenAPI 3.x, Swagger 2.x, or Postman v2.1. Preview before importing, export single collections or entire workspaces.',
        icon: PhSwap
      },
      {
        title: 'Authentication',
        description: 'JWT access and refresh tokens with separate secrets, Argon2id password hashing, HttpOnly refresh cookies, and token version invalidation for forced logout.',
        icon: PhFingerprint
      }
    ]
  }
]
</script>

<template>
  <SectionShell id="features" tone="muted">
    <template #background>
      <FallingPattern
        class="falling-pattern-section"
        color="oklch(0.508 0.118 165.612 / 0.14)"
        background-color="transparent"
        :duration="170"
        blur-intensity="0"
        :density="1.55"
        :opacity="0.28"
      />
    </template>
    <SectionHeader
      kicker="Features"
      title="Three workflows, one backend boundary."
      body="The feature set reads better as how the workbench is used: build requests, execute them safely, and organize the team context around them."
    />

      <div class="grid lg:grid-cols-3 gap-5">
        <article
          v-for="group in groups"
          :key="group.title"
          class="surface-tactile p-5 flex flex-col hover:-translate-y-1 hover:border-primary/40 group"
          :style="{
            boxShadow: `4px 4px 0 0 color-mix(in oklch, ${group.accent} 15%, transparent)`
          }"
        >
          <div class="flex items-start gap-3 mb-5">
            <div
              class="p-2.5 border"
              :style="{
                color: group.accent,
                borderColor: `color-mix(in oklch, ${group.accent} 28%, transparent)`,
                backgroundColor: `color-mix(in oklch, ${group.accent} 7%, transparent)`
              }"
            >
              <component :is="group.icon" :size="24" weight="bold" />
            </div>
            <div>
              <h3 class="text-xl font-bold font-heading text-foreground mb-2">{{ group.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ group.summary }}</p>
            </div>
          </div>

          <div class="grid gap-3">
            <div
              v-for="item in group.items"
              :key="item.title"
              class="surface-flat p-3 transition-colors group-hover:border-primary/20"
            >
              <div class="flex items-center gap-2 mb-2">
                <component
                  :is="item.icon"
                  :size="17"
                  weight="bold"
                  class="shrink-0"
                  :style="{ color: group.accent }"
                />
                <h4 class="font-heading font-bold text-sm text-foreground">{{ item.title }}</h4>
              </div>
              <p class="text-xs leading-relaxed text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </article>
      </div>
  </SectionShell>
</template>
