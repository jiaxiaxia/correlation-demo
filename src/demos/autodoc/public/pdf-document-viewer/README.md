# 背景

目前公司项目中使用的 PDF 展示控件使用的底层实现分两种，pdf.js 和 image-viewer。

在 image-viewer 未集成 pdflux.wasm 前，因依赖后端数据，不能独立展示 PDF 文件，集成后，可以不依赖后端数据
也能展示 PDF 文件。目前 image-viewer 在渲染性能方面表现不太好，后面期望能通过 web worker 来改善性能。
加入 web worker 后在代码层面调整比较大。从主要功能上来讲，集成 pdfium 后， image-viewer 和 pdf.js 没有太大区别，
所以 image-viewer-next 项目期望在 pdf.js 的基础上，实现 image-viewer 已有功能。

具体实现方式有两种：

1. 参考 pdf.js 代码，完全重写
2. 研究清楚 pdf.js 代码架构，只替换需要改动的代码(如替换某个方法，某个类实现)

两种方式各有利弊，下面是简单的分析。

#### 完全重写

完全重写好处是具体代码实现上不受 pdf.js 影响，后期开发功能受影响小，但工作量较大，因主要功能一样，最终可能是 pdf.js 目前实现的另一种写法。
在此过程不可避免会产生一些的 bug。

#### 替换代码

替换代码前期工作相对会更复杂、难度会更大，在集成 image-viewer 功能上会有一定限制，但难度不大。好处是可以把项目中 PDF 控件的代码统一，
减少后期不同项目的维护成本。另外也能更深入了解 pdf.js 代码架构和实现细节，避免后期踩一些不必要的坑。

目前拟采用第二种方式来实现。

# TODO

#### 基础功能

- [x] 使用 Pdfium 渲染 canvas
- [x] 使用 Pdfium 渲染文字层(暂使用 pdf.js 来渲染)

#### image-viewer 原功能集成(需要 2-3 周左右，如项目有紧急事宜，优先项目需求)

- [x] 在 PDF 页面显示不同类型的数据点
- [ ] 集成 header 中的功能(暂时只支持使用 pdf.js 默认 header 或项目自定义)
- [ ] 显示后端分析出的目录
- [x] 集成画框、表格标注功能

#### 功能规划

- [ ] 支持选中文字标注，分直接选文字或多边形(针对无文字的 PDF)两种 - `Doing`
- [ ] 优化统一目前标注数据格式，为协同标注做准备
  - [ ] 统一 widget 单位，默认使用 pt
  - [ ] 用户标注产生以及后端 API 给出的 widget 数据，需转换成 PDF 中对应 annotation 数据格式，由 AnnotationManager 管理
  - [ ] 优化 annotation 渲染逻辑，保证标注过程自然，无位置错位现象
  - [ ] 优化 WidgetMenu，保证用户可以正常标注、从文档中选文字
- [ ] 支持协同标注

# 开发

#### 本地开发

使用 `yarn dev` 启动开发环境，会默认显示一个本地 PDF 文件。

# 使用

#### 安装

```
yarn add pdf-document-viewer --save
or
npm install pdf-document-viewer --save
```

#### 在项目中使用

```javascript
// 使用语言包
// 复制 image-viewr-next/dist/assets/local 下的文件至项目静态文件目录中
import locale from "./static/locale/locale.properties?url";

const localeLink = document.createElement("link");
localeLink.rel = "resource";
localeLink.type = "application/l10n";
localeLink.href = locale;
document.head.appendChild(localeLink);
```

```javascript
import { createViewer, GlobalAppOptions } from "pdf-document-viewer";

import PDFluxWorkSrc from "pdf-document-viewer/dist/worker/pdflux.worker?url";
import PDFWorkSrc from "pdf-document-viewer/dist/worker/pdf.worker?url";

// pdf文件url
const pdfurl = "//...pdf";

// 生成基础配置
const appOptions = new GlobalAppOptions();
appOptions.set("defaultUrl", pdfurl);

// 设置worker
appOptions.set("workerSrc", worker);

// 如果指定了 renderEngine 为 pdfium ，则必须设置 PDFiumWorkerSrc、wasmPath
appOptions.set("renderEngine", "pdfium");
appOptions.set("PDFiumWorkerSrc", PDFluxWorkSrc);
// 设置 pdflux.wasm 文件的静态地址，默认为`/static/pdflux.wasm`，请确保本地开发、打包上线后都使用此 URL 下载到 pdflux.wasm 文件
appOptions.set("wasmPath", wasmPath);
// 可通过设置`disableExternalFont`来禁用下载缺失外部字体的功能
appOptions.set("disableExternalFont", false);

//如果不使用 pdf.js 默认 header，可通过设置`disableViewerToolbar`来禁用
//如果项目需要自定义 header，目前需要在对应的项目实现
appOptions.set("disableViewerToolbar", true);

// 指定渲染容器
const appContainer = document.body;
const app = createViewer(appContainer, appOptions);

// 获取目录
// 目录数据需要等 documentinit 事件后才能获取到
app.initializedPromise.then(() => {
  app.eventBus.on("documentinit", async () => {
    // 获取 pdfium 识别出来的目录
    const outline = await app.getOutline();
  });
});
```
