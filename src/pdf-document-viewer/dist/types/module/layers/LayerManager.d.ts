import type BaseLayer from './BaseLayer';
import type DocumentViewer from '../display/DocumentViewer';
declare class LayerManager {
    layers: Map<string, Map<number, BaseLayer>>;
    viewerApp: DocumentViewer;
    constructor(viewerApp: DocumentViewer);
    getLayer(layerClassName: string, pageNumber: number): BaseLayer | undefined;
    setLayer(layerClassName: string, pageNumber: number, layer: BaseLayer): Map<string, Map<number, BaseLayer>>;
}
export default LayerManager;
