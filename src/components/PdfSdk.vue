<template>
  <div ref="sdk" class="pdf-wrapper"></div>
</template>
<script setup>
import PDFiumWorkSrc from "pdf-document-viewer/PDFiumWork?url";
import viewer from "pdf-document-viewer";
import "pdf-document-viewer/style.css";

import { onMounted, ref, watch } from 'vue';

const { PdfViewerContainer } = viewer;
const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
  initContainer: {
    type: Function,
    required: true,
  },
  quadrupleContainer: {
    type: Object,
    required: true,
  },
  currentMark: {
    type: Object,
    required: true,
  }
})
const sdk = ref(null);
let container = null;
const emits = defineEmits(["sendMarkList"]);
onMounted(() => {
  initContainer();
})
function initContainer(){
  if (container) {
    container.destroy();
  }
  container = new PdfViewerContainer(props.config.documents, props.config.lineConfig, { PDFiumWorkSrc: PDFiumWorkSrc });
  container.render(sdk.value);
  if (props.config.correlations) {
    container.initLabelData(props.config.correlations)
  }
  container.eventBus.on('widget-click', widgetClick);
}
function widgetClick(eventData){
  const widgetData = eventData.data.widget.toJSON();

  const correlationIds = widgetData.dataset.find(item => item.key === 'correlationIds')?.value;
  const markId = widgetData.dataset.find(item => item.key === 'markId')?.value;
  if (correlationIds) {
    const correlation = container.labelDataManager.getDataById(widgetData.id);
    const mark = correlation.marks.find(item => item.correlation_id === correlationIds[0]);
    if (mark) {
      if (mark.payload) {
        switch (mark.payload?.content_type) {
          case 'quadruple':
              const marksList = container.labelDataManager.getRightMarksById(widgetData.id);
              emits("sendMarkList", marksList);
              container.drawRightWidgetAndLine(mark);
              break;
            case 'formula':
              break;
            default:
              break;
          }
        }
      }
    } else if (markId) {
      container.rightTopSlot.innerHTML = '';
    }
}
watch(() => props.config, () => {
  initContainer();
})
watch(() => props.quadrupleContainer, () => {
  container.rightTopSlot.innerHTML = ''
  container.tabSlot.innerHTML = ''
  if(props.quadrupleContainer.rightTopDom){
    container.rightTopSlot.appendChild(props.quadrupleContainer.rightTopDom);
  }
  if(props.quadrupleContainer.tabDom){
    container.tabSlot.appendChild(props.quadrupleContainer.tabDom);
  }
})
watch(() => props.currentMark, () => {
  container.drawRightWidgetAndLine(props.currentMark);
})
</script>
<style scoped lang="less">
.pdf-wrapper {
  height: 100%;
}
</style>    