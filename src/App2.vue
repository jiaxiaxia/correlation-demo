<template>
<div v-if="!loading" class="antialiased">
    <Repl :store="store" :showCompileOutput="true" :sfc-options="sfcOptions" />
  </div>
  <template v-else>
    <div v-loading="{ text: 'Loading...' }" class="loading" />
  </template>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { Repl } from '@vue/repl'
import {CustomReplStore} from './store.js';
import '@vue/repl/style.css'
import { compileFile, File } from '@vue/repl'
import autoDocCode from './demos/autodoc';
const loading =ref(false);
// retrieve some configuration options from the URL
const query = new URLSearchParams(location.search)

// enable experimental features
const sfcOptions = {
  script: {
    reactivityTransform: true,
  },
}

const store = new CustomReplStore({
  // initialize repl with previously serialized state
  serializedState: location.hash.slice(1),

  // starts on the output pane (mobile only) if the URL has a showOutput query
  showOutput: query.has('showOutput'),
  // starts on a different tab on the output pane if the URL has a outputMode query
  // and default to the "preview" tab
  outputMode: (query.get('outputMode') || 'preeview')

})

store.setFiles({
  "App.vue": autoDocCode,
  "import-map.json": ` {
    "imports":  {
      "pdf-document-viewer": "../pdf-document-viewer/dist/image-viewer.es.js"
    }
  }  
  `
})
store.init().then(()=> (loading.value = false));

// persist state to URL hash
watchEffect(() => history.replaceState({}, '', store.serialize()))

</script>
<style scoped lang="less">
.antialiased {
  height: 100%;
  :deep .vue-repl{
    height: 100%;
  }
}
.loading {
  height: 100vh;
}
</style>    