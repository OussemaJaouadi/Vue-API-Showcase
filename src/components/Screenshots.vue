<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { PhBracketsCurly, PhEye, PhMoon, PhTreeStructure, PhWrench, PhX } from '@phosphor-icons/vue'
import SectionHeader from './SectionHeader.vue'
import SectionShell from './SectionShell.vue'
import FallingPattern from './ui/FallingPattern.vue'
import accessPolicyImage from '../assets/screenshots/access-policy.png'
import collectionsBrowserImage from '../assets/screenshots/collections-browser.png'
import environmentDrawerImage from '../assets/screenshots/environment-drawer.png'
import settingsAppearanceImage from '../assets/screenshots/settings-appearance.png'
import settingsLayoutImage from '../assets/screenshots/settings-layout.png'
import workspaceManagementImage from '../assets/screenshots/workspace-management.png'
import workbenchEditorImage from '../assets/screenshots/workbench-editor.png'

const screenshots = [
  {
    title: 'Workbench Editor',
    caption: 'Workbench Editor — build and execute requests with live response inspection.',
    icon: PhWrench,
    primary: true,
    accent: 'oklch(0.508 0.118 165.612)',
    image: workbenchEditorImage
  },
  {
    title: 'Collections Browser',
    caption: 'Collections Browser — organize collections, requests, policy constraints, and execution safety.',
    icon: PhTreeStructure,
    accent: 'oklch(0.55 0.16 250)',
    image: collectionsBrowserImage
  },
  {
    title: 'Environment Drawer',
    caption: 'Environment Drawer — create scoped variables with visibility tiers and inherited defaults.',
    icon: PhBracketsCurly,
    accent: 'oklch(0.58 0.16 305)',
    image: environmentDrawerImage
  },
  {
    title: 'Access Policy',
    caption: 'Access Policy — inspect grants, denied resources, and execution gaps per workspace member.',
    icon: PhMoon,
    accent: 'oklch(0.62 0.15 55)',
    image: accessPolicyImage
  },
  {
    title: 'Workspace Control',
    caption: 'Workspace Control — rename, inspect access, and manage destructive workspace actions.',
    icon: PhTreeStructure,
    accent: 'oklch(0.56 0.16 25)',
    image: workspaceManagementImage
  },
  {
    title: 'Settings Layout',
    caption: 'Settings Layout — tune theme, response placement, sidebar width, and editor sizing.',
    icon: PhMoon,
    accent: 'oklch(0.5 0.13 185)',
    image: settingsLayoutImage
  },
  {
    title: 'Settings Appearance',
    caption: 'Settings Appearance — switch themes and local workbench layout preferences.',
    icon: PhMoon,
    accent: 'oklch(0.58 0.12 120)',
    image: settingsAppearanceImage
  }
]

type Screenshot = typeof screenshots[number]

const selectedScreenshot = ref<Screenshot | null>(null)
const featuredScreenshot = computed(() => screenshots.find((item) => item.primary) ?? screenshots[0])
const galleryScreenshots = computed(() => screenshots.filter((item) => item !== featuredScreenshot.value))

const openPreview = (shot: Screenshot) => {
  selectedScreenshot.value = shot
}

const closePreview = () => {
  selectedScreenshot.value = null
}

const handlePreviewKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closePreview()
}

watch(selectedScreenshot, (shot) => {
  if (shot) {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handlePreviewKeydown)
    return
  }

  document.body.style.overflow = ''
  window.removeEventListener('keydown', handlePreviewKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handlePreviewKeydown)
})
</script>

