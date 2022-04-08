import { ref, computed } from 'vue';
export function useCodeEditor(code) {
  const codeContent = ref(code);
  const codeEditor = ref(null);
  const changedCodeValue = ref('');
  const codeIsChanged = computed(() => {
    return codeContent.value !== changedCodeValue.value;
  })
  function handleCodeChange(value) {
    changedCodeValue.value = value;
  }
  return { codeContent, codeEditor, changedCodeValue, codeIsChanged, handleCodeChange }
}