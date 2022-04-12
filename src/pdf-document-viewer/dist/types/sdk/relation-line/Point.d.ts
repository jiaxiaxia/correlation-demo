export declare class Point {
    el: HTMLElement | null;
    container: HTMLElement | null;
    position: string;
    constructor(el: HTMLElement, container: HTMLElement, position?: string);
    get isVisible(): boolean;
}
