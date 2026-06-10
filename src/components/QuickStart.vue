<script setup lang="ts">
import { ref } from 'vue'
import { PhCheck, PhCopy } from '@phosphor-icons/vue'
import SectionHeader from './SectionHeader.vue'
import SectionShell from './SectionShell.vue'

const codeString = `git clone https://github.com/OussemaJaouadi/Vue-API && cd vue-api
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
openssl rand -hex 32  # → JWT_ACCESS_SECRET
openssl rand -hex 32  # → JWT_REFRESH_SECRET
openssl rand -hex 32  # → PASSWORD_PEPPER
task db:generate && task db:plan && task db:migrate
task backend:dev & task frontend:dev`

type BashTokenKind = 'command' | 'operator' | 'option' | 'path' | 'url' | 'target' | 'number' | 'text' | 'space'

const commandNames = new Set(['git', 'cd', 'cp', 'openssl', 'task'])
const tokenClasses: Record<BashTokenKind, string> = {
  command: 'text-[oklch(0.55_0.16_250)] dark:text-[oklch(0.76_0.12_250)] font-bold',
  operator: 'text-[oklch(0.62_0.15_55)] dark:text-[oklch(0.82_0.13_65)] font-semibold',
  option: 'text-[oklch(0.58_0.16_305)] dark:text-[oklch(0.78_0.12_305)]',
  path: 'text-[oklch(0.5_0.12_185)] dark:text-[oklch(0.76_0.11_185)]',
  url: 'text-[oklch(0.5_0.15_225)] dark:text-[oklch(0.76_0.12_225)] underline decoration-current/25 underline-offset-2',
  target: 'text-[oklch(0.56_0.16_25)] dark:text-[oklch(0.78_0.12_25)]',
  number: 'text-[oklch(0.55_0.12_150)] dark:text-[oklch(0.75_0.1_150)]',
  text: 'text-foreground',
  space: ''
}

const commandLines = codeString.split('\n').map((line) => {
  const commentIndex = line.indexOf('#')
  const command = commentIndex >= 0 ? line.slice(0, commentIndex).trimEnd() : line
  const comment = commentIndex >= 0 ? line.slice(commentIndex) : ''

  const tokens = command.split(/(\s+|&&|&)/).filter(Boolean).map((token) => {
    let kind: BashTokenKind = 'text'

    if (/^\s+$/.test(token)) kind = 'space'
    else if (token === '&&' || token === '&') kind = 'operator'
    else if (commandNames.has(token)) kind = 'command'
    else if (token.startsWith('-')) kind = 'option'
    else if (/^\d+$/.test(token)) kind = 'number'
    else if (token.startsWith('http')) kind = 'url'
    else if (token.includes(':')) kind = 'target'
    else if (token.includes('/') || token.startsWith('.')) kind = 'path'

    return {
      text: token,
      kind
    }
  })

  return {
    tokens,
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
  <SectionShell id="quick-start" max-width="5xl" tone="background" rain="faint">
      <div class="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 items-start">
        <div>
          <SectionHeader
            kicker="Get Started"
            title="Clone, configure, migrate, run."
            mode="stack"
          />
          <p class="text-sm text-muted-foreground leading-relaxed -mt-4">
            One local command path for cloning, secrets, migrations, and the two dev servers.
          </p>
        </div>

        <div class="surface-tactile overflow-hidden">
          <!-- Terminal header -->
          <div class="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-border bg-muted/40">
            <div class="flex items-center gap-2.5 text-sm">
              <span class="w-3 h-3 rounded-full bg-red-400/80"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400/80"></span>
              <span class="w-3 h-3 rounded-full bg-green-400/80"></span>
              <span class="ml-2 text-xs font-bold text-muted-foreground font-heading">bash</span>
            </div>
            <button
              @click="copyCode"
              class="btn-tactile-muted p-1.5 inline-flex items-center justify-center cursor-pointer"
              title="Copy to clipboard"
              aria-label="Copy commands"
            >
              <PhCheck v-if="isCopied" :size="14" weight="bold" class="text-primary" />
              <PhCopy v-else :size="14" weight="bold" />
            </button>
          </div>

          <!-- Code block -->
          <pre class="p-4 md:p-5 overflow-x-auto text-left font-mono text-sm leading-relaxed whitespace-pre bg-card/60"><code
          ><span
            v-for="(line, i) in commandLines"
            :key="i"
            class="block leading-6"
          ><span class="text-muted-foreground/65 select-none">$ </span><span
            v-for="(token, tokenIndex) in line.tokens"
            :key="`${i}-${tokenIndex}`"
            :class="tokenClasses[token.kind]"
          >{{ token.text }}</span><span v-if="line.comment" class="text-[oklch(0.54_0.12_145)] dark:text-[oklch(0.76_0.1_145)] italic">  {{ line.comment }}</span></span></code></pre>
        </div>
      </div>
  </SectionShell>
</template>
