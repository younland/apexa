<script setup lang="ts">
import HttpRequest from '@/components/request/http/index.vue'
</script>

<template>
  <div class="project flex h-full w-full flex-col">
    <div class="top item-center flex h-12 flex-row items-center justify-between px-4 py-2">
      <div class="flex flex-row items-center font-sans font-bold">
        <slot class="mx-2" name="top-prefix"></slot>
        项目名称
      </div>
      <span class="text-sm">生产环境</span>
    </div>
    <Separator class="my-2" />
    <div class="flex-1">
      <RequestHttp />
    </div>
  </div>
</template>

<style lang="less" scoped>
.basic-layout {
  :deep(.el-splitter-bar__dragger-horizontal) {
    &::before {
      width: 1px;
    }
  }
}
</style>
