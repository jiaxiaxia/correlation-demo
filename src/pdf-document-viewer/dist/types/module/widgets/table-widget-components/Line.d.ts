import type LineContainer from './LineContainer';
import type TableWidget from '../TableWidget';
import type { Dir } from '../../../types/widget';
declare class Line {
    #private;
    wrapper: SVGGElement;
    backLine: SVGPathElement;
    frontLine: SVGPathElement;
    lineContainer: LineContainer;
    MIN_LINE_SPACE: number;
    table: TableWidget;
    pos: number;
    maxPos: number;
    minPos: number;
    per: number;
    cutData: Array<[number, number]>;
    constructor(pos: number | undefined, lineContainer: LineContainer, table: TableWidget);
    get dir(): Dir;
    get long(): number;
    /**
     * 绘制线
     * @param per 每条线之间的间距
     * @param total 线的长度
     */
    draw(per: number, total: number, lineNum: number): void;
    /**
     * 绘制结束，
     * 同时确定当前线的可移动区间
     */
    drawingEnd(preLine?: Line, nextLine?: Line): void;
    /**
     * 移动线的位置
     * @param x 水平方向位移量
     * @param y 垂直方向位移量
     */
    move(x: number, y: number): void;
    moveStart(): void;
    /**
     * 单条线移动结束后调用，以确定最终的pos。
     * 由于drawingEnd中会计算当前线的可移动区间，
     * 这个区间值的计算依赖相邻两条线的pos,
     * 因此，moveEnd的调用时机要早于drawingEnd
     */
    moveEnd(): void;
    revertCut(data: [number, number]): void;
    /**
     * 将当前线的[start, end]之间的部分裁剪掉
     * 该刚发可多次调用，每次传入的区间值必须和已有的区间值进行合并
     * @param cutData
     */
    cut(cutData: Array<[number, number]>): void;
    destroy(): void;
}
export default Line;
