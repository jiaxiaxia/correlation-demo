import BaseCtrl from './BaseCtrl';
import type { ControlType } from '../../../types/widget';
export default class CopyText extends BaseCtrl {
    type: ControlType;
    title: string;
    icon: string;
    canChecked: boolean;
    constructor(toolbar: any);
    onCopy(): void;
    onMousedown(): void;
    handleWidgetChange(): void;
    checkedChange(): void;
}
