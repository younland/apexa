<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

const props = withDefaults(
  defineProps<{
    minLt?: number
    minRb?: number
  }>(),
  {
    minLt: 40,
    minRb: 40
  }
)
</script>

<template>
  <Splitpanes class="split default-theme" horizontal>
    <Pane
      class="overflow-y-auto! bg-transparent! px-4"
      :style="{
        minHeight: `${props.minLt}px`
      }"
    >
      <slot name="request"></slot>
    </Pane>
    <Pane
      class="overflow-y-auto! bg-transparent! px-4"
      :style="{
        minHeight: `${props.minRb}px`
      }"
    >
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
