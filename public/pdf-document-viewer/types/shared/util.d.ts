/**
 * Creates a promise capability object.
 */
export declare type Capability<T> = {
    resolve: (data: any) => void;
    reject: (reason: Error) => void;
    promise: Promise<T>;
};
export declare function createPromiseCapability<T>(): Capability<T>;
export declare const utf16Decoder: TextDecoder;
export declare function icons(name: string, fill?: string): Element;
/**
 * 合并区间
 * 如果某两个区间存在重叠区域，应该合并为一个区间，
 * 如：[50, 100]与[20, 60] 合并后为 [20, 100]
 */
export declare function mergeInterval(arr: Array<[number, number]>): [number, number][];
export declare function instanceWorker(): Worker | null;
export declare function instanceWorker(workerSrc: string): Worker;
