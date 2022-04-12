<template>
  <el-row v-if="!loading" class="editor-wrapper">
      <el-col class="menu-col">
       <DemoMenu> </DemoMenu>
      </el-col>
      <el-col class="editor-wrapper">
        <Repl :store="store" :showCompileOutput="true" :sfc-options="sfcOptions" />    
      </el-col>
    </el-row>
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
import DemoMenu from './components/DemoMenu.vue';
const loading =ref(false);
// retrieve some configuration options from the URL
const query = new URLSearchParams(location.search)

// enable experimental features
const sfcOptions = {
  script: {
    reactivityTransform: true,
  },
}

const store = new CustomReplStore()

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
.editor-wrapper {
    height: 100%;
    overflow: hidden;
    .editor-wrapper {
      height: 100%;
      overflow-y: auto;
      flex: 1;
    }
    .menu-col {
      width: 130px;
      max-width: 130px;
      height: 100%;
      overflow-y: hidden;

      .el-menu {
        --el-menu-item-height: 40px;
        height: 100%;
        overflow: auto;
        .el-sub-menu__title {
          padding-left: 10px !important;
          .el-sub-menu__icon-arrow {
            right: 10px;
          }
        }
        .el-menu-item {
          padding-left: 10px !important;
        }
        .el-sub-menu {
          .el-menu-item {
            padding-left: 20px !important;
          }
        }
      }
    }
    :deep .vue-repl{
    height: 100%;
  }
  }
.loading {
  height: 100vh;
}
</style>    