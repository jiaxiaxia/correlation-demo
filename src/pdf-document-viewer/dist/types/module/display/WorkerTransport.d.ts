import type { PDFDocumentLoadingTask } from 'pdfjs/types/src/display/api';
import { MessageHandler } from 'pdfjs/build/pdf';
declare class WorkerTransport {
    messageHandler?: MessageHandler;
    _loadingTask: PDFDocumentLoadingTask | undefined;
    workerIsReady: import("../../shared/util").Capability<unknown>;
    _docHandlerCapability: import("../../shared/util").Capability<MessageHandler>;
    docHandler: MessageHandler | null;
    _docLoadedCapability: import("../../shared/util").Capability<unknown>;
    appOptions: any;
    constructor(messageHandler?: MessageHandler, appOptions?: any);
    setMessageHandler(docId: string): void;
    set loadingTask(loadingTask: PDFDocumentLoadingTask);
    get idPdfiumReady(): Promise<PromiseSettledResult<unknown>[]>;
    getImageData(data: any): Promise<ImageData>;
    getPageScannedResult(page: number): Promise<boolean>;
    getDocumentOutline(flattenOutline?: boolean): Promise<any>;
    getTextAtRect(data: any): Promise<any>;
    getIndexAtPos(data: any): Promise<any>;
    getTextAtPos(data: any): Promise<any>;
    getRectsAtPos(data: any): Promise<any>;
    cleanup(index: number): Promise<any>;
    destroyLibrary(): Promise<any>;
}
export default WorkerTransport;
