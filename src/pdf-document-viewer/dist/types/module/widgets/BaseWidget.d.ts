import EventBus from '../../shared/EventBus';
import type { ResizePoints, WidgetConfig, OutlineType, Point, CtrlMapOnBarType, PageInfo, Dataset } from '../../types/widget';
declare abstract class BaseWidget {
    #private;
    MIN_WIDTH: number;
    MIN_HEIGHT: number;
    abstract widget: SVGGraphicsElement;
    abstract widgetType: string;
    abstract subType: string;
    eventBus: EventBus;
    /**
     * 包裹控件的<g>标签
     */
    wrapper: SVGGElement;
    /**
     * 获取放大、缩小事件点的位置
     */
    resizePoints: ResizePoints;
    /**
     * 是否可被缩放
     */
    isResizeEnable: boolean;
    /**
     * 点击时聚焦
     */
    autoFocusOnClick: boolean;
    /**
     * 鼠标移入时聚焦
     */
    autoFocusOnEnter: boolean;
    initialized: boolean;
    currentResizePoint?: Point;
    abstract className: string[];
    dataset: Dataset;
    destroyed: boolean;
    id: string;
    pageInfo: PageInfo;
    tagUL?: HTMLUListElement;
    protected constructor(serializedData: WidgetConfig, pageInfo: PageInfo);
    render(container?: SVGSVGElement): void;
    set uuid(uuid: string);
    get uuid(): string;
    get scale(): number;
    get pageNumber(): number;
    get outline(): OutlineType;
    set outline(outline: OutlineType);
    get width(): number;
    get height(): number;
    set isAlwaysShow(val: boolean);
    get isAlwaysShow(): boolean;
    set isAlwaysShowControlBar(val: boolean);
    get isAlwaysShowControlBar(): boolean;
    drawingStart(): void;
    /**
     * 移动widget
     * @param x 鼠标x轴位移量
     * @param y 鼠标y轴位移量
     */
    move(x: number, y: number): void;
    moveEnd(): void;
    /**
     * 绘制widget
     * @param x 鼠标当前的x坐标
     * @param y 鼠标当前的y坐标
     */
    drawing(x: number, y: number): void;
    drawingEnd(focus?: boolean): void;
    get isDrawing(): boolean;
    get startPoint(): Point;
    get endPoint(): Point;
    setCtrlBarVisibility(visible?: boolean): void;
    setTagVisible(visible?: boolean): void;
    destroy(): void;
    set focus(focus: boolean);
    get focus(): boolean;
    set locked(val: boolean);
    get locked(): boolean;
    set tags(tags: string[]);
    get tags(): string[];
    getControlClass(): CtrlMapOnBarType;
    /**
     * 获取100%比例下的outline
     * @param unit
     */
    getOutline(unit?: 'px' | 'pt'): OutlineType;
    addClass(...classNames: string[]): void;
    removeClass(...classNames: string[]): void;
    /**
     * widget绘制结束时，
     * 需要检查当前widget是否符合某种要求，
     * 如果不符合要求，需要销毁
     * @return {boolean} 是否符合要求
     */
    abstract check(): boolean;
    /**
     * @param {'px' | 'pt'} unit 尺寸单位
     */
    toJSON(unit?: 'px' | 'pt'): WidgetConfig;
}
export default BaseWidget;
