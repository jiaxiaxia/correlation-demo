import type { Dir, OutlineType, Point, ResizePoints, SpanCellData } from '../types/widget';
export declare function createSVGElement<K extends keyof SVGElementTagNameMap>(tagName: K, ...classNames: string[]): SVGElementTagNameMap[K];
export declare function createSVG(): SVGSVGElement;
export declare function getResizePointMap(resizePoints: ResizePoints): Map<SVGCircleElement, Point>;
export declare function createLi(iconName: string, title: string): HTMLLIElement;
export declare function pxToPt(px: number): number;
export declare function ptToPx(value: number): number;
export declare function rotateSpanCellData(spanCellData: SpanCellData, rowCount: number, colCount: number, rotation: number): SpanCellData;
export declare function rotateLine(lines: number[], dir: Dir, rotation: number, width: number, height: number): number[];
/**
 * 旋转widget，传入的宽高值必须为100%
 * @param width 页面宽度
 * @param height 页面高度
 * @param rotation 页面旋转角度
 * @param outline widget的outline
 */
export declare function rotateOutline({ width, height, rotation, }: any, outline: OutlineType): OutlineType;
export declare const nanoid: () => string;
/**
 * 以页面左上角为原点(0,0), 统一outline数据，使得outline左上角(x0,y0)始终小于右下角(x1, y1)
 * @param outline
 */
export declare const normalizeOutline: (outline: OutlineType) => OutlineType;
