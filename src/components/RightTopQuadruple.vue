<template>
  <template>
    <div class="correlation-container-wrapper" ref="rightTopRef">
      <div class="quadruple-header-wrapper">
        <div class="quadruple-header" v-if="markList[0]">
          <div class="document-number main">主</div>
          <span class="date">{{ markList[0].time }}</span>
          <div class="preattributes" v-if="markList[0].preattributes">
            <span>{{ preAttributesText }}</span>
          </div>
          <div class="attributes" v-if="markList[0].attributes">
            <span>{{ attributesText }}</span>
          </div>
        </div>
      </div>
      <div class="quadruple-correlation-list" ref="correlationListRef">
        <div
          class="quadruple-block"
          v-for="(item, index) in markList"
          :key="item.id"
          :class="[item.type, activeIndex === index ? 'active' : '']"
          @click="changeQuadrupleItem(index)"
        >
          <div class="title">{{ index + 1 }}</div>
          <div
            :class="
              item.serialNo === '主'
                ? 'document-number main'
                : 'document-number'
            "
          >
            {{ item.serialNo }}
          </div>
          <span class="date">{{ item.time }}</span>
          <span class="page">{{ item.filePageNode }}</span>
          <span class="value">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </template>

  <template>
    <div
      class="correlation-tab-wrapper"
      ref="tabRef"
      :class="{ 'is-empty': markList.length === 0 }"
    >
      <el-tabs
        type="border-card"
        @tab-change="changeQuadrupleItem"
        @tab-click="tabClick"
        v-model="tabActiveIndex"
      >
        <el-tab-pane v-for="item in markList" :key="item.id">
          <template #label>
            <span class="tab-label" :class="[item.type]">
              <div
                :class="
                  item.serialNo === '主'
                    ? 'document-number main'
                    : 'document-number'
                "
              >
                {{ item.serialNo }}
              </div>
              <span class="value">{{ item.value }}</span>
            </span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
</template>
<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { docletsList } from "../constant";
const props = defineProps({
  originMarksList: {
    type: Object,
    required: true,
  },
});
const emits = defineEmits(["quadrupleDom", "currentMarkIndex"]);
const rightTopRef = ref({});
const tabRef = ref({});
const correlationListRef = ref(null);
const activeIndex = ref(0);
const tabActiveIndex = ref(0);
const markList = ref([]);
const leftMark = ref({});
const attributesText = computed(() => {
  let text = "";
  markList.value[0].attributes.forEach((item) => {
    text += item.text + " ";
  });
  return text;
});
const preAttributesText = computed(() => {
  let text = "";
  markList.value[0].preattributes.forEach((item) => {
    text += item.text + " ";
  });
  return text;
});

onMounted(() => {
  emits("quadrupleDom", rightTopRef.value, tabRef.value);
});
function getNeedMarkData(marks) {
  const convertedMarks = [];
  marks.forEach((mark) => {
    const { payload } = mark;
    const docletName = docletsList.find(
      (item) => item.type === payload.item.doclet_type
    ).type_name;
    const filePageNode = `${docletName}: ${payload.item.page + 1}页`;
    const quadruple = payload.item.data.entity.quadruple;
    let valueString = "";
    quadruple.value.forEach((value) => {
      valueString += value.text;
    });
    const time = quadruple.time[0].text;
    let serialNo = "";
    if (payload.sub_doclet_type === "prospectus") {
      serialNo = "主";
    } else {
      serialNo = docletsList.findIndex(
        (item) => item.type === payload.item.doclet_type
      );
    }
    const attributes = quadruple.attributes;
    const preAttributes = quadruple.preattributes;
    const markItem = {
      value: valueString,
      time,
      filePageNode,
      serialNo,
      type: payload.type,
      attributes,
      preAttributes,
    };
    convertedMarks.push(markItem);
  });
  return convertedMarks;
}
function changeQuadrupleItem(index) {
  activeIndex.value = Number(index);
  tabActiveIndex.value = String(index);
  emits("currentMarkIndex", Number(index));
}
function tabClick(tab) {
  const index = Number(tab.index);
  scrollItemIntoView(index);
}
function scrollItemIntoView(index) {
  const element = correlationListRef.value.children[index];
  if (element) {
    element.scrollIntoView({
      behavior: "instant",
      block: "center",
      inline: "center",
    });
  }
}

