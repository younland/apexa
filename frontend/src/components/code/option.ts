import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

// @ts-ignore
window.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') return new jsonWorker()
    if (label === 'css') return new cssWorker()
    if (label === 'html') return new htmlWorker()
    if (label === 'typescript' || label === 'javascript') return new tsWorker()
    return new editorWorker()
  }
}

export const editorOptions = {
  fontSize: 12, // 字体大小
  minimap: {
    // 关闭代码缩略图
    enabled: false // 是否启用预览图
  },
  automaticLayout: true, // 控制编辑器是否自动调整布局以适应容器大小的变化
  readOnly: true, // 是否只读
  wordWrap: 'on', // 开启自动换行
  scrollBeyondLastLine: false, // 禁用额外滚动区
  scrollbar: {
    verticalScrollbarSize: 8, // 垂直滚动条宽度，默认px
    horizontalScrollbarSize: 8 // 水平滚动条高度
  },
  glyphMargin: true, //字形边缘
  lineNumbersMinChars: 4 // 设置行号区域宽度为2个字符
}
