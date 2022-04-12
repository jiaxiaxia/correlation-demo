import BaseCtrl from './BaseCtrl';
import type { ControlType } from '../../../types/widget';
import type BaseWidget from '../BaseWidget';
export default class DelCtrl extends BaseCtrl {
    #private;
    type: ControlType;
    icon: string;
    title: string;
    canChecked: boolean;
    onDelete: () => void;
    constructor(toolbar: any, canChecked?: boolean);
    handleWidgetChange(widget?: BaseWidget): void;
    onMousedown(): void;
    checkedChange(): void;
}
