<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  body?: string
  mode?: 'split' | 'stack'
}>()
</script>

<template>
  <div
    class="gap-4 mb-8"
    :class="mode === 'stack' ? 'flex flex-col' : 'flex flex-col md:flex-row md:items-end md:justify-between'"
  >
    <div>
      <div class="section-kicker mb-3">{{ kicker }}</div>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {{ title }}
      </h2>
    </div>
    <p v-if="body" class="text-sm text-muted-foreground max-w-xl leading-relaxed">
      {{ body }}
    </p>
  </div>
</template>
