import type { ViewerApplication } from 'pdfjs/types/web/custom-app/application';
import type DocumentViewer from './DocumentViewer';
declare type ScaleItem = {
    value: string;
    label: string;
};
declare type Helper = Pick<ViewerApplication, 'helper'>['helper'];
declare class ToolbarControl {
    MAX_SCALE: 10;
    MIN_SCALE: 0.1;
    viewerApp: DocumentViewer;
    helper: Helper;
    zoomIn: Pick<Helper, 'webViewerZoomIn'>['webViewerZoomIn'];
    zoomOut: Pick<Helper, 'webViewerZoomOut'>['webViewerZoomOut'];
    zoomReset: Pick<Helper, 'webViewerZoomReset'>['webViewerZoomReset'];
    goPreviousPage: Pick<Helper, 'webViewerPreviousPage'>['webViewerPreviousPage'];
    goNextPage: Pick<Helper, 'webViewerNextPage'>['webViewerNextPage'];
    goFirstPage: Pick<Helper, 'webViewerFirstPage'>['webViewerFirstPage'];
    goLastPage: Pick<Helper, 'webViewerLastPage'>['webViewerLastPage'];
    print: Pick<Helper, 'webViewerPrint'>['webViewerPrint'];
    download: Pick<Helper, 'webViewerDownload'>['webViewerDownload'];
    openFile: Pick<Helper, 'webViewerOpenFile'>['webViewerOpenFile'];
    constructor(viewerApp: DocumentViewer);
    /**
     * 获取缩放预设值
     */
    getScalePresetValues(): ScaleItem[];
    /**
     * 缩放
     * @param value
     */
    setViewerScale(value: string): void;
    /**
     * 跳转至指定页
     * @param value
     */
    goPageByNumber(value: number): void;
    /**
     * 旋转页面
     * @param dir 旋转方向 1 顺时针， -1 逆时针
     */
    rotate(dir?: -1 | 1): void;
}
export default ToolbarControl;
