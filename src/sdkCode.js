import dedent from "dedent";
export default dedent(`
import PDFiumWorkSrc from "pdf-document-viewer/PDFiumWork?url";
import viewer from "pdf-document-viewer";
import "pdf-document-viewer/style.css";
const { PdfViewerContainer } = viewer;
export function initSDK(rootDom, config) {
  container = new PdfViewerContainer(config.documents, config.lineConfig, { PDFiumWorkSrc: PDFiumWorkSrc });
  container.render(rootDom);
}
`)
