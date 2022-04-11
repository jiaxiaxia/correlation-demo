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
          </el-popconfirm>-->
          <el-button @click="handleEditor">编辑json</el-button>
        </div>
      </template>
      <el-row class="editor-wrapper">
        <el-col class="menu-col">
          <el-menu @select="onMenuSelected" default-active="autodoc.js">
            <el-sub-menu v-for="subMenu in menuData" :key="subMenu.index" :index="subMenu.index">
              <template #title>
                <span>{{ subMenu.title }}</span>
              </template>
              <el-menu-item v-for="menuItem in subMenu.children" :key="menuItem.index" :index="menuItem.index">
                {{ menuItem.title }}
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
        <el-col class="editor-wrapper">
          <codemirror-editor ref="jsonEditor" :content="jsonContent" @change="handleJsonChange"></codemirror-editor>
        </el-col>
        <el-col class="editor-wrapper">
          <codemirror-editor
            ref="codeEditor"
            :content="codeContent"
            :options="{
              matchBrackets: true,
              autoCloseBrackets: true,
              lineNumbers: false,
              lineWrapping: false,
              foldGutter: false,
              gutters: [],
              continueComments: 'Enter', extraKeys: { 'Ctrl-Q': 'toggleComment' },
              mode: 'application/javascript'
            }"
            @change="handleCodeChange"
          ></codemirror-editor>
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
  <PdfSdk :config="pdfConfig" :quadrupleContainer="quadrupleContainer" :currentMark="currentMark" @sendMarkList="getMarkList" style="height: calc(100% - 35px)"></PdfSdk>
  <RightTopQuadruple @quadrupleDom="onQuadrupleDom" @currentMarkIndex="onCurrentMarkIndex" :originMarksList="originMarksList"></RightTopQuadruple>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import PdfSdk from './components/PdfSdk.vue';
import RightTopQuadruple from './components/RightTopQuadruple.vue';
import sdkJson from './jsons/autodoc.js';
import codeString from './sdkCode';
import CodemirrorEditor from './components/CodemirrorEditor.vue';
import { customEval, parseStringToJson, replacer } from './utils';
import { Back } from '@element-plus/icons-vue';
import { useJsonEditor } from './hooks/useJsonEditor';
import { useCodeEditor } from './hooks/useCodeEditor';
const menuData = [
  {
    index:'base',
    title:'基础样式',
    children:[{
      index:'dashborder.js',
      title:'虚线框'
    },
    {
      index:'solidborder.js',
      title:'实线框',
    }]
  },
  {
    index:'autodoc',
    title:'AutoDoc',
    children:[{
      index:'autodoc.js',
      title:'勾稽关系',
      slots:['right-top'],
    }]
  }
]
const { jsonContent, jsonEditor, changedValue, jsonIsChanged, handleJsonChange } = useJsonEditor(sdkJson)
const { codeContent, codeEditor, changedCodeValue, codeIsChanged, handleCodeChange } = useCodeEditor(codeString)
const editorVisible = ref(false);
const pdfConfig = ref(sdkJson);
const confirmVisible = ref(false);
const quadrupleContainer = ref({});
const markList = ref([]);
const currentMark = ref({});
const originMarksList = ref([]);
const currentMenuIndex = ref('autodoc.js');
function getMarkList(marks){
  originMarksList.value = marks
}

function onQuadrupleDom(rightTopDom, tabDom){
  quadrupleContainer.value = {
    rightTopDom,
    tabDom
  }
}
function onCurrentMarkIndex(index){
  currentMark.value = originMarksList.value[index];
}
async function onMenuSelected(index) {
  const json = await import(/* @vite-ignore */`./jsons/${index}`);
  jsonContent.value = json.default;
  currentMenuIndex.value = index;
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
  const json = parseStringToJson(editor.getValue());
  editorVisible.value = false;
  jsonContent.value = changedValue.value;
  const menuItem = [];
  menuData.forEach(item=>{
    menuItem.push(...item.children)
  })
  const slotConfig = menuItem.find(item=>item.index === currentMenuIndex.value)?.slots;
  json.slotConfig = slotConfig
  originMarksList.value = [];

  pdfConfig.value = json;
}

function handleShow() {
  const editor = jsonEditor.value.getJsonEditor();
  editor.setValue(jsonContent.value);
  const codeEd = codeEditor.value.getJsonEditor();
  codeEd.setValue(codeContent.value);
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