watch(
  () => props.originMarksList,
  () => {
    activeIndex.value = 0;
    tabActiveIndex.value = "0";
    scrollItemIntoView(0);
    const convertData = getNeedMarkData(props.originMarksList);
    markList.value = convertData;
  }
);
</script>
<style scoped lang="less">
.correlation-container-wrapper {
  background-color: #f5f5f5;
  padding: 0 10px 6px 26px;
  height: 150px;
  overflow-y: auto;
  font-size: 12px;
  color: #1f2d3d;
  .quadruple-header-wrapper {
    position: sticky;
    top: 0;
    margin-bottom: 6px;
    z-index: 1;
    .quadruple-header {
      display: flex;
      align-items: center;
      column-gap: 5px;
      height: 40px;
      padding-left: 6px;
      background: #fff;
      border-left: 4px solid #1465d9;
      border-radius: 2px 0 0 2px;
      .preattributes {
        border-radius: 3px;
        padding: 2px 6px;
        background-color: #b4d39e;
      }
      .attributes {
        border-radius: 3px;
        padding: 2px 6px;
        background-color: #8ecdf0;
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -26px;
      right: -10px;
      z-index: -1;
      display: block;
      height: 40px;
      background: #f5f5f5;
    }
  }
  .quadruple-correlation-list {
    .quadruple-block {
      display: flex;
      align-items: center;
      position: relative;
      height: 22px;
      margin-top: 6px;
      padding: 4px 6px;
      background-color: #fff;
      border-radius: 5px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-left: 4px solid #1465d9;
      border-right: 4px solid #1465d9;
      cursor: pointer;
      .title {
        width: 15px;
        position: absolute;
        left: -20px;
        text-align: right;
      }
      .page {
        margin-left: auto;
        margin-right: 30px;
      }
      .value {
        width: 150px;
        text-align: right;
        margin-right: 50px;
        color: #1465d9;
      }
      &.active {
        border-top: 1px solid #1465d9;
        border-bottom: 1px solid #1465d9;
      }
      &.wrong {
        border-left: 4px solid #d91414;
        border-right: 4px solid #d91414;
        .value {
          color: #d91414;
        }
        &.active {
          border-top: 1px solid #d91414;
          border-bottom: 1px solid #d91414;
        }
      }
    }
  }
  .document-number {
    display: inline-block;
    width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #8a8b90;
    margin-right: 4px;
    transform: scale(0.8);
    &.main {
      background-color: #407dee;
    }
  }
}
.correlation-tab-wrapper {
  .tab-label {
    display: flex;
    align-items: center;
    .document-number {
      display: inline-block;
      width: 14px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-color: #8a8b90;
      margin-right: 4px;
      transform: scale(0.8);
      &.main {
        background-color: #407dee;
      }
    }
    .value {
      color: #1465d9;
    }
    &.wrong {
      .value {
        color: #d91414;
      }
    }
  }
}
</style>
<style lang="less">
.correlation-tab-wrapper {
  &.is-empty {
    border-bottom: none;

    .el-tabs__header {
      border-bottom: none;
    }
  }
  .el-tabs__header {
    .el-tabs__item {
      height: 30px;
      line-height: 30px;
      font-size: 11px;
      padding: 0 5px !important;
      .tab-label {
        &.valid {
          color: #1465d9;
        }
        &:not(.valid) {
          color: #ff4949;
        }
      }
    }
  }
  .el-tabs__nav-prev,
  .el-tabs__nav-next {
    width: 20px;
    line-height: 30px;
    text-align: center;
  }

  &.is-empty {
    border-bottom: none;

    .el-tabs__header {
      border-bottom: none;
    }
  }
  .el-tabs__content {
    display: none;
  }
}
</style>
