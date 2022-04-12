import { PDFDocumentProxy } from 'pdfjs/build/pdf';
import WorkerTransport from './WorkerTransport';
export declare class PDFiumDocumentProxy extends PDFDocumentProxy {
    pdfiumTransport: WorkerTransport;
    constructor(pdfiumTransport: any, pdfInfo: any, _transport: any);
    getPdfiumOutline(): Promise<any>;
}
export declare function createPDFiumDocumentProxy(pdfiumTransport: any, pdfInfo: any, transport: any): PDFiumDocumentProxy;
