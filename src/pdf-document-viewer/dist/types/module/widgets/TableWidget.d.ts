import type { WidgetType, Dir, TableWidgetConfig, CtrlMapOnBarType, SubWidgetConfig, PageInfo } from '../../types/widget';
import BaseWidget from './BaseWidget';
import LineContainer from './table-widget-components/LineContainer';
import TableCell from './table-widget-components/TableCell';
declare class TableWidget extends BaseWidget {
    #private;
    MIN_WIDTH: number;
    MIN_HEIGHT: number;
    MIN_LINE_SPACE: number;
    widget: SVGGraphicsElement;
    lineWrapper: SVGGraphicsElement;
    widgetType: WidgetType;
    subType: string;
    className: string[];
    vLines: LineContainer;
    hLines: LineContainer;
    tableCell: TableCell;
    constructor(serializedData: TableWidgetConfig, pageInfo: PageInfo);
    render(container?: SVGSVGElement): void;
    drawing(x: number, y: number): void;
    drawingEnd(focus?: boolean): void;
    get minWidth(): number;
    get minHeight(): number;
    set colCount(n: number);
    get colCount(): number;
    set rowCount(n: number);
    get rowCount(): number;
    check(): boolean;
    get removing(): boolean;
    /**
     * 准备移动某条线，
     * 为表格添加临时的鼠标事件
     * @param path 当前线
     * @param dir 当前线的方向
     */
    readyMoveLine(path: SVGPathElement, dir: Dir): void;
    getCellPoint(x: number, y: number): {
        rowNum: number;
        colNum: number;
    };
    getRowHeight(rowNum: number): number;
    getColWidth(colNum: number): number;
    getControlClass(): CtrlMapOnBarType;
    toJSON(unit?: 'px' | 'pt'): TableWidgetConfig;
}
export declare function createSubTable({ subType, isResizeEnable, isAlwaysShow, isAlwaysShowControlBar, classNames, locked, autoFocusOnClick, autoFocusOnEnter, dataset, }: SubWidgetConfig): typeof TableWidget;
export default TableWidget;
