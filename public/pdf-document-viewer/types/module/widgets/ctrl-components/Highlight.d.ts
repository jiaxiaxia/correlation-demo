import BaseCtrl from './BaseCtrl';
import type { ControlType } from '../../../types/widget';
export default class Highlight extends BaseCtrl {
    type: ControlType;
    title: string;
    icon: string;
    canChecked: boolean;
    constructor(toolbar: any);
    highlight(): void;
    onMousedown(): void;
    handleWidgetChange(): void;
    checkedChange(): void;
}
