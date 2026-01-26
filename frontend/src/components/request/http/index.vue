<script setup lang="ts"></script>

<template>
  <div class="request-http flex h-full w-full flex-col py-2">
    <RequestHttpUrl />

    <Separator class="my-4 h-[0.5px]!" />

    <RequestCommonLayout :min-rb="54">
      <template #request>
        <RequestHttpRequest />
      </template>
      <template #response>
        <RequestHttpResponse />
      </template>
    </RequestCommonLayout>
  </div>
</template>

<style lang="less" scoped></style>
