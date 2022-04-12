import EventBus from '../../shared/EventBus';
import { WidgetMenuItem } from '../../types/widget';
declare class WidgetMenu {
    #private;
    options: any;
    dom: Element | null;
    isOpened: boolean;
    eventBus: EventBus;
    menuItems: WidgetMenuItem[];
    constructor(options: any);
    setOpen(value: boolean): void;
    private createView;
    private handleUpdate;
    get selected(): null | WidgetMenuItem;
    /**
     * 修改当前要绘制的widget类型
     * @param menuItem
     */
    set selected(menuItem: null | WidgetMenuItem);
}
export { WidgetMenu, };
