<script setup lang="ts">
import { CodeEditor } from 'monaco-editor-vue3'
import { editorOptions } from './option'

type languageSupported = 'json' | 'css' | 'html' | 'javascript' | 'typescript'

const props = withDefaults(
  defineProps<{
    value: string
    readonly?: boolean
    font?: number
    language?: languageSupported
  }>(),
  {
    value: '',
    readonly: false,
    font: 12,
    language: 'json'
  }
)

const code = ref<string>('')

watch(
  () => props.value,
  (val: string) => {
    if (!val) return

    switch (props.language) {
      case 'json':
        code.value = JSON.stringify(JSON.parse(val), null, 4)
        break
      default:
        code.value = val
        break
    }
  },
  { immediate: true }
)

const editorOption = computed(() => {
  return _.merge(editorOptions, {
    fontSize: props.font,
    readOnly: props.readonly
  })
})

const onChange = (val: string) => {
  console.log('change', val)
}

const onUpdate = (val: string) => {
  console.log('update', val)
}
</script>

<template>
  <CodeEditor
    class="code-editor"
    v-model:value="code"
    language="javascript"
    theme="vs-light"
    :options="editorOption"
    @change="onChange"
    @update:value="onUpdate"
  />
</template>

<style lang="less" scoped>
.code-editor {
  :deep(.monaco-hover) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
  :deep(.monaco-component) {
    visibility: hidden !important;
  }
}
</style>
