<script setup lang="ts">
</script>

<template>
  <section class="py-10 md:py-16 border-b border-border bg-background">
    <div class="container max-w-5xl px-4 mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold tracking-tight text-foreground mb-4 font-heading">Architecture</h2>
        <div class="h-1 w-12 bg-primary mx-auto mb-4"></div>
        <p class="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          The browser never connects directly to target APIs. All request execution and WebSocket traffic flows through a Go backend proxy, isolating the network boundary. An SSE broker with single-use tickets delivers real-time events to the frontend.
        </p>
      </div>

      <!-- Simple flow diagram -->
      <div class="card-workbench p-4 md:p-6 bg-card rounded-none overflow-x-auto">
        <div class="min-w-[560px] flex flex-col gap-6">

          <!-- Frontend row -->
          <div class="flex items-center justify-center gap-2">
            <div class="px-4 py-2 border-2 border-primary/30 bg-primary/5 text-center text-xs font-bold text-foreground min-w-[110px]">
              Browser
            </div>
            <span class="text-muted-foreground/50">→</span>
            <div class="px-4 py-2 border-2 border-border text-center text-xs font-bold text-foreground min-w-[110px]">
              Nitro
            </div>
          </div>

          <!-- Down arrow -->
          <div class="flex justify-center text-muted-foreground/40 text-sm">↓</div>

          <!-- Backend row -->
          <div class="flex items-center justify-center gap-2">
            <div class="px-4 py-2 border-2 border-primary/40 bg-primary/5 text-center text-xs font-bold text-primary min-w-[110px]">
              Go API
            </div>
            <span class="text-muted-foreground/50">→</span>
            <div class="px-4 py-2 border-2 border-primary/30 text-center text-xs font-bold text-primary min-w-[90px]">
              SQLite
            </div>
            <span class="text-muted-foreground/30 mx-1">|</span>
            <div class="px-4 py-2 border-2 border-border text-center text-xs font-bold text-foreground min-w-[90px]">
              SSE Broker
            </div>
            <span class="text-muted-foreground/50">→</span>
            <div class="px-3 py-1.5 border border-dashed border-muted-foreground/30 text-center text-[10px] text-muted-foreground/60">
              Browser
            </div>
            <span class="text-muted-foreground/30 mx-1">|</span>
            <div class="px-4 py-2 border-2 border-border text-center text-xs font-bold text-foreground min-w-[90px]">
              WS Relay
            </div>
            <span class="text-muted-foreground/50">↔</span>
            <div class="px-3 py-1.5 border border-dashed border-muted-foreground/30 text-center text-[10px] text-muted-foreground/60 min-w-[70px]">
              Target API
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
