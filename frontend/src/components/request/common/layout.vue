<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <Splitpanes class="split default-theme flex" horizontal>
    <Pane class="min-h-9 overflow-y-auto! bg-transparent! px-4" min-size="20">
      <slot name="request"></slot>
    </Pane>
    <Pane class="max-h-125 min-h-9 overflow-y-auto! bg-transparent! px-4" max-size="80">
      <slot name="response"></slot>
    </Pane>
  </Splitpanes>
</template>

<style lang="less" scoped>
.default-theme {
  :deep(.splitpanes__splitter) {
    border: none;
    background: var(--sidebar-accent);
    height: 5px;
    &:hover {
      background: var(--primary);
      &::before {
        background-color: var(--primary-foreground);
      }
      &::after {
        background-color: var(--primary-foreground);
      }
    }
  }
}
</style>
