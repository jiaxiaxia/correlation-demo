export declare class LabelDataManager {
    labelData: never[];
    constructor(labelData?: any);
    get correlations(): never[];
    add(data: []): void;
    getDataById(id: number): undefined;
    getRightMarksById(id: number): any;
    get marks(): any;
    getMarksByPage(docId: number, pageNumber: number): any;
    get widgtes(): import("lodash").Dictionary<any[]>;
    getCorrelationWidget(docId: number, correlationId: number): any;
}
