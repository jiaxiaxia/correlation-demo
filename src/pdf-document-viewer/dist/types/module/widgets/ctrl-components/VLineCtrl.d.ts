import AddLineCtrl from './AddLineCtrl';
import type { Dir, ControlType } from '../../../types/widget';
export default class VLineCtrl extends AddLineCtrl {
    dir: Dir;
    type: ControlType;
    icon: string;
    title: string;
    constructor(...args: any[]);
}
