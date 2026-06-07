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

interface FeatureItem {
  title: string
  description: string
  icon: any
}

interface FeatureGroup {
  title: string
  summary: string
  icon: any
  items: FeatureItem[]
}

const groups: FeatureGroup[] = [
  {
    title: 'Build requests',
    summary: 'Compose requests with editor, auth, and environment context before they hit the backend boundary.',
    icon: PhPuzzlePiece,
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
    summary: 'Route HTTP and WebSocket traffic through the Go backend while preserving timing and response evidence.',
    icon: PhShieldCheck,
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
    summary: 'Keep collections, access rules, imports, and authentication inside a workspace-aware operating model.',
    icon: PhUsersFour,
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
  <section id="features" class="py-12 md:py-16 border-b border-border bg-muted">
    <div class="container max-w-6xl px-4 mx-auto">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <div class="section-kicker mb-3">Features</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Three workflows, one backend boundary.
          </h2>
        </div>
        <p class="text-sm text-muted-foreground max-w-xl leading-relaxed">
          The feature set reads better as how the workbench is used: build requests, execute them safely, and organize the team context around them.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-5">
        <article
          v-for="group in groups"
          :key="group.title"
          class="surface-tactile p-5 flex flex-col"
        >
          <div class="flex items-start gap-3 mb-5">
            <div class="p-2.5 border border-primary/25 bg-primary/5 text-primary">
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
              class="surface-flat p-3"
            >
              <div class="flex items-center gap-2 mb-2">
                <component :is="item.icon" :size="17" weight="bold" class="text-primary shrink-0" />
                <h4 class="font-heading font-bold text-sm text-foreground">{{ item.title }}</h4>
              </div>
              <p class="text-xs leading-relaxed text-muted-foreground">{{ item.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
