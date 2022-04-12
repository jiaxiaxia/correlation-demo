import EventBus from '../../shared/EventBus';
import type DocumentViewer from '../display/DocumentViewer';
import type { WidgetType, CtrlBarType, CustomCtrlConfig, AllWidget, SubWidgetClassMap, SubWidgetConfig } from '../../types/widget';
import Controls from './ctrl-components/Controls';
import type WidgetLayer from '../layers/WidgetLayer';
import { TableWidgetConfig, WidgetConfig } from '../../types/widget';
declare type WidgetConfigList = Array<WidgetConfig | TableWidgetConfig>;
declare class WidgetHelper {
    #private;
    viewerApp: DocumentViewer;
    wrapper?: HTMLElement;
    eventBus: EventBus;
    controls: Controls;
    widgetMap: Map<string, AllWidget>;
    widgetLoadTask: Map<number, any>;
    extraWidgetClass: SubWidgetClassMap;
    extraWidgetControl: {
        [k: string]: any;
    };
    constructor(viewerApp: DocumentViewer);
    /**
     * 注册自定义widget
     */
    registryWidget(widgetType: WidgetType, config: SubWidgetConfig): void;
    /**
     * 注册一个control
     * @param widgetType control属于的widget类型
     * @param ctrlBarType control属于的ctrlBar类型
     */
    registryControl(widgetType: string, ctrlBarType: CtrlBarType, config: CustomCtrlConfig): void;
    /**
     * 修改当前要绘制的widget类型
     * @param {string} widgetType
     */
    changeWidgetType(widgetType?: WidgetType): void;
    get widgetType(): string | undefined;
    addWidget(widget: AllWidget): void;
    getWidgetByID(id?: string): AllWidget | null;
    /**
     * 根据ID删除widget
     * @param id
     * @return {boolean} 是否删除成功
     */
    removeWidgetByID(id?: string): boolean;
    removeWidgetsBySubType(subType?: string): void;
    removeWidgets(): void;
    /**
     * 获取指定页的所有widget
     * @param pageNumber
     */
    getWidgetByPageNumber(pageNumber: number): AllWidget[];
    /**
     * 设置widgetLayer
     * @param pageNumber
     * @param widgetLayer
     */
    setWidgetLayer(pageNumber: number, widgetLayer: WidgetLayer): void;
    /**
     * 获取widgetLayer
     * @param pageNumber
     */
    getWidgetLayer(pageNumber: number): WidgetLayer | undefined;
    /**
     * 批量插入widget，相同id的widget会被覆盖
     * @param widgets
     * @param pageNumber
     */
    insertWidget(widgets: WidgetConfigList | undefined, pageNumber: number): AllWidget[];
    getWidgetDataByPageNumber(pageNum: number): WidgetConfig[];
    /**
     * 滚动到指定widget所在位置
     * @param pageNumber {number}
     * @param widgetId {string}
     * @param focus {boolean}
     * @param options {ScrollIntoViewOptions}
     */
    scrollToWidget(pageNumber: number, widgetId: string, focus?: boolean, options?: ScrollIntoViewOptions): void;
}
export default WidgetHelper;
