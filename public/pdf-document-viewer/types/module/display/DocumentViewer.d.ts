import { ViewerApplication } from 'pdfjs/web/component_viewer';
import type { PDFPageView } from 'pdfjs/types/web/pdf_page_view';
import ToolbarControl from './ToolbarControl';
import LayerManager from '../layers/LayerManager';
import WidgetHelper from '../widgets/WidgetHelper';
import type { AllLayerClass } from '../../types/layer';
import { WidgetMenu } from '../widgets/WidgetMenu';
declare class DocumentViewer extends ViewerApplication {
    #private;
    toolbarControl?: ToolbarControl;
    layerManager: LayerManager;
    usedLayer: Array<AllLayerClass>;
    widgetMenu: WidgetMenu | null;
    constructor(...args: any[]);
    setInitialView(storedHash: string, ...args: any[]): void;
    onCreate(): void;
    createSidebar(options: any): import("pdfjs/types/web/pdf_sidebar").PDFSidebar;
    destroy(): void;
    private savePreferenceOptions;
    getDocument(parameters: any): import("pdfjs/types/src/display/api").PDFDocumentLoadingTask;
    getMountedPages(): PDFPageView[] | void;
    get pages(): any[];
    getThumbnailImage(page: number): Promise<{
        page: number;
        url: any;
    } | null>;
    setTitle(title: string): void;
    bindEvents(): Promise<void>;
    useLayer(layer: AllLayerClass): void;
    getOutline(): Promise<any>;
    isScannedPage(page: number): Promise<any>;
    get widgetHelper(): WidgetHelper;
}
export default DocumentViewer;
