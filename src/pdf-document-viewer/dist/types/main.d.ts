import { GlobalAppOptions } from 'pdfjs/web/component_viewer';
import { pxToPt, ptToPx } from './shared/widget-utils';
import 'pdfjs/web/component_viewer.css';
import './assets/scss/index.scss';
import 'virtual:svg-icons-register';
import './shared/Array.polyfill';
import { createViewer } from './shared/createViewer';
import { PdfViewerContainer } from './sdk/documents-manager/components/PdfViewerContainer';
declare const _default: {
    GlobalAppOptions: typeof GlobalAppOptions;
    createViewer: typeof createViewer;
    pxToPt: typeof pxToPt;
    ptToPx: typeof ptToPx;
    PdfViewerContainer: typeof PdfViewerContainer;
};
export default _default;
