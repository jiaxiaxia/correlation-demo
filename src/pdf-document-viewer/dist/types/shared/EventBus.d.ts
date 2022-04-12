import { EventBus as EB } from 'pdfjs/web/component_viewer';
export default class EventBus extends EB {
    clear(eventName: string): void;
}
