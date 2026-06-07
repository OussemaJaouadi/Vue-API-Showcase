<script setup lang="ts">
import { ref } from 'vue'
import { PhCheck, PhCopy, PhTerminalWindow } from '@phosphor-icons/vue'

const codeString = `git clone https://github.com/OussemaJaouadi/Vue-API && cd vue-api
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
openssl rand -hex 32  # → JWT_ACCESS_SECRET
openssl rand -hex 32  # → JWT_REFRESH_SECRET
openssl rand -hex 32  # → PASSWORD_PEPPER
task db:generate && task db:plan && task db:migrate
task backend:dev & task frontend:dev`

const commandLines = codeString.split('\n').map((line) => {
  const commentIndex = line.indexOf('#')
  const command = commentIndex >= 0 ? line.slice(0, commentIndex).trimEnd() : line
  const comment = commentIndex >= 0 ? line.slice(commentIndex) : ''
  const [binary = '', ...rest] = command.split(' ')

  return {
    binary,
    rest: rest.join(' '),
    comment
  }
})

const isCopied = ref(false)

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(codeString)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>

<template>
  <section id="quick-start" class="py-12 md:py-16 border-b border-border bg-background">
    <div class="container max-w-5xl px-4 mx-auto">
      <div class="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 items-start">
        <div>
          <div class="section-kicker mb-3">Get Started</div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Clone, configure, migrate, run.
          </h2>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">http://localhost:3000</a> — register the first account
            (becomes global manager), create a workspace, and start using
            the workbench.
          </p>
          <div class="surface-flat p-3 mt-4">
            <div class="text-xs font-black uppercase text-muted-foreground mb-1">Repository</div>
            <a
              href="https://github.com/OussemaJaouadi/Vue-API"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-sm font-bold text-primary hover:underline break-all"
            >
              github.com/OussemaJaouadi/Vue-API
            </a>
          </div>
        </div>

        <div class="surface-tactile overflow-hidden">
          <div class="flex items-center justify-between gap-4 px-4 py-3 border-b border-border bg-muted/30">
            <div class="flex items-center gap-2 text-sm font-heading font-bold text-foreground">
              <PhTerminalWindow :size="18" weight="bold" class="text-primary" />
              bash
            </div>
            <button
              @click="copyCode"
              class="btn-tactile-muted p-2 inline-flex items-center justify-center cursor-pointer"
              title="Copy command to clipboard"
              aria-label="Copy quick start commands"
            >
              <PhCheck v-if="isCopied" :size="16" weight="bold" class="text-primary" />
              <PhCopy v-else :size="16" weight="bold" />
            </button>
          </div>

          <pre class="p-4 md:p-5 overflow-x-auto text-left font-mono text-xs md:text-sm leading-relaxed whitespace-pre bg-card"><code><span
            v-for="(line, index) in commandLines"
            :key="`${line.binary}-${index}`"
            class="block"
          ><span class="text-primary font-bold">{{ line.binary }}</span><span v-if="line.rest" class="text-foreground"> {{ line.rest }}</span><span v-if="line.comment" class="text-muted-foreground">  {{ line.comment }}</span></span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
