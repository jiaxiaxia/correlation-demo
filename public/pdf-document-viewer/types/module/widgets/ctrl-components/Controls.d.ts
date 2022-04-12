import EventBus from '../../../shared/EventBus';
import type { AllWidget, ControlType } from '../../../types/widget';
import type WidgetHelper from '../WidgetHelper';
export default class Controls {
    #private;
    ctrlType?: ControlType;
    helper: WidgetHelper;
    eventBus: EventBus;
    widget?: AllWidget;
    constructor(helper: WidgetHelper);
    /**
     * 取消当前选择的control
     */
    cancel(): void;
    /**
     * 选中某个ctrl
     * @param ctrlType ctrl的类型，如果不传或不存在，相当于取消操作
     */
    select(ctrlType?: Exclude<ControlType, 'move'>): void;
    setWidget(widget?: AllWidget): void;
    destroy(): void;
}
