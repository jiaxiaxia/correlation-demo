

<template>
  <div class="header">
    <el-popover
      placement="bottom"
      width="80%"
      popper-class="pop-wrapper"
      v-model:visible="editorVisible"
      @show="handleShow"
    >
      <template #reference>
        <div>
          <!-- <el-popconfirm
            title="确定要放弃本次修改吗？"
            confirmButtonText="确定"
            cancelButtonText="取消"
            v-model:visible="confirmVisible"
            @confirm="hiddenEditor"
            @cancel="confirmCancel"
          >
            <template #reference>
              <el-button
                style="border: none; background-color: transparent; padding: 0;"
                @click="handleCancelEdit"
              >
                <el-icon v-if="editorVisible" size="18px">
                  <back size="36px" />
                </el-icon>
              </el-button>
            </template>
          </el-popconfirm> -->
          <el-button @click="handleEditor">编辑json</el-button>
        </div>
      </template>
      <el-row class="editor-wrapper">
        <el-col class="menu-col">
          <el-menu @select="onMenuSelected" default-active="autodoc.js">
            <el-sub-menu index="base">
              <template #title>
                <span>基础样式</span>
              </template>
              <el-menu-item index="dashborder.js">虚线框</el-menu-item>
              <el-menu-item index="solidborder.js">实线框</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="autoDoc">
              <template #title>
                <span>AutoDoc</span>
              </template>
              <el-menu-item index="autodoc.js">勾稽关系</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
        <el-col class="json-editor-wrapper">
          <codemirror-editor ref="jsonEditor" :content="jsonContent" @change="handleJsonChange"></codemirror-editor>
        </el-col>
      </el-row>
    </el-popover>
    <div class="run-btn" v-if="editorVisible">
      <el-button @click="handleRun">运行</el-button>
      <el-popconfirm
        title="确定要放弃本次修改吗？"
        confirmButtonText="确定"
        cancelButtonText="取消"
        v-model:visible="confirmVisible"
        @confirm="hiddenEditor"
        @cancel="confirmCancel"
      >
        <template #reference>
          <el-button @click="handleCancelEdit">取消</el-button>
        </template>
      </el-popconfirm>
    </div>
  </div>
  <PdfSdk :config="pdfConfig" style="height: calc(100% - 35px)"></PdfSdk>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import PdfSdk from './components/PdfSdk.vue'
import sdkJson from './jsons/autodoc.js';
import CodemirrorEditor from './components/CodemirrorEditor.vue';
import { customEval } from './utils';
import { Back } from '@element-plus/icons-vue';
const jsonRef = ref(null);
const jsonContent = ref(JSON.stringify(sdkJson, replacer, 2));
const jsonEditor = ref(null);
const editorVisible = ref(false);
const pdfConfig = ref(sdkJson);
const changedValue = ref('');
const jsonIsChanged = computed(() => {
  return jsonContent.value !== changedValue.value;
})
const confirmVisible = ref(false);
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'function') {
    return value.toString();
  }
  return value;
}
async function onMenuSelected(index) {
  const json = await import(/* @vite-ignore */`./jsons/${index}`);
  jsonContent.value = JSON.stringify(json.default, replacer, 2)
}
function handleEditor() {
  if (!editorVisible.value) {
    editorVisible.value = true;
  }
}
function handleCancelEdit() {
  if (!jsonIsChanged.value) {
    hiddenEditor();
  } else {
    confirmVisible.value = true
  }

}
function hiddenEditor() {
  editorVisible.value = false;
  confirmVisible.value = false
}
function confirmCancel() {
  confirmVisible.value = false
}

function handleRun() {
  const editor = jsonEditor.value.getJsonEditor();
  const json = JSON.parse(editor.getValue());
  json.documents.forEach(document => {
    document.loadDataByPage = customEval(document.loadDataByPage);
  });
  pdfConfig.value = json;
  editorVisible.value = false;
  jsonContent.value = changedValue.value
}
function handleJsonChange(value) {
  console.log('change');
  changedValue.value = value;
}
function handleShow() {
  const editor = jsonEditor.value.getJsonEditor();
  editor.setValue(jsonContent.value)
}
</script>
<style scoped lang="less">
.header {
  height: 30px;
  background-color: rgba(249, 249, 250, 1);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .run-btn {
    margin-left: 30px;
  }
}
</style>
<style lang="less">
.pop-wrapper {
  height: calc(100% - 60px);
  padding: 0 !important;

  .editor-wrapper {
    height: 100%;
    overflow: hidden;
    .json-editor-wrapper {
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
  }

  .CodeMirror {
    height: 100% !important;
    border: 1px solid #ddd;
    width: calc(100%-50px);
    font-size: 14px;
  }

  .CodeMirror pre {
    padding-left: 7px !important;
    line-height: 1.25 !important;
  }
}
</style>
