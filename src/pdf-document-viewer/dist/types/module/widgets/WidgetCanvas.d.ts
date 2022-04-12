import EventBus from '../../shared/EventBus';
import type { WidgetConfig, WidgetType, TableWidgetConfig, SubWidgetClassMap, AllWidget, PageInfo } from '../../types/widget';
import RectWidget from './RectWidget';
import TableWidget from './TableWidget';
import TextWidget from './TextWidget';
declare class WidgetCanvas {
    #private;
    svgDom: SVGSVGElement;
    widgetType?: WidgetType;
    currentWidget?: AllWidget;
    eventBus: EventBus;
    subWidgetClassMap?: SubWidgetClassMap;
    pageInfo: PageInfo;
    constructor(pageInfo: PageInfo, subWidgetClassMap?: SubWidgetClassMap, widgetData?: any[]);
    createWidget(widgetConfig: TableWidgetConfig | WidgetConfig, autoRender?: boolean, pageInfo?: PageInfo): TableWidget | RectWidget | TextWidget | undefined;
    drawWidgetInBatch(widgetConfigList?: Array<TableWidgetConfig | WidgetConfig>, pageInfo?: PageInfo): AllWidget[];
    clearCanvas(): void;
}
export default WidgetCanvas;
