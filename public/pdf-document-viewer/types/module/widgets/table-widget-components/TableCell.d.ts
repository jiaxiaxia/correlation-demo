import type TableWidget from '../TableWidget';
import type { WidgetMouseEventData, Cell, SpanCellData } from '../../../types/widget';
import type Line from './Line';
declare type CellData = Set<string>;
export default class TableCell {
    #private;
    table: TableWidget;
    wrapper: SVGGElement;
    cellDom: SVGRectElement;
    /**
     * 当前已合并的单元格的数据
     * 新增一条线或者删除一条线可能会导致整个单元格数据发生变化，需要重新计算
     */
    spanCellData: Set<CellData>;
    constructor(table: TableWidget, spanCellData?: SpanCellData);
    get vLines(): Line[];
    get hLines(): Line[];
    mousedown(eventData: WidgetMouseEventData): void;
    /**
     * 鼠标按下移动时，批量创建cell
     */
    mousemove(evt: MouseEvent): void;
    get cellData(): Cell[];
    get startCell(): Cell | undefined;
    get endCell(): Cell | undefined;
    mouseup(): void;
    /**
     * 合并单元格
     * @param revert 为true时，取消合并单元格
     */
    spanCell(revert?: boolean): void;
    selectCell(x: Array<[number, number]>, y?: any): void;
    selectCell(x: number, y: number): void;
    updateCell(): void;
    clean(): void;
    removeSpanCellData(cellData: CellData): void;
    getSpanCell(row: number, col: number): CellData | null;
    getSpanCellData(): SpanCellData;
}
export {};
