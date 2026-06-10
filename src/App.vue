<script setup lang="ts">
import logoMark from './assets/logo-mark.png'
import ThemeToggle from './components/ThemeToggle.vue'
import Hero from './components/Hero.vue'
import Architecture from './components/Architecture.vue'
import FeatureCards from './components/FeatureCards.vue'
import Screenshots from './components/Screenshots.vue'
import TechStack from './components/TechStack.vue'
import QuickStart from './components/QuickStart.vue'
import Footer from './components/Footer.vue'

const navLinks = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Features', href: '#features' },
  { label: 'Setup', href: '#quick-start' }
]
</script>

<template>
  <div class="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div class="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo and brand name -->
        <a href="#" class="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img :src="logoMark" alt="Logo" class="w-8 h-8 object-contain" />
          <span class="font-bold tracking-tight text-base sm:text-lg font-heading">
            Vue API <span class="text-primary">Workbench</span>
          </span>
        </a>

        <!-- Header actions -->
        <nav class="flex items-center gap-3 sm:gap-4">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            {{ link.label }}
          </a>
          <a
            href="https://github.com/OussemaJaouadi/Vue-API"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex btn-tactile-muted px-3 py-1.5 text-xs font-bold"
          >
            GitHub
          </a>
          
          <div class="h-4 w-px bg-border"></div>
          
          <!-- Theme Toggle Component -->
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="grow">
      <!-- 1. Hero Section -->
      <Hero />

      <!-- 2. Architecture Section -->
      <Architecture />

      <!-- 3. Feature Workflows -->
      <FeatureCards />

      <!-- 4. Screenshot Slots -->
      <Screenshots />

      <!-- 5. Tech Stack -->
      <TechStack />

      <!-- 6. Quick Start Guide -->
      <QuickStart />
    </main>

    <!-- 7. Footer -->
    <Footer />
  </div>
</template>

<style>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
