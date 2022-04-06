<template>
  <textarea ref="editor"></textarea>
</template>
<script setup>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/indent-fold';
import { watchEffect, ref, onMounted, watch } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  options: {
    type: Object,
    default: () => ({})
  }
});
const emits = defineEmits(['change'])
const editor = ref(null);
let jsonEditor = null;
onMounted(() => {
  jsonEditor = CodeMirror.fromTextArea(editor.value, {
    matchBrackets: true,
    autoCloseBrackets: true,
    mode: 'application/ld+json',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    ...props.options
  });
  jsonEditor.on('change', context => {
    emits('change',context.getValue());
  });
})
watch(() => props.content, () => {
  if (jsonEditor) {
    jsonEditor.getDoc().setValue(props.content);
  }
}, {
  immdiate: true,
})

expose({
  getJsonEditor: () => jsonEditor
})
</script>
<style scoped lang="less">
</style>    