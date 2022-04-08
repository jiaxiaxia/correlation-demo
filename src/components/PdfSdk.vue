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
  }
})
const sdk = ref(null);
let container = null;
onMounted(() => {
  container = new PdfViewerContainer(props.config.documents, props.config.lineConfig, { PDFiumWorkSrc: PDFiumWorkSrc });
  container.render(sdk.value);
  if (props.config.correlations) {
    container.initLabelData(props.config.correlations)
  }
})
watch(() => props.config, () => {
  if (container) {
    container.destroy();
  }
  container = new PdfViewerContainer(props.config.documents, props.config.lineConfig, { PDFiumWorkSrc: PDFiumWorkSrc });
  container.render(sdk.value);
})
</script>
<style scoped lang="less">
.pdf-wrapper {
  height: 100%;
}
</style>    