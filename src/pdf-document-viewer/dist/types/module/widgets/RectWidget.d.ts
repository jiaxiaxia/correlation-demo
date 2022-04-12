import BaseWidget from './BaseWidget';
import type { WidgetConfig, WidgetType, CtrlMapOnBarType, SubWidgetConfig, PageInfo } from '../../types/widget';
declare class RectWidget extends BaseWidget {
    widgetType: WidgetType;
    subType: string;
    widget: SVGGraphicsElement;
    className: string[];
    constructor(serializedData: WidgetConfig, pageInfo: PageInfo);
    getControlClass(): CtrlMapOnBarType;
    check(): boolean;
}
export declare function createSubRect({ subType, isResizeEnable, isAlwaysShow, isAlwaysShowControlBar, classNames, locked, autoFocusOnClick, autoFocusOnEnter, dataset, }: SubWidgetConfig): typeof RectWidget;
export default RectWidget;
