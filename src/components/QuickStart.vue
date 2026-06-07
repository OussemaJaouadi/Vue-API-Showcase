<script setup lang="ts">
import { ref } from 'vue'
import { PhCopy, PhCheck, PhTerminal } from '@phosphor-icons/vue'

const codeString = `git clone https://github.com/OussemaJaouadi/Vue-API && cd vue-api
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
openssl rand -hex 32  # → JWT_ACCESS_SECRET
openssl rand -hex 32  # → JWT_REFRESH_SECRET
openssl rand -hex 32  # → PASSWORD_PEPPER
task db:generate && task db:plan && task db:migrate
task backend:dev & task frontend:dev`

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
  <section id="quick-start" class="py-10 md:py-16 border-b border-border bg-background">
    <div class="container max-w-4xl px-4 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">Get Started</h2>
        <div class="h-1 w-12 bg-primary mx-auto mb-4"></div>
      </div>

      <!-- Terminal Emulator Card -->
      <div class="card-workbench bg-slate-900 border-slate-800 text-slate-100 rounded-none overflow-hidden max-w-3xl mx-auto flex flex-col shadow-[4px_4px_0_0_oklch(0.508_0.118_165.612/0.12)]">
        <!-- Terminal Header -->
        <div class="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/80 select-none">
          <!-- Window Dots -->
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <!-- Terminal Title -->
          <span class="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <PhTerminal :size="14" />
            bash
          </span>
          <!-- Copy Button -->
          <button 
            @click="copyCode"
            class="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center"
            title="Copy command to clipboard"
          >
            <PhCheck v-if="isCopied" :size="14" class="text-emerald-400" />
            <PhCopy v-else :size="14" />
          </button>
        </div>

        <!-- Code Block Content -->
        <div class="p-4 md:p-6 overflow-x-auto text-left font-mono text-xs md:text-sm leading-relaxed whitespace-pre bg-slate-950">
          <div class="text-slate-400 select-none"># Clone the repository and configure environments</div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100 font-bold">git clone https://github.com/OussemaJaouadi/Vue-API && cd vue-api</span>
          </div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">cp .env.example .env</span>
          </div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">cp backend/.env.example backend/.env</span>
          </div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">cp frontend/.env.example frontend/.env</span>
          </div>
          
          <div class="text-slate-400 select-none mt-2"># Generate cryptographic tokens for backend secrets</div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">openssl rand -hex 32  <span class="text-slate-400 font-normal"># → copy into JWT_ACCESS_SECRET</span></span>
          </div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">openssl rand -hex 32  <span class="text-slate-400 font-normal"># → copy into JWT_REFRESH_SECRET</span></span>
          </div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">openssl rand -hex 32  <span class="text-slate-400 font-normal"># → copy into PASSWORD_PEPPER</span></span>
          </div>

          <div class="text-slate-400 select-none mt-2"># Initialize SQLite database migrations</div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">task db:generate && task db:plan && task db:migrate</span>
          </div>

          <div class="text-slate-400 select-none mt-2"># Launch development servers for backend and frontend</div>
          <div class="flex gap-2">
            <span class="text-primary select-none">$</span>
            <span class="text-slate-100">task backend:dev & task frontend:dev</span>
          </div>
        </div>
      </div>

      <!-- Footnote -->
      <div class="mt-8 text-center text-muted-foreground text-sm font-sans max-w-xl mx-auto leading-relaxed">
        Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">http://localhost:3000</a> — register the first account (becomes global manager), create a workspace, and start using the workbench.
      </div>
    </div>
  </section>
</template>
