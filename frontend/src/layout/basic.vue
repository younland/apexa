<template>
  <div class="basic-layout h-full w-full">
    <el-splitter>
      <el-splitter-panel size="20%" :min="240">
        <div class="demo-panel">1</div>
      </el-splitter-panel>
      <el-splitter-panel :min="400">
        <div class="demo-panel">2</div>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<style lang="less">
  .basic-layout {
    :deep(.el-splitter-bar__dragger-horizontal) {
      ::before {
        width: 1px !important;
      }
    }
  }
</style>
