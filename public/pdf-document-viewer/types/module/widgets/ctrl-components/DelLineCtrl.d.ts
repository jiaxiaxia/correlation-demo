import type { ControlType } from '../../../types/widget';
import type TableWidget from '../TableWidget';
import BaseCtrl from './BaseCtrl';
export default class DelLineCtrl extends BaseCtrl<TableWidget> {
    #private;
    type: ControlType;
    icon: string;
    title: string;
    canChecked: boolean;
    constructor(toolbar: any);
    onDelete(e: MouseEvent): void;
    handleWidgetChange(widget?: TableWidget): void;
    checkedChange(): void;
}
