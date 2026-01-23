<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PanelLeft, PanelLeftClose } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import { useSidebar } from './utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar, open } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-7 w-7', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft v-if="!open" />
    <PanelLeftClose v-else />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