<template>
  <SectionShell id="screenshots">
    <template #background>
      <FallingPattern
        class="falling-pattern-section"
        color="oklch(0.508 0.118 165.612 / 0.1)"
        background-color="transparent"
        :duration="190"
        blur-intensity="0"
        :density="1.7"
        :opacity="0.18"
      />
    </template>
    <SectionHeader
      kicker="Product Preview"
      title="See the workbench in action."
      body="Actual screens from the workbench: request execution, collections, scoped environments, access policy, and local layout controls."
    />

      <div class="grid gap-5">
        <article
          class="surface-tactile p-4 md:p-5"
          :style="{ boxShadow: `4px 4px 0 0 color-mix(in oklch, ${featuredScreenshot.accent} 15%, transparent)` }"
        >
          <div
            class="screenshot-slot p-4 md:p-5"
            :style="{
              borderColor: `color-mix(in oklch, ${featuredScreenshot.accent} 34%, transparent)`,
              backgroundColor: `color-mix(in oklch, ${featuredScreenshot.accent} 6%, transparent)`
            }"
          >
            <div class="h-full bg-card border border-border shadow-sm flex flex-col overflow-hidden">
              <div class="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/35 shrink-0">
                <div class="flex items-center gap-1.5">
                  <span class="size-2 rounded-full bg-red-400/80"></span>
                  <span class="size-2 rounded-full bg-amber-400/80"></span>
                  <span class="size-2 rounded-full bg-emerald-400/80"></span>
                </div>
                <div class="text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">{{ featuredScreenshot.title }}</div>
              </div>
              <div class="relative aspect-[16/8] bg-background group">
                <img
                  :src="featuredScreenshot.image"
                  :alt="`${featuredScreenshot.title} screenshot`"
                  class="absolute inset-0 size-full object-cover object-top"
                  loading="lazy"
                />
                <div class="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
                <button
                  type="button"
                  class="absolute right-3 top-3 size-9 border border-border bg-card/90 backdrop-blur inline-flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  :aria-label="`Preview ${featuredScreenshot.title}`"
                  @click="openPreview(featuredScreenshot)"
                >
                  <PhEye :size="18" weight="bold" />
                </button>
              </div>
            </div>
          </div>
          <p class="mt-4 text-sm text-muted-foreground leading-relaxed">{{ featuredScreenshot.caption }}</p>
        </article>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="shot in galleryScreenshots"
          :key="shot.title"
          class="surface-flat p-4"
          :style="{ boxShadow: `3px 3px 0 0 color-mix(in oklch, ${shot.accent} 12%, transparent)` }"
        >
            <div
              class="screenshot-slot p-3 mb-4"
              :style="{
                borderColor: `color-mix(in oklch, ${shot.accent} 32%, transparent)`,
                backgroundColor: `color-mix(in oklch, ${shot.accent} 5%, transparent)`
              }"
            >
              <div class="relative aspect-[16/9] border border-border bg-card overflow-hidden group">
                <img
                  :src="shot.image"
                  :alt="`${shot.title} screenshot`"
                  class="absolute inset-0 size-full object-cover object-top"
                  loading="lazy"
                />
                <button
                  type="button"
                  class="absolute right-2 top-2 size-8 border border-border bg-card/90 backdrop-blur inline-flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  :aria-label="`Preview ${shot.title}`"
                  @click="openPreview(shot)"
                >
                  <PhEye :size="16" weight="bold" />
                </button>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-1">
              <component :is="shot.icon" :size="16" weight="bold" :style="{ color: shot.accent }" />
              <h3 class="font-heading font-bold text-sm text-foreground">{{ shot.title }}</h3>
            </div>
            <p class="text-xs text-muted-foreground leading-relaxed">{{ shot.caption }}</p>
          </article>
        </div>
      </div>

      <Teleport to="body">
        <div
          v-if="selectedScreenshot"
          class="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          @click.self="closePreview"
        >
          <div class="w-full max-w-7xl max-h-[92vh] surface-tactile p-3 md:p-4 overflow-hidden">
            <div class="flex items-center justify-between gap-4 pb-3 border-b border-border">
              <div>
                <div class="section-kicker mb-1">Preview</div>
                <h3 class="font-heading font-bold text-foreground">{{ selectedScreenshot.title }}</h3>
              </div>
              <button
                type="button"
                class="btn-tactile-muted p-2 inline-flex items-center justify-center"
                aria-label="Close preview"
                @click="closePreview"
              >
                <PhX :size="18" weight="bold" />
              </button>
            </div>
            <div class="mt-3 max-h-[78vh] overflow-auto bg-background border border-border">
              <img
                :src="selectedScreenshot.image"
                :alt="`${selectedScreenshot.title} screenshot preview`"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Teleport>
  </SectionShell>
</template>
