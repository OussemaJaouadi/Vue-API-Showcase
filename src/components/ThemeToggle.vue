<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PhSun, PhMoon } from '@phosphor-icons/vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Check localStorage, then fallback to preferred scheme (defaulting to dark as requested)
  const savedTheme = localStorage.getItem('theme')
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  
  if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  // Handle reduce motion checking
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="btn-tactile-muted p-2 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    aria-label="Toggle theme"
  >
    <PhSun v-if="isDark" :size="20" weight="bold" />
    <PhMoon v-else :size="20" weight="bold" />
  </button>
</template>
