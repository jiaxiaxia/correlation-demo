import DocumentViewer from '../module/display/DocumentViewer';
import type { WidgetType } from './widget';
export interface GlobalOptions {
    renderEngine?: string;
    enableAutoUpdateTitle?: boolean;
    disableViewerToolbar?: boolean;
    local?: string;
    defaultScaleValue?: string;
    showWidgetMenu?: boolean;
    PDFiumWorkSrc?: string;
}
export declare type CorrelationType = 'formula' | 'left-right' | 'self' | 'table';
export interface CorrelationConfig {
    type: CorrelationType;
}
export interface Box {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
export declare type DataType = 'Mark' | 'Correlation';
export interface Mark {
    id?: number;
    pages: number[];
    boxes: {
        [key: number]: Box[];
    };
    doc_id: number;
    type?: WidgetType;
    subType?: string;
    tags?: number[];
    styles?: object;
    classNames?: string[];
    payload?: object;
    correlation_id?: number;
    correlation_ids?: number;
}
export interface Correlation {
    id: number;
    marks: Mark[];
    tags: number[];
    styles?: object;
    payload?: object;
}
export declare type AllLabelData = Mark | Correlation;
export interface Pdf {
    url: string;
    isMain: boolean;
    options?: GlobalOptions;
    apiPrefix: string;
    id: number | string;
    preLoadBaseBoxes?: (docId: number, pageNumber: any) => Mark[];
    registWidgets?: (app: DocumentViewer) => void;
    registControls?: (app: DocumentViewer) => void;
    loadDataByPage?: (pageNumber: number) => Array<Mark | Correlation>;
}
export interface RelationLineConfig {
    color: string;
    width: number;
    lineStyle: string;
}
export declare type slotPosition = 'right-top' | 'right-bottom' | 'center' | 'left';
