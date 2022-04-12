import BaseCtrl from './BaseCtrl';
import type { ControlType } from '../../../types/widget';
export default class MoveCtrl extends BaseCtrl {
    type: ControlType;
    icon: string;
    title: string;
    constructor(toolbar: any);
    onMousedown(): void;
    checkedChange(): void;
    handleWidgetChange(): void;
}
