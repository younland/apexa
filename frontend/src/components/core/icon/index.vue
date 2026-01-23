<script setup lang="ts">
import type { IconProps as IconifyIconProps } from '@iconify/vue'
import { Icon as IconifyIcon } from '@iconify/vue'
import { type CSSProperties } from 'vue'

interface IconProps extends IconifyIconProps {
  /**
   * Icon name or path
   * - Local SVG: local:icon-name
   * - URL SVG: url:https://example.com/icon.svg
   * - Third-party icon library: iconify-icon-name
   */
  icon: string
  size?: string | number
  color?: string
  class?: string
  style?: CSSProperties
}

const props = withDefaults(defineProps<IconProps>(), {
  prefix: 'icon',
  size: 20,
  color: 'currentColor',
  class: ''
})

/* 统一封装样式 */
const imgStyle = computed(() => ({
  width: props.size,
  height: props.size,
  ...props.style
}))
</script>

<template>
  <IconifyIcon
    :icon="icon"
    :width="size"
    :height="size"
    :class="cn('inline-block text-sm', props.class)"
    :style="imgStyle"
  />
</template>
