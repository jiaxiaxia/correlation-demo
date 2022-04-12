import Line from './Line';
import type TableWidget from '../TableWidget';
import type { Dir } from '../../../types/widget';
declare class LineContainer {
    dir: Dir;
    table: TableWidget;
    wrapper: SVGGElement;
    lines: Array<Line>;
    constructor(dir: Dir, table: TableWidget, linePos?: number[]);
    get long(): number;
    get lineCount(): number;
    /**
     * 设置线的数量
     * @param lineCount 要增加的线的数量
     */
    setLine(lineCount: number): void;
    drawLines(): void;
    /**
     * 批量调用线的drawingEnd方法，
     * 每条线的drawingEnd方法可以为其确定可移动区间
     */
    drawingEnd(): void;
    /**
     * 重新绘制一些line,
     * @param lines 线的数据
     * @param lineNumStart 序号的起点，起点及起点后面的线会被重新绘制
     */
    /**
     * 在指定位置插入一条线
     * @param pos 线的位置
     * @param lineNum 线号,从1开始
     */
    insertLine(pos: number, lineNum: number): void;
    deleteLine(g: SVGGraphicsElement): void;
    toJSON(scale: number, unit?: string): number[];
}
export default LineContainer;
