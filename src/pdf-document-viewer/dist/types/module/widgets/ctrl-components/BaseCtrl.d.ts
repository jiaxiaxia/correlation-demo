import type { AllWidget, ControlType, CustomCtrlConfig, HandleDOMEvents } from '../../../types/widget';
import type BaseWidget from '../BaseWidget';
declare abstract class BaseCtrl<T extends BaseWidget = BaseWidget> {
    #private;
    li: HTMLLIElement;
    abstract type: ControlType | string;
    abstract icon: string;
    abstract title: string;
    destroyed: boolean;
    canChecked: boolean;
    toolbar: any;
    handleDOMEvents?: HandleDOMEvents;
    protected constructor(toolbar: any);
    get widget(): any;
    get eventBus(): any;
    onMousedown(): void;
    createLi(li?: HTMLLIElement): void;
    set checked(val: boolean);
    get checked(): boolean;
    destroy(): void;
    abstract checkedChange(ctrl?: BaseCtrl<T>): void;
    abstract handleWidgetChange(widget?: AllWidget): void;
}
export declare function create({ type, getControlBarLiDom, handleDOMEvents, classNames, canChecked, checkedChange, }: CustomCtrlConfig): any;
export default BaseCtrl;
