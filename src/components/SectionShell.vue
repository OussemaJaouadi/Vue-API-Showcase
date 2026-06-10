<script setup lang="ts">
import { computed } from 'vue'
import FallingPattern from './ui/FallingPattern.vue'
import { getSectionRain, type SectionRainLevel } from '../lib/sectionRain'

const props = withDefaults(defineProps<{
  id?: string
  tone?: 'background' | 'muted' | 'card'
  maxWidth?: '5xl' | '6xl'
  continuity?: boolean
  rain?: SectionRainLevel
}>(), {
  tone: 'background',
  maxWidth: '6xl',
  continuity: true
})

const toneClasses = {
  background: 'bg-background',
  muted: 'bg-muted',
  card: 'bg-card'
}

const maxWidthClasses = {
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl'
}

const fadeColors = {
  background: 'var(--background)',
  muted: 'var(--muted)',
  card: 'var(--card)'
}

const rainConfig = computed(() => (props.rain ? getSectionRain(props.rain) : null))
</script>

<template>
  <section
    :id="props.id"
    class="section-shell relative py-12 md:py-16 border-b border-border overflow-hidden animate-section scroll-mt-24"
    :class="[toneClasses[props.tone], { 'section-shell-continuity': props.continuity }]"
    :style="{ '--section-fade-color': fadeColors[props.tone] }"
  >
    <FallingPattern
      v-if="rainConfig"
      :class="rainConfig.className"
      :color="rainConfig.color"
      background-color="transparent"
      :duration="rainConfig.duration"
      :blur-intensity="rainConfig.blurIntensity"
      :density="rainConfig.density"
      :opacity="rainConfig.opacity"
    />
    <slot name="background" />
    <div class="container px-4 mx-auto relative z-10" :class="maxWidthClasses[props.maxWidth]">
      <slot />
    </div>
  </section>
</template>
