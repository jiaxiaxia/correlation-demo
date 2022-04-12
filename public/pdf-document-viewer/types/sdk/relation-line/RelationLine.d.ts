import { Point } from './Point';
import { RelationLineConfig } from '../../types/pdf';
import './relation-line.scss';
export declare class RelationLine {
    #private;
    container: HTMLElement | null;
    start: Point | null;
    end: Point | null;
    tail: number;
    color: string;
    width: number;
    lineStyle: string;
    lineDom: SVGElement | null;
    constructor(container: HTMLElement, config?: RelationLineConfig);
    updateConfig(config: RelationLineConfig): void;
    setStartPoint(point: Point, scrollContainer: any): void;
    setEndPoint(point: Point, scrollContainer: any): void;
    clearPoint(location: string): void;
    get isLeftHigherRight(): boolean;
    get distance(): number;
    get startPointXY(): number[] | null;
    get endPointNeedTail(): boolean;
    get endPointXY(): number[] | null;
    get breakPointXY(): number[][] | null;
    get isShowLine(): boolean;
    get points(): string | null;
    draw(): void;
    update(): void;
    clean(): void;
}