<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="basic-layout flex h-full w-full">
    <SidebarProvider
      class="hidden md:flex"
      :style="{
        '--sidebar-width': 'calc(var(--spacing) * 64)',
        '--header-height': 'calc(var(--spacing) * 12 + 1px)'
      }"
    >
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <div class="flex flex-1 flex-col">
          <Request class="h-full overflow-hidden">
            <template #top-prefix>
              <SidebarTrigger class="text-muted-foreground hover:text-muted-foreground" />
            </template>
          </Request>
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<style lang="less" scoped></style>
