import type { ControlType } from '../../../types/widget';
import BaseCtrl from './BaseCtrl';
import type TableWidget from '../TableWidget';
export default class SpanCellCtrl extends BaseCtrl<TableWidget> {
    type: ControlType;
    icon: string;
    title: string;
    constructor(toolbar: any);
    onMousedown(): void;
    checkedChange(): void;
    handleWidgetChange(): void;
}
