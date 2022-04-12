import AddLineCtrl from './AddLineCtrl';
import type { Dir, ControlType } from '../../../types/widget';
export default class HLineCtrl extends AddLineCtrl {
    dir: Dir;
    type: ControlType;
    icon: string;
    title: string;
    constructor(...args: any[]);
}
