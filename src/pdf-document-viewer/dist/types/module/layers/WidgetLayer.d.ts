import type { PDFPageView } from 'pdfjs/types/web/pdf_page_view';
import BaseLayer from './BaseLayer';
import WidgetCanvas from '../widgets/WidgetCanvas';
import type WidgetHelper from '../widgets/WidgetHelper';
declare class WidgetLayer extends BaseLayer {
    #private;
    layerName: string;
    dom: HTMLDivElement;
    canvas: WidgetCanvas;
    controlBarContainer: HTMLDivElement;
    tagsContainer: HTMLDivElement;
    widgetHelper: WidgetHelper;
    constructor(pageNumber: number, pageView: PDFPageView, viewerApp: any);
    get widgetType(): string | undefined;
    toggleTextLayer(): void;
    removeWidgetsBySubType(subType: string): void;
    render(): void;
}
export default WidgetLayer;
