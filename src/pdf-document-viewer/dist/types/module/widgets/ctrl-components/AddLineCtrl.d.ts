import type { ControlType, Dir } from '../../../types/widget';
import type TableWidget from '../TableWidget';
import BaseCtrl from './BaseCtrl';
export default abstract class AddLineCtrl extends BaseCtrl<TableWidget> {
    #private;
    abstract type: ControlType;
    abstract dir: Dir;
    canChecked: boolean;
    protected constructor(toolbar: any);
    mousemove(e: MouseEvent): void;
    mouseup(): void;
    handleWidgetChange(widget?: TableWidget): void;
    checkedChange(): void;
}
