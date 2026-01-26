<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="basic-layout flex h-screen w-full overflow-hidden">
    <SidebarProvider
      class="flex"
      :style="{
        '--sidebar-width': 'calc(var(--spacing) * 64)',
        '--header-height': 'calc(var(--spacing) * 12 + 1px)'
      }"
    >
      <AppSidebar />
      <SidebarInset class="min-w-0">
        <Request class="h-screen overflow-hidden">
          <template #top-prefix>
            <SidebarTrigger class="text-muted-foreground hover:text-muted-foreground" />
          </template>
        </Request>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<style lang="less" scoped></style>
