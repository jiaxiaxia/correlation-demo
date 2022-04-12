import { AllWidgetConfig } from '../../../types/widget';
import { Mark } from '../../../types/pdf';
import EventBus from '../../../shared/EventBus';
import DocumentViewer from '../../../module/display/DocumentViewer';
import { RelationLine } from '../../relation-line/RelationLine';
import './sdk-pdf-viewer.scss';
import type { GlobalOptions, Pdf, RelationLineConfig } from '../../../types/pdf';
export declare class PdfViewerContainer {
    #private;
    documents: Pdf[];
    globalOptions: GlobalOptions;
    mainDocumentApp: DocumentViewer | null;
    subDocumentApps: {
        [docId: number]: DocumentViewer | null;
    };
    container: HTMLElement | null;
    leftDocumentContainer: HTMLElement | null;
    leftSlot: HTMLElement | null;
    rightTopSlot: HTMLElement | null;
    rightBottomSlot: HTMLElement | null;
    centerSlot: HTMLElement | null;
    splitDom: HTMLElement | null;
    tabSlot: HTMLElement | null;
    rightDocumentContainer: HTMLElement | null;
    eventBus: EventBus;
    labelDataManager: any;
    relationLineConfig: RelationLineConfig | null;
    relationLine: RelationLine | null;
    constructor(pdfs: Pdf[], relationLineConfig: RelationLineConfig, globalOptions?: GlobalOptions);
    set enableSplit(value: boolean);
    get mainDocument(): Pdf | undefined;
    get subDocuments(): Pdf[];
    renderContainer(): void;
    renderMainDocument(): void;
    renderRightDocument(subDocument: Pdf): void;
    initRelationLine(): void;
    createPdfLocal(): void;
    render(root: HTMLElement): any;
    destroy(): void;
    changeRightDocument(id: number): any;
    drawWidgets(widgets: AllWidgetConfig[] | {
        [page: number]: AllWidgetConfig[];
    }, app: DocumentViewer | null): any;
    setLineInformationAndDraw(widgetsData: any): void;
    drawRightWidgetAndLine(mark: Mark): void;
    initLabelData(labelData: any): void;
    onSplitDraggend(event: any): void;
    jumpToPage(app: DocumentViewer, pageNumber: number): void;
}
