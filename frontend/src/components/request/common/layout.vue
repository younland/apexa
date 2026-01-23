<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<template>
  <Splitpanes class="split default-theme" horizontal>
    <Pane class="min-h-9 overflow-y-auto! bg-transparent!">
      <div class="split-request">
        <slot name="request"></slot>
      </div>
    </Pane>
    <Pane class="min-h-9 overflow-y-auto! bg-transparent!">
      <slot name="response"></slot>
    </Pane>
  </Splitpanes>
</template>

<style lang="less" scoped>
.default-theme {
  :deep(.splitpanes__splitter) {
    border: none;
    background: var(--color-border);
    height: 7px;
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
