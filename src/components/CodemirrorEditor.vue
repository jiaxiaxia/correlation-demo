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
 import 'codemirror/mode/javascript/javascript.js'

  // theme css
  import 'codemirror/theme/monokai.css'

  // require active-line.js
  import'codemirror/addon/selection/active-line.js'

  // styleSelectedText
  import'codemirror/addon/selection/mark-selection.js'
  import'codemirror/addon/search/searchcursor.js'

  // hint
  import'codemirror/addon/hint/show-hint.js'
  import'codemirror/addon/hint/show-hint.css'
  import'codemirror/addon/hint/javascript-hint.js'
  import'codemirror/addon/selection/active-line.js'

  // highlightSelectionMatches
  import'codemirror/addon/scroll/annotatescrollbar.js'
  import'codemirror/addon/search/matchesonscrollbar.js'
  import'codemirror/addon/search/searchcursor.js'
  import'codemirror/addon/search/match-highlighter.js'

  // keyMap
  import'codemirror/mode/clike/clike.js'
  import'codemirror/addon/edit/matchbrackets.js'
  import'codemirror/addon/comment/comment.js'
    import'codemirror/addon/comment/continuecomment.js'
  import'codemirror/addon/dialog/dialog.js'
  import'codemirror/addon/dialog/dialog.css'
  import'codemirror/addon/search/searchcursor.js'
  import'codemirror/addon/search/search.js'
  import'codemirror/keymap/sublime.js'

  // foldGutter
  import'codemirror/addon/fold/foldgutter.css'
  import'codemirror/addon/fold/brace-fold.js'
  import'codemirror/addon/fold/comment-fold.js'
  import'codemirror/addon/fold/foldcode.js'
  import'codemirror/addon/fold/foldgutter.js'
  import'codemirror/addon/fold/indent-fold.js'
  import'codemirror/addon/fold/markdown-fold.js'
  import'codemirror/addon/fold/xml-fold.js'

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
    ...props.options,
    value: props.content,
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

defineExpose({
  getJsonEditor: () => jsonEditor
})
</script>
<style scoped lang="less">
</style>    