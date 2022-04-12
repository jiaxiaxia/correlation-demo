import { PDFPageView } from 'pdfjs/types/web/pdf_page_view';
import { PageInfo } from '../../types/widget';
import type DocumentViewer from '../display/DocumentViewer';
declare abstract class BaseLayer {
    abstract layerName: string;
    pageView: PDFPageView;
    viewerApp: DocumentViewer;
    pageNumber: number;
    pageDom: Element;
    textDom?: HTMLElement;
    abstract dom: Element;
    pageInfo: PageInfo;
    protected constructor(pageNumber: number, pageView: PDFPageView, viewerApp: DocumentViewer);
    render(): void;
}
export default BaseLayer;
