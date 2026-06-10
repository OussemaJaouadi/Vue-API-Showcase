<script setup lang="ts">
import {
  PhBroadcast,
  PhDatabase,
  PhGlobe,
  PhShieldCheck,
  PhTerminalWindow,
  PhWebhooksLogo
} from '@phosphor-icons/vue'
import FallingPattern from './ui/FallingPattern.vue'
import { getSectionRain } from '../lib/sectionRain'

const rain = getSectionRain('high')

const flowNodes = [
  {
    zone: 'Client',
    title: 'Browser UI',
    detail: 'Vue / Nuxt',
    icon: PhGlobe,
    accent: 'oklch(0.55 0.16 250)'
  },
  {
    zone: 'Runtime',
    title: 'Nitro',
    detail: 'Frontend boundary',
    icon: PhTerminalWindow,
    accent: 'oklch(0.58 0.16 305)'
  },
  {
    zone: 'Backend',
    title: 'Go Backend Proxy',
    detail: 'Auth · HTTP exec · WS relay',
    icon: PhShieldCheck,
    accent: 'oklch(0.508 0.118 165.612)',
    primary: true
  }
]

const downstreamNodes = [
  {
    title: 'SQLite',
    detail: 'History + workspace data',
    icon: PhDatabase,
    accent: 'oklch(0.62 0.15 55)'
  },
  {
    title: 'SSE Broker',
    detail: 'Realtime events',
    icon: PhBroadcast,
    accent: 'oklch(0.5 0.13 185)'
  },
  {
    title: 'Target APIs',
    detail: 'HTTP / WebSocket',
    icon: PhWebhooksLogo,
    accent: 'oklch(0.58 0.16 305)'
  }
]
</script>

<template>
  <section id="architecture" class="section-shell-continuity relative py-12 md:py-16 border-b border-border bg-background overflow-hidden animate-section scroll-mt-24" style="--section-fade-color: var(--background)">
    <FallingPattern
      :class="rain.className"
      :color="rain.color"
      background-color="transparent"
      :duration="rain.duration"
      :blur-intensity="rain.blurIntensity"
      :density="rain.density"
      :opacity="rain.opacity"
    />
    <div class="container max-w-6xl px-4 mx-auto relative z-10">
      <div class="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start">
        <div>
          <div class="section-kicker mb-3">Architecture</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The browser never connects directly to target APIs.
          </h2>
          <p class="text-muted-foreground text-base md:text-lg leading-relaxed">
            All traffic flows through a Go backend proxy. An SSE broker with single-use tickets pushes realtime events to the frontend.
          </p>
        </div>

        <div class="surface-tactile p-4 md:p-5 overflow-hidden">
          <div class="flex items-center justify-between gap-3 mb-5">
            <div>
              <div class="text-xs font-black uppercase tracking-[0.1em] text-muted-foreground mb-1">Request path</div>
              <div class="font-heading font-bold text-foreground">Controlled network boundary</div>
            </div>
            <div class="hidden sm:block h-px flex-1 bg-border"></div>
            <div class="text-xs font-bold text-primary">Proxy first</div>
          </div>

          <div class="grid md:grid-cols-3 gap-3">
            <div
              v-for="(node, index) in flowNodes"
              :key="node.title"
              class="relative border bg-card p-4 min-h-[145px]"
              :class="node.primary ? 'border-primary/45' : 'border-border'"
              :style="{
                boxShadow: `3px 3px 0 0 color-mix(in oklch, ${node.accent} 14%, transparent)`,
                backgroundColor: node.primary ? `color-mix(in oklch, ${node.accent} 6%, var(--card))` : 'var(--card)'
              }"
            >
              <div class="flex items-start justify-between gap-3 mb-5">
                <div
                  class="size-10 border inline-flex items-center justify-center"
                  :style="{
                    color: node.accent,
                    borderColor: `color-mix(in oklch, ${node.accent} 32%, transparent)`,
                    backgroundColor: `color-mix(in oklch, ${node.accent} 8%, transparent)`
                  }"
                >
                  <component :is="node.icon" :size="21" weight="bold" />
                </div>
                <span class="text-[10px] font-black uppercase tracking-[0.1em] text-muted-foreground">{{ node.zone }}</span>
              </div>
              <h3 class="font-heading font-bold text-foreground mb-1">{{ node.title }}</h3>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ node.detail }}</p>
              <div
                v-if="index < flowNodes.length - 1"
                class="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border z-10"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div class="flex justify-center py-4" aria-hidden="true">
            <div class="h-8 w-px bg-primary/35"></div>
          </div>

          <div class="border border-dashed border-primary/25 bg-primary/[0.025] p-3 md:p-4">
            <div class="flex items-center justify-between gap-3 mb-3">
              <span class="text-xs font-black uppercase tracking-[0.1em] text-primary">Backend fan-out</span>
              <span class="text-xs text-muted-foreground">Persist · stream · relay</span>
            </div>
            <div class="grid sm:grid-cols-3 gap-3">
              <div
                v-for="node in downstreamNodes"
                :key="node.title"
                class="border border-border bg-card p-3"
                :style="{ boxShadow: `2px 2px 0 0 color-mix(in oklch, ${node.accent} 14%, transparent)` }"
              >
                <div class="flex items-center gap-2 mb-2">
                  <component :is="node.icon" :size="18" weight="bold" :style="{ color: node.accent }" />
                  <div class="font-heading font-bold text-sm text-foreground">{{ node.title }}</div>
                </div>
                <p class="text-[11px] leading-relaxed text-muted-foreground">{{ node.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
