import type { PageViewport } from 'pdfjs/types/web/interfaces';
import type BaseWidget from '../module/widgets/BaseWidget';
import type BaseCtrl from '../module/widgets/ctrl-components/BaseCtrl';
import type TableWidget from '../module/widgets/TableWidget';
import type RectWidget from '../module/widgets/RectWidget';
import type TextWidget from '../module/widgets/TextWidget';
export declare type WidgetType = 'select' | 'rect' | 'table' | 'polygon' | 'text' | string;
export declare type OutlineType = [number, number, number, number];
export declare type Dir = 'V' | 'H';
export declare type Cell = [number, number];
export declare type SpanCellData = Array<Array<Cell>>;
export declare type Dataset = Array<{
    key: string;
    value: string;
}>;
export interface WidgetMenuItem {
    icon: string;
    widgetType: WidgetType;
    title: string;
    el?: HTMLElement;
}
export interface ToolBarEvent {
    widgetType?: WidgetType;
}
export interface WidgetConfig {
    outline: OutlineType;
    id?: string;
    type: string;
    subType?: string;
    pageNumber?: number;
    tags?: string[];
    dataset?: Dataset;
}
export interface TableWidgetConfig extends WidgetConfig {
    hLines: number[];
    vLines: number[];
    spanCellData: SpanCellData;
}
export interface TextWidgetConfig extends WidgetConfig {
    outlines: OutlineType[];
    highlight: boolean;
    text?: string;
}
export declare type Point = [number, number];
export interface IResizePoint {
    position: Point;
    customClass: string;
}
export declare type ResizePoints = [IResizePoint] | [IResizePoint, IResizePoint, IResizePoint];
export interface DrawingData<T extends BaseWidget = BaseWidget> {
    x: number;
    y: number;
    source?: T;
}
export declare type ControlType = 'move' | 'delete' | 'h-line-add' | 'v-line-add' | 'line-delete' | 'span-cell' | 'split-cell' | 'copy-text' | 'highlight';
export interface CtrlActiveType {
    type?: ControlType;
}
export declare type CtrlBarType = 'fixed' | 'top' | 'right-top' | 'right-bottom' | 'bottom' | 'left-top';
export declare type CtrlMapOnBarType = {
    [key in CtrlBarType]?: typeof BaseCtrl[];
};
export declare type HandleDOMEvents = {
    [eventName: string]: (ctrl: BaseCtrl, event: Event) => void;
};
export interface CustomCtrlConfig {
    type: string;
    getControlBarLiDom: () => HTMLLIElement;
    handleDOMEvents?: HandleDOMEvents;
    classNames?: string[];
    canChecked?: boolean;
    checkedChange?: (ctrl: BaseCtrl) => void;
}
export interface SubWidgetConfig {
    subType: string;
    isResizeEnable?: boolean;
    isAlwaysShow?: boolean;
    isAlwaysShowControlBar?: boolean;
    classNames?: string[];
    locked?: boolean;
    autoFocusOnClick?: boolean;
    autoFocusOnEnter?: boolean;
    dataset?: Dataset;
}
export interface SubTableInterface extends TableWidget {
    subType: string;
}
export interface SubRectInterface extends TableWidget {
    subType: string;
}
export declare type AllWidget = TableWidget | RectWidget | SubTableInterface | SubRectInterface | TextWidget;
export declare type AllWidgetConfig = WidgetConfig | TableWidgetConfig | TextWidgetConfig;
export declare type AllWidgetClass = typeof TableWidget | typeof RectWidget;
export interface SubWidgetClassMap {
    [k: string]: AllWidgetClass;
}
export interface CtrlDoneData {
    type: ControlType;
    widget?: AllWidget;
}
export interface WidgetMouseEventData {
    eventName: string;
    widget: AllWidget;
    event: MouseEvent;
    [k: string]: any;
}
export interface PageInfo {
    scale: number;
    pageNumber: number;
    rotation: number;
    width: number;
    height: number;
    currentWidth: number;
    currentHeight: number;
    viewport: PageViewport;
    canvas: HTMLCanvasElement;
}
