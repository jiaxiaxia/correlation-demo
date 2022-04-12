import EventBus from '../../shared/EventBus';
import type BaseCtrl from './ctrl-components/BaseCtrl';
import type BaseWidget from './BaseWidget';
import type { CtrlMapOnBarType } from '../../types/widget';
export default class WidgetControlBar<T extends BaseWidget = BaseWidget> {
    #private;
    CLASS_NAME: string;
    wrapper: HTMLElement;
    widget: T;
    widgetType: string;
    ctrls: Set<BaseCtrl<T>>;
    eventBus: EventBus;
    show: () => void;
    move: () => void;
    hide: () => void;
    destroy: () => void;
    constructor(widget: T, customCtrl?: CtrlMapOnBarType);
}
