import { PDFPageProxy } from 'pdfjs/build/pdf';
import WorkerTransport from './WorkerTransport';
declare type ProxyContext = {
    app: any;
    transport: WorkerTransport;
};
/**
 * Allows controlling of the rendering tasks.
 */
declare class RenderTask {
    private _internalRenderTask;
    onContinue: any;
    constructor(internalRenderTask: any);
    /**
     * Promise for rendering task completion.
     * @type {Promise<void>}
     */
    get promise(): any;
    /**
     * Cancels the rendering task. If the task is currently rendering it will
     * not be cancelled until graphics pauses with a timeout. The promise that
     * this object extends will be rejected when cancelled.
     */
    cancel(): void;
}
declare class InternalRenderTask {
    #private;
    running: boolean;
    cancelled: boolean;
    params: any;
    capability: import("../../shared/util").Capability<unknown>;
    callback: any;
    task: RenderTask;
    private gfx;
    static get canvasInUse(): any;
    constructor({ callback, params, pageIndex, pdfDebug, }: any);
    get completed(): Promise<unknown>;
    initializeGraphics(pageProxy: any): void;
    cancel(error?: null): void;
}
export declare class PDFiumPageProxy extends PDFPageProxy {
    #private;
    context: ProxyContext;
    imageDataCache: Map<string, HTMLCanvasElement>;
    internalRenderTask?: InternalRenderTask;
    constructor(context: any, pageIndex: any, pageinfo: any, transport: any, ownerDocument: any, pdfDebug: any);
    get app(): any;
    get pdfiumTransport(): WorkerTransport;
    render({ canvasContext, viewport, }: any): RenderTask;
    cleanup(resetStats?: boolean): boolean;
    isScanned(): Promise<boolean>;
}
export declare function createPDFPageProxy(context: any, pageIndex: any, pageinfo: any, transport: any, ownerDocument: any, pdfDebug: any): PDFiumPageProxy;
export {};
