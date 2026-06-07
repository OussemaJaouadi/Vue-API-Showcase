<script setup lang="ts">
import { ref } from 'vue'
import { 
  PhCode, 
  PhFolders, 
  PhGear, 
  PhMoon,
  PhPlay,
  PhFolder,
  PhPlus,
  PhTrash,
  PhEye,
  PhCheckCircle
} from '@phosphor-icons/vue'

const activeTab = ref('editor')

const tabs = [
  { id: 'editor', name: 'Workbench Editor', icon: PhCode, caption: 'Workbench Editor — build and execute requests with live response inspection.' },
  { id: 'collections', name: 'Collections Tree', icon: PhFolders, caption: 'Collections Tree — organize requests into folders with drag-and-drop ordering.' },
  { id: 'environments', name: 'Environments', icon: PhGear, caption: 'Environments — manage variables and secrets per workspace environment.' },
  { id: 'darkmode', name: 'Dark Mode', icon: PhMoon, caption: 'Dark Mode — full dark theme with system preference detection.' }
]
</script>

<template>
  <section id="screenshots" class="py-10 md:py-16 border-b border-border bg-background">
    <div class="container max-w-5xl px-4 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4">Screenshots</h2>
        <div class="h-1 w-12 bg-primary mx-auto mb-4"></div>
      </div>

      <!-- Tab Buttons -->
      <div class="flex flex-wrap justify-center gap-2 mb-8 border-b border-border pb-4">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex items-center gap-2 px-4 py-2 text-sm font-semibold border-b-2 cursor-pointer transition-all duration-200"
          :class="activeTab === tab.id 
            ? 'border-primary text-primary bg-primary/5' 
            : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30'"
        >
          <component :is="tab.icon" :size="18" />
          {{ tab.name }}
        </button>
      </div>

      <!-- Active Caption -->
      <div class="text-center text-muted-foreground text-sm mb-6 max-w-2xl mx-auto italic">
        {{ tabs.find(t => t.id === activeTab)?.caption }}
      </div>

      <!-- CSS Mockups Container -->
      <div class="card-workbench bg-card rounded-none p-4 md:p-6 overflow-hidden min-h-96 flex flex-col">
        <!-- 1. Editor Mockup -->
        <div v-if="activeTab === 'editor'" class="flex flex-col md:flex-row gap-4 grow text-left text-xs font-mono text-foreground">
          <!-- Sidebar Mock -->
          <div class="w-full md:w-1/4 border-r border-border pr-4 flex flex-col gap-3">
            <div class="font-bold text-muted-foreground uppercase tracking-wider text-xs">Collections</div>
            <div class="flex items-center gap-2 text-primary bg-primary/5 p-1.5 border border-primary/20">
              <span class="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-1">GET</span>
              <span class="truncate">Get Users</span>
            </div>
            <div class="flex items-center gap-2 p-1.5 text-muted-foreground hover:text-foreground">
              <span class="text-xs font-bold text-amber-600 bg-amber-500/10 px-1">POST</span>
              <span class="truncate">Create User</span>
            </div>
            <div class="flex items-center gap-2 p-1.5 text-muted-foreground hover:text-foreground">
              <span class="text-xs font-bold text-blue-600 bg-blue-500/10 px-1">PUT</span>
              <span class="truncate">Update User</span>
            </div>
          </div>

          <!-- Main Editor Mock -->
          <div class="w-full md:w-3/4 flex flex-col gap-4">
            <!-- Request Bar -->
            <div class="flex items-center gap-2 border border-border p-2 bg-muted/20">
              <span class="text-emerald-500 font-bold px-2 py-1 bg-emerald-500/10 border border-emerald-500/20">GET</span>
              <div class="grow bg-card px-2 py-1 text-muted-foreground border border-border truncate">https://api.acme.co/v1/users/12345?fields=full</div>
              <button class="btn-tactile-primary px-4 py-1 flex items-center gap-1.5 cursor-pointer">
                <PhPlay :size="12" weight="fill" /> Send
              </button>
            </div>

            <!-- Tab Headers / Editor split -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 grow">
              <!-- Request Body -->
              <div class="border border-border p-3 flex flex-col bg-muted/5">
                <div class="font-bold text-muted-foreground mb-2 pb-1 border-b border-border">Request Body (JSON)</div>
                <pre class="text-emerald-600 dark:text-emerald-400 overflow-x-auto">
{
  <span class="text-foreground">"name"</span>: "Sarah Chen",
  <span class="text-foreground">"email"</span>: "sarah.c@email.com",
  <span class="text-foreground">"role"</span>: "admin"
}</pre>
              </div>

              <!-- Response Inspector -->
              <div class="border border-border p-3 flex flex-col bg-muted/5">
                <div class="flex justify-between items-center mb-2 pb-1 border-b border-border">
                  <div class="font-bold text-muted-foreground">Response</div>
                  <span class="text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20">200 OK</span>
                </div>
                <pre class="text-emerald-600 dark:text-emerald-400 overflow-x-auto">
{
  <span class="text-foreground">"id"</span>: "12345",
  <span class="text-foreground">"name"</span>: "Sarah Chen",
  <span class="text-foreground">"email"</span>: "sarah.c@email.com",
  <span class="text-foreground">"status"</span>: "active",
  <span class="text-foreground">"profile"</span>: {
    <span class="text-foreground">"role"</span>: "admin"
  }
}</pre>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Collections Tree Mockup -->
        <div v-if="activeTab === 'collections'" class="flex flex-col gap-4 grow text-left text-xs font-mono text-foreground max-w-xl mx-auto w-full">
          <div class="border border-border p-4 bg-muted/10 flex flex-col gap-2">
            <div class="flex items-center justify-between pb-2 border-b border-border mb-2">
              <span class="font-bold text-muted-foreground">Collections Tree</span>
              <button class="btn-tactile-primary px-2 py-0.5 flex items-center gap-1 text-xs cursor-pointer"><PhPlus :size="10" /> Add</button>
            </div>

            <!-- Folders and items -->
            <div class="flex flex-col gap-1.5 pl-2">
              <div class="flex items-center gap-2 text-foreground font-bold">
                <PhFolder :size="16" class="text-amber-500" />
                <span>Payments API</span>
              </div>
              <div class="flex flex-col gap-1 pl-6 border-l border-border/60">
                <div class="flex items-center gap-2 text-muted-foreground py-0.5">
                  <span class="text-xs font-bold text-emerald-600 bg-emerald-500/10 px-1">GET</span>
                  <span>List Payments</span>
                </div>
                <div class="flex items-center gap-2 text-muted-foreground py-0.5">
                  <span class="text-xs font-bold text-amber-600 bg-amber-500/10 px-1">POST</span>
                  <span>Create Charge</span>
                </div>
              </div>
            </div>

            <!-- Drag & Drop visual simulation -->
            <div class="flex flex-col gap-1.5 pl-2 mt-2">
              <div class="flex items-center gap-2 text-primary font-bold bg-primary/5 p-2 border-2 border-dashed border-primary/40">
                <PhFolder :size="16" class="text-primary" />
                <span>Users Service (Moving...)</span>
                <span class="ml-auto text-xs text-primary/70">Drag to reorder</span>
              </div>
            </div>

            <div class="flex flex-col gap-1.5 pl-2 mt-2">
              <div class="flex items-center gap-2 text-foreground font-bold">
                <PhFolder :size="16" class="text-amber-500" />
                <span>Products API</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Environments Mockup -->
        <div v-if="activeTab === 'environments'" class="flex flex-col gap-4 grow text-left text-xs text-foreground w-full">
          <div class="flex justify-between items-center border-b border-border pb-3 mb-2">
            <div>
              <h4 class="text-base font-bold font-heading">Manage Environment Variables</h4>
              <p class="text-muted-foreground text-xs font-sans">Define and manage variables and secrets for the 'Development' workspace.</p>
            </div>
            <button class="btn-tactile-primary px-3 py-1 flex items-center gap-1.5 font-sans font-semibold cursor-pointer">
              <PhPlus :size="14" /> Add Variable
            </button>
          </div>

          <!-- Variable Table -->
          <div class="border border-border overflow-x-auto font-mono">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-muted/30 border-b border-border text-muted-foreground text-xs uppercase font-bold tracking-wider">
                  <th class="p-3">Variable Name</th>
                  <th class="p-3">Type</th>
                  <th class="p-3">Value</th>
                  <th class="p-3">Description</th>
                  <th class="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border bg-card">
                  <td class="p-3 font-bold text-foreground">baseUrl</td>
                  <td class="p-3"><span class="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs rounded">string</span></td>
                  <td class="p-3 text-muted-foreground">https://api.dev.acme.co/v1</td>
                  <td class="p-3 text-muted-foreground">Base url for dev servers</td>
                  <td class="p-3 text-right flex justify-end gap-2">
                    <button class="p-1 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"><PhEye :size="14" /></button>
                    <button class="p-1 hover:bg-destructive/10 text-muted-foreground hover:text-destructive cursor-pointer"><PhTrash :size="14" /></button>
                  </td>
                </tr>
                <tr class="border-b border-border bg-card">
                  <td class="p-3 font-bold text-foreground">apiSecret</td>
                  <td class="p-3"><span class="px-1.5 py-0.5 bg-purple-500/10 text-purple-500 border border-purple-500/20 text-xs rounded">secret</span></td>
                  <td class="p-3 text-muted-foreground">••••••••••••••••••••••••••••</td>
                  <td class="p-3 text-muted-foreground">Secure workspace client credentials token</td>
                  <td class="p-3 text-right flex justify-end gap-2">
                    <button class="p-1 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"><PhEye :size="14" /></button>
                    <button class="p-1 hover:bg-destructive/10 text-muted-foreground hover:text-destructive cursor-pointer"><PhTrash :size="14" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4. Dark Mode Mockup -->
        <div v-if="activeTab === 'darkmode'" class="flex flex-col gap-6 grow items-center justify-center p-6 bg-slate-900 text-white rounded-none border border-slate-800">
          <div class="text-center max-w-md">
            <!-- Simulated Mode Toggle Widget -->
            <div class="bg-slate-950 p-4 border border-slate-800 shadow-xl rounded-xl inline-flex flex-col gap-3 mb-6">
              <div class="flex items-center justify-between gap-12 border-b border-slate-800 pb-2">
                <span class="text-xs font-semibold text-slate-400 font-sans">System preference detected</span>
                <span class="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20 flex items-center gap-1 font-sans">
                  <PhCheckCircle :size="10" /> Dark Mode
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold font-sans">Appearance Theme</span>
                <div class="flex bg-slate-900 p-1 border border-slate-800 rounded-lg">
                  <span class="px-3 py-1 text-xs text-slate-400 rounded-md font-sans">Light</span>
                  <span class="px-3 py-1 text-xs text-emerald-400 bg-slate-950 rounded-md font-bold font-sans">Dark</span>
                </div>
              </div>
            </div>

            <h3 class="text-xl font-bold tracking-tight mb-2 font-heading">Fluid Dark Theme</h3>
            <p class="text-slate-400 text-xs leading-relaxed font-sans">
              Matches your operating system's prefers-color-scheme instantly. Leverages raw OKLCH variables and class-based theme injection to ensure consistent, premium contrast levels across the entire application interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
