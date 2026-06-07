<script setup lang="ts">
import { 
  PhUsersFour, 
  PhCode, 
  PhKey, 
  PhPaperPlaneTilt, 
  PhBroadcast, 
  PhSwap, 
  PhClockCounterClockwise, 
  PhTreeStructure, 
  PhFingerprint 
} from '@phosphor-icons/vue'

interface Feature {
  title: string
  description: string
  icon: any
}

const features: Feature[] = [
  {
    title: 'Workspaces',
    description: 'Isolated spaces with membership roles — admin, developer, tester — and per-resource grants for fine-grained access control.',
    icon: PhUsersFour
  },
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
    title: 'HTTP Execution Proxy',
    description: 'Requests execute through the backend, capturing status code, headers, response body, size, duration, and time-to-first-byte (TTFB).',
    icon: PhPaperPlaneTilt
  },
  {
    title: 'WebSocket Relay',
    description: 'Bidirectional WebSocket proxy with a real-time event timeline. Send messages and receive responses through the backend relay.',
    icon: PhBroadcast
  },
  {
    title: 'Import & Export',
    description: 'Import from native Workbench JSON, OpenAPI 3.x, Swagger 2.x, or Postman v2.1. Preview before importing, export single collections or entire workspaces.',
    icon: PhSwap
  },
  {
    title: 'Execution History',
    description: 'Every execution is persisted with full request and response snapshots, method, URL, timing, and status — searchable per request.',
    icon: PhClockCounterClockwise
  },
  {
    title: 'Environment Variables',
    description: 'Per-workspace environments with typed variables and secrets. Collection-level environment policies control which variables apply.',
    icon: PhTreeStructure
  },
  {
    title: 'Authentication',
    description: 'JWT access and refresh tokens with separate secrets, Argon2id password hashing, HttpOnly refresh cookies, and token version invalidation for forced logout.',
    icon: PhFingerprint
  }
]
</script>

<template>
  <section class="py-10 md:py-16 border-b border-border bg-muted">
    <div class="container max-w-6xl px-4 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">Features</h2>
        <div class="h-1 w-12 bg-primary mx-auto"></div>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="card-workbench p-5 bg-card rounded-none hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left"
        >
          <!-- Icon block -->
          <div class="p-3 bg-primary/5 border border-primary/20 text-primary rounded-none mb-4">
            <component :is="feature.icon" :size="24" weight="bold" />
          </div>
          
          <!-- Title -->
          <h3 class="text-xl font-bold text-foreground mb-3 font-heading">{{ feature.title }}</h3>
          
          <!-- Description -->
          <p class="text-muted-foreground text-sm leading-relaxed grow">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
