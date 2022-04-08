import { ref, computed } from 'vue';
import { replacer } from '../utils'
export function useJsonEditor(sdkJson) {
  const jsonContent = ref(JSON.stringify(sdkJson, replacer, 2));
  const jsonEditor = ref(null);
  const changedValue = ref('');
  const jsonIsChanged = computed(() => {
    return jsonContent.value !== changedValue.value;
  })
  function handleJsonChange(value) {
    changedValue.value = value;
  }
  return { jsonContent, jsonEditor, changedValue, jsonIsChanged, handleJsonChange }
}