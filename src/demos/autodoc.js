export default `
<template>
  <div ref="sdk" class="pdf-wrapper"></div>
</template>
<script setup>
import viewer from "pdf-document-viewer";
// import PDFiumWorkSrc from "pdf-document-viewer/PDFiumWork?url";
// import "pdf-document-viewer/style.css";

import { onMounted, ref, watch } from 'vue';
function loadStyle() {
  console.log('loadStyle');
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
  	link.rel = 'stylesheet'
  	link.href = '../pdf-document-viewer/dist/style.css'
    link.onload = resolve
    link.onerror = reject
  	document.body.appendChild(link)
  })
}
const { PdfViewerContainer } = viewer;
const config = {
  documents: [
    {
      url: '/documents/6402.pdf',
      isMain: true,
      id: 'prospectus',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget1',
          isResizeEnable: false,
          isAlwaysShow: true,
          isAlwaysControlBar: false,
          style: {
            stroke: 'blue',
            focus: {
              stroke: 'blue',
              'stroke-width': '2',
            },
          },
          locked: false,
          autoFocusOnClick: false,
          autoFocusOnEnter: false,
          dataset: [
            {
              key: 'tag',
              value: 'error',
            },
          ],
        },
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6402.pdf',
      isMain: false,
      id: 'prospectus',
      registWidgets: [

        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6404.pdf',
      isMain: false,
      id: 'audit_report_1',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6403.pdf',
      isMain: false,
      id: 'annual_report_1',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6398.pdf',
      isMain: false,
      id: 'release_announcement',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6401.pdf',
      isMain: false,
      id: 'prospectus_summary',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6396.pdf',
      isMain: false,
      id: 'other_report_3',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6397.pdf',
      isMain: false,
      id: 'legal_opinion',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6400.pdf',
      isMain: false,
      id: 'rating_report',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
    {
      url: '/documents/6399.pdf',
      isMain: false,
      id: 'tracking_rating_report',
      registWidgets: [
        {
          type: 'rect',
          subType: 'widget2',
          isAlwaysShow: true,
          style: {
            stroke: 'blue',
            border: '2px solid blue',
            focus: {
              stroke: 'red',
            },
          },
        },
      ],
    },
  ],
  correlations: [ 
    {
        "id": "bfefc4a8cbb2e25a66c881d6f86beb49",
        "marks": [
            {
                "id": "bfefc4a8cbb2e25a66c881d6f86beb49",
                "pages": [
                    2
                ],
                "boxes": {
                    "2": [
                        {
                            "left": 98.0473,
                            "top": 398.2271,
                            "right": 134.0879,
                            "bottom": 406.7827
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget1",
                "payload": {
                    "outlines": [
                        [
                            98.0473,
                            398.2271,
                            134.0879,
                            406.7827
                        ]
                    ],
                    "correlation_ids": [
                        52239100,
                        52239099,
                        52239098,
                        52239097,
                        52239096,
                        52239095,
                        52239094,
                        52222807,
                        52222806,
                        52222805,
                        52222804,
                        52222803,
                        52222802,
                        52222801,
                        52218738
                    ],
                    "type": "chars",
                    "equal": true,
                    "color": "0x0000ff",
                    "outline_checksum": "bfefc4a8cbb2e25a66c881d6f86beb49",
                    "cross_page": false,
                    "value": "69.39%",
                    "index": 262171,
                    "index_type": "paragraph",
                    "expand": true
                }
            },
            {
                "id": 117448166,
                "pages": [
                    9
                ],
                "boxes": {
                    "9": [
                        {
                            "left": 285.3506,
                            "top": 368.9622,
                            "right": 308.1902,
                            "bottom": 376.3356
                        }
                    ]
                },
                "doc_id": "release_announcement",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239100,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "release_announcement",
                    "item": {
                        "id": 117448166,
                        "correlation_id": 52239100,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                285.3506,
                                                368.9622,
                                                308.1902,
                                                376.3356
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 458805,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年1-9月/2021年9月末"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 15,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        285.3506,
                                                        368.9622,
                                                        308.1902,
                                                        376.3356
                                                    ],
                                                    "page": 9,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 15,
                                "time": "2021年1-9月/2021年9月末",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年1-9月/2021年9月末",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "发行人",
                                    "合并"
                                ],
                                "value_unit": "%",
                                "table_index": 458805,
                                "head_attributes": [
                                    "发行人",
                                    "合并"
                                ]
                            },
                            "checksum": "736b44a0b6b8e224362a2a4a356a1f77",
                            "full_boxes": [
                                {
                                    "box": [
                                        285.3506,
                                        368.9622,
                                        308.1902,
                                        376.3356
                                    ],
                                    "page": 9,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        285.3506,
                                        368.9622,
                                        308.1902,
                                        376.3356
                                    ],
                                    "page": 9,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 9,
                        "doclet_type": "release_announcement",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448164,
                "pages": [
                    43
                ],
                "boxes": {
                    "43": [
                        {
                            "left": 237.3764,
                            "top": 564.2237,
                            "right": 269.0922,
                            "bottom": 571.6393
                        }
                    ]
                },
                "doc_id": "rating_report",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239099,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "rating_report",
                    "item": {
                        "id": 117448164,
                        "correlation_id": 52239099,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                237.3764,
                                                564.2237,
                                                269.0922,
                                                571.6393
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 393687,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年9月30日"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 7,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        237.3764,
                                                        564.2237,
                                                        269.0922,
                                                        571.6393
                                                    ],
                                                    "page": 43,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 7,
                                "time": "2021年9月30日",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年9月30日",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "发行人",
                                    "合并"
                                ],
                                "value_unit": "%",
                                "table_index": 393687,
                                "head_attributes": [
                                    "发行人",
                                    "合并"
                                ]
                            },
                            "checksum": "bfff402bcea56000f4cbed01ac8d4a01",
                            "full_boxes": [
                                {
                                    "box": [
                                        237.3764,
                                        564.2237,
                                        269.0922,
                                        571.6393
                                    ],
                                    "page": 43,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        237.3764,
                                        564.2237,
                                        269.0922,
                                        571.6393
                                    ],
                                    "page": 43,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 43,
                        "doclet_type": "rating_report",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448162,
                "pages": [
                    104
                ],
                "boxes": {
                    "104": [
                        {
                            "left": 238.4559,
                            "top": 518.6268,
                            "right": 261.2954,
                            "bottom": 525.9023
                        }
                    ]
                },
                "doc_id": "prospectus_summary",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239098,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus_summary",
                    "item": {
                        "id": 117448162,
                        "correlation_id": 52239098,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                238.4559,
                                                518.6268,
                                                261.2954,
                                                525.9023
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 328668,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年1-9月/2021年9月末"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 15,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        238.4559,
                                                        518.6268,
                                                        261.2954,
                                                        525.9023
                                                    ],
                                                    "page": 104,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "公司"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "公司"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 15,
                                "time": "2021年1-9月/2021年9月末",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年1-9月/2021年9月末",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "公司"
                                ],
                                "value_unit": "%",
                                "table_index": 328668,
                                "head_attributes": [
                                    "公司"
                                ]
                            },
                            "checksum": "93a9b2501c5b83d2a7d1488e2bfdd552",
                            "full_boxes": [
                                {
                                    "box": [
                                        238.4559,
                                        518.6268,
                                        261.2954,
                                        525.9023
                                    ],
                                    "page": 104,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        238.4559,
                                        518.6268,
                                        261.2954,
                                        525.9023
                                    ],
                                    "page": 104,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 104,
                        "doclet_type": "prospectus_summary",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448160,
                "pages": [
                    15
                ],
                "boxes": {
                    "15": [
                        {
                            "left": 252.8481,
                            "top": 160.3977,
                            "right": 284.5638,
                            "bottom": 167.9266
                        }
                    ]
                },
                "doc_id": "prospectus_summary",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239097,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus_summary",
                    "item": {
                        "id": 117448160,
                        "correlation_id": 52239097,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                252.8481,
                                                160.3977,
                                                284.5638,
                                                167.9266
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 327859,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年9月30日"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 7,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        252.8481,
                                                        160.3977,
                                                        284.5638,
                                                        167.9266
                                                    ],
                                                    "page": 15,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 7,
                                "time": "2021年9月30日",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年9月30日",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "发行人",
                                    "合并"
                                ],
                                "value_unit": "%",
                                "table_index": 327859,
                                "head_attributes": [
                                    "发行人",
                                    "合并"
                                ]
                            },
                            "checksum": "40698b8fa87d4160d60cea4874028f12",
                            "full_boxes": [
                                {
                                    "box": [
                                        252.8481,
                                        160.3977,
                                        284.5638,
                                        167.9266
                                    ],
                                    "page": 15,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        252.8481,
                                        160.3977,
                                        284.5638,
                                        167.9266
                                    ],
                                    "page": 15,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 15,
                        "doclet_type": "prospectus_summary",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448158,
                "pages": [
                    114
                ],
                "boxes": {
                    "114": [
                        {
                            "left": 238.4559,
                            "top": 518.6268,
                            "right": 261.2954,
                            "bottom": 525.9023
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239096,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus",
                    "item": {
                        "id": 117448158,
                        "correlation_id": 52239096,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                238.4559,
                                                518.6268,
                                                261.2954,
                                                525.9023
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 263294,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年1-9月/2021年9月末"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 15,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        238.4559,
                                                        518.6268,
                                                        261.2954,
                                                        525.9023
                                                    ],
                                                    "page": 114,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "公司"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "公司"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 15,
                                "time": "2021年1-9月/2021年9月末",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年1-9月/2021年9月末",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "公司"
                                ],
                                "value_unit": "%",
                                "table_index": 263294,
                                "head_attributes": [
                                    "公司"
                                ]
                            },
                            "checksum": "4640c75244fa78c874be8b0cc7b1c351",
                            "full_boxes": [
                                {
                                    "box": [
                                        238.4559,
                                        518.6268,
                                        261.2954,
                                        525.9023
                                    ],
                                    "page": 114,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        238.4559,
                                        518.6268,
                                        261.2954,
                                        525.9023
                                    ],
                                    "page": 114,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 114,
                        "doclet_type": "prospectus",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448156,
                "pages": [
                    25
                ],
                "boxes": {
                    "25": [
                        {
                            "left": 252.8481,
                            "top": 160.3977,
                            "right": 284.5638,
                            "bottom": 167.9266
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239095,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus",
                    "item": {
                        "id": 117448156,
                        "correlation_id": 52239095,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                252.8481,
                                                160.3977,
                                                284.5638,
                                                167.9266
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 262474,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年9月30日"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 7,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        252.8481,
                                                        160.3977,
                                                        284.5638,
                                                        167.9266
                                                    ],
                                                    "page": 25,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "发行人"
                                        },
                                        {
                                            "text": "合并"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 7,
                                "time": "2021年9月30日",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年9月30日",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "发行人",
                                    "合并"
                                ],
                                "value_unit": "%",
                                "table_index": 262474,
                                "head_attributes": [
                                    "发行人",
                                    "合并"
                                ]
                            },
                            "checksum": "b4d13283949a16cf6fc62dd2ac955705",
                            "full_boxes": [
                                {
                                    "box": [
                                        252.8481,
                                        160.3977,
                                        284.5638,
                                        167.9266
                                    ],
                                    "page": 25,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        252.8481,
                                        160.3977,
                                        284.5638,
                                        167.9266
                                    ],
                                    "page": 25,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 25,
                        "doclet_type": "prospectus",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117448154,
                "pages": [
                    0
                ],
                "boxes": {
                    "0": [
                        {
                            "left": 239.8951,
                            "top": 554.8845,
                            "right": 262.7346,
                            "bottom": 562.1523
                        }
                    ]
                },
                "doc_id": "other_report_3",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52239094,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "other_report_3",
                    "item": {
                        "id": 117448154,
                        "correlation_id": 52239094,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "background": {
                                            "outline": [
                                                239.8951,
                                                554.8845,
                                                262.7346,
                                                562.1523
                                            ],
                                            "border-color": "0x0000ff",
                                            "border-width": 2,
                                            "border-radius": 0,
                                            "background-color": "0x00000000"
                                        }
                                    }
                                ]
                            },
                            "entity": {
                                "id": 196611,
                                "type": "table",
                                "quadruple": {
                                    "time": [
                                        {
                                            "text": "2021年1-9月/2021年9月末"
                                        }
                                    ],
                                    "value": [
                                        {
                                            "col": 1,
                                            "end": 5,
                                            "row": 15,
                                            "text": "69.39",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        239.8951,
                                                        554.8845,
                                                        262.7346,
                                                        562.1523
                                                    ],
                                                    "page": 0,
                                                    "type": "box",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 0
                                        },
                                        {
                                            "text": "%"
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "text": "资产负债率"
                                        },
                                        {
                                            "text": "公司"
                                        }
                                    ],
                                    "head_attributes": [
                                        {
                                            "text": "公司"
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "row": 15,
                                "time": "2021年1-9月/2021年9月末",
                                "value": "69.39",
                                "xpath": "",
                                "column": 1,
                                "orig_time": "2021年1-9月/2021年9月末",
                                "value_pos": [
                                    0,
                                    100
                                ],
                                "attributes": [
                                    "资产负债率",
                                    "公司"
                                ],
                                "value_unit": "%",
                                "table_index": 196611,
                                "head_attributes": [
                                    "公司"
                                ]
                            },
                            "checksum": "e7db24199a70f02de786610c40de7671",
                            "full_boxes": [
                                {
                                    "box": [
                                        239.8951,
                                        554.8845,
                                        262.7346,
                                        562.1523
                                    ],
                                    "page": 0,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        239.8951,
                                        554.8845,
                                        262.7346,
                                        562.1523
                                    ],
                                    "page": 0,
                                    "type": "box",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 0,
                        "doclet_type": "other_report_3",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413750,
                "pages": [
                    11
                ],
                "boxes": {
                    "11": [
                        {
                            "left": 90.1555,
                            "top": 697.527,
                            "right": 118.8801,
                            "bottom": 711.6865
                        },
                        {
                            "left": 120.2293,
                            "top": 696.9276,
                            "right": 194.6193,
                            "bottom": 711.8063
                        },
                        {
                            "left": 430.3236,
                            "top": 699.4299,
                            "right": 475.4343,
                            "bottom": 710.1132
                        }
                    ]
                },
                "doc_id": "release_announcement",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222807,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "release_announcement",
                    "item": {
                        "id": 117413750,
                        "correlation_id": 52222807,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "公",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    90.1555,
                                                    697.527,
                                                    104.7876,
                                                    711.6865
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "司",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    105.3873,
                                                    697.8566,
                                                    118.8801,
                                                    711.4917
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    118.8801,
                                                    711.6865
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    90.1555,
                                                    711.6865
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "资",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    120.2293,
                                                    696.9276,
                                                    134.6216,
                                                    711.7614
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "产",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    135.1463,
                                                    697.0026,
                                                    149.6135,
                                                    711.7014
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "负",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    150.1682,
                                                    697.0475,
                                                    164.3806,
                                                    711.7914
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "债",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    165.1302,
                                                    697.1973,
                                                    179.6124,
                                                    711.8063
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "率",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Microsoft YaHei",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    180.2571,
                                                    696.9576,
                                                    194.6193,
                                                    711.7014
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    194.6193,
                                                    711.8063
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    120.2293,
                                                    711.8063
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "6",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    430.3236,
                                                    699.4449,
                                                    436.5902,
                                                    709.8884
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "9",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    437.7146,
                                                    699.4449,
                                                    443.9662,
                                                    709.9184
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": ".",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    445.7203,
                                                    708.2852,
                                                    447.3394,
                                                    709.9184
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "3",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    449.0185,
                                                    699.4449,
                                                    454.6555,
                                                    709.8884
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "9",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    456.4995,
                                                    699.4449,
                                                    462.7511,
                                                    709.9184
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "%",
                                                "font-size": 15,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    463.9955,
                                                    699.4299,
                                                    475.4343,
                                                    710.1132
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    475.4343,
                                                    710.1132
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    430.3236,
                                                    710.1132
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 458828,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 164,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        430.3236,
                                                        699.4299,
                                                        475.4343,
                                                        710.1132
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 158
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 134,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        120.2293,
                                                        696.9276,
                                                        194.6193,
                                                        711.8063
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 129
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 129,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        90.1555,
                                                        697.527,
                                                        118.8801,
                                                        711.6865
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 127
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 117459971,
                                "para_index": 458828,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 158,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 129,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 127,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 118
                            },
                            "checksum": "3be52fbf93c77a06da2a94b9fd13fb12",
                            "full_boxes": [
                                {
                                    "box": [
                                        90.1555,
                                        697.527,
                                        118.8801,
                                        711.6865
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        120.2293,
                                        696.9276,
                                        194.6193,
                                        711.8063
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        430.3236,
                                        699.4299,
                                        475.4343,
                                        710.1132
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        430.3236,
                                        699.4299,
                                        475.4343,
                                        710.1132
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 11,
                        "doclet_type": "release_announcement",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413748,
                "pages": [
                    53
                ],
                "boxes": {
                    "53": [
                        {
                            "left": 208.3479,
                            "top": 545.701,
                            "right": 229.8524,
                            "bottom": 556.6091
                        },
                        {
                            "left": 232.479,
                            "top": 545.5692,
                            "right": 290.8996,
                            "bottom": 556.7529
                        },
                        {
                            "left": 473.2814,
                            "top": 547.4271,
                            "right": 509.3221,
                            "bottom": 555.8539
                        }
                    ]
                },
                "doc_id": "rating_report",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222806,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "rating_report",
                    "item": {
                        "id": 117413748,
                        "correlation_id": 52222806,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 53,
                                        "chars": [
                                            {
                                                "page": 53,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    208.3479,
                                                    545.701,
                                                    218.7943,
                                                    556.5612
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    220.4375,
                                                    546.0367,
                                                    229.8524,
                                                    556.6091
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    229.8524,
                                                    556.6091
                                                ],
                                                "page": 53,
                                                "color": "0x0000ff",
                                                "start": [
                                                    208.3479,
                                                    556.6091
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 53,
                                        "chars": [
                                            {
                                                "page": 53,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    232.479,
                                                    545.5692,
                                                    242.6015,
                                                    556.657
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    243.9568,
                                                    545.5692,
                                                    254.739,
                                                    556.7529
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    256.4181,
                                                    545.5692,
                                                    266.2528,
                                                    556.7529
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    267.9919,
                                                    545.6171,
                                                    278.8101,
                                                    556.7529
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    280.0334,
                                                    545.5692,
                                                    290.8996,
                                                    556.7529
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    290.8996,
                                                    556.7529
                                                ],
                                                "page": 53,
                                                "color": "0x0000ff",
                                                "start": [
                                                    232.479,
                                                    556.7529
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 53,
                                        "chars": [
                                            {
                                                "page": 53,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    473.2814,
                                                    547.4391,
                                                    478.2948,
                                                    555.6741
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    479.2422,
                                                    547.4391,
                                                    484.2436,
                                                    555.6981
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    485.6108,
                                                    554.4035,
                                                    486.9061,
                                                    555.6981
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    488.2494,
                                                    547.4391,
                                                    492.759,
                                                    555.6741
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    494.2342,
                                                    547.4391,
                                                    499.2355,
                                                    555.6981
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 53,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    500.171,
                                                    547.4271,
                                                    509.3221,
                                                    555.8539
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    509.3221,
                                                    555.8539
                                                ],
                                                "page": 53,
                                                "color": "0x0000ff",
                                                "start": [
                                                    473.2814,
                                                    555.8539
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 393789,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 48,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        473.2814,
                                                        547.4271,
                                                        509.3221,
                                                        555.8539
                                                    ],
                                                    "page": 53,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 42
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 16,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        232.479,
                                                        545.5692,
                                                        290.8996,
                                                        556.7529
                                                    ],
                                                    "page": 53,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        208.3479,
                                                        545.701,
                                                        229.8524,
                                                        556.6091
                                                    ],
                                                    "page": 53,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 100809984,
                                "para_index": 393789,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 42,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "cedca4ed5d43ca7241caedb74e001407",
                            "full_boxes": [
                                {
                                    "box": [
                                        208.3479,
                                        545.701,
                                        229.8524,
                                        556.6091
                                    ],
                                    "page": 53,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        232.479,
                                        545.5692,
                                        290.8996,
                                        556.7529
                                    ],
                                    "page": 53,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        473.2814,
                                        547.4271,
                                        509.3221,
                                        555.8539
                                    ],
                                    "page": 53,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        473.2814,
                                        547.4271,
                                        509.3221,
                                        555.8539
                                    ],
                                    "page": 53,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 53,
                        "doclet_type": "rating_report",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413746,
                "pages": [
                    13
                ],
                "boxes": {
                    "13": [
                        {
                            "left": 207.9881,
                            "top": 491.1607,
                            "right": 229.6005,
                            "bottom": 502.0688
                        },
                        {
                            "left": 232.2271,
                            "top": 491.0289,
                            "right": 290.6477,
                            "bottom": 502.2126
                        },
                        {
                            "left": 473.4014,
                            "top": 492.8868,
                            "right": 509.442,
                            "bottom": 501.3136
                        }
                    ]
                },
                "doc_id": "rating_report",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222805,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "rating_report",
                    "item": {
                        "id": 117413746,
                        "correlation_id": 52222805,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 13,
                                        "chars": [
                                            {
                                                "page": 13,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    207.9881,
                                                    491.1607,
                                                    218.4345,
                                                    502.0208
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    220.1856,
                                                    491.4964,
                                                    229.6005,
                                                    502.0688
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    229.6005,
                                                    502.0688
                                                ],
                                                "page": 13,
                                                "color": "0x0000ff",
                                                "start": [
                                                    207.9881,
                                                    502.0688
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 13,
                                        "chars": [
                                            {
                                                "page": 13,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    232.2271,
                                                    491.0289,
                                                    242.3497,
                                                    502.1167
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    243.7049,
                                                    491.0289,
                                                    254.4871,
                                                    502.2126
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    256.1663,
                                                    491.0289,
                                                    266.0009,
                                                    502.2126
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    267.74,
                                                    491.0768,
                                                    278.5582,
                                                    502.2126
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    279.7815,
                                                    491.0289,
                                                    290.6477,
                                                    502.2126
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    290.6477,
                                                    502.2126
                                                ],
                                                "page": 13,
                                                "color": "0x0000ff",
                                                "start": [
                                                    232.2271,
                                                    502.2126
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 13,
                                        "chars": [
                                            {
                                                "page": 13,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    473.4014,
                                                    492.8988,
                                                    478.4147,
                                                    501.1338
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    479.3622,
                                                    492.8988,
                                                    484.3635,
                                                    501.1578
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    485.7308,
                                                    499.8632,
                                                    487.0261,
                                                    501.1578
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    488.3694,
                                                    492.8988,
                                                    492.8789,
                                                    501.1338
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    494.3542,
                                                    492.8988,
                                                    499.3555,
                                                    501.1578
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 13,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    500.291,
                                                    492.8868,
                                                    509.442,
                                                    501.3136
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    509.442,
                                                    501.3136
                                                ],
                                                "page": 13,
                                                "color": "0x0000ff",
                                                "start": [
                                                    473.4014,
                                                    501.3136
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 393346,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 48,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        473.4014,
                                                        492.8868,
                                                        509.442,
                                                        501.3136
                                                    ],
                                                    "page": 13,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 42
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 16,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        232.2271,
                                                        491.0289,
                                                        290.6477,
                                                        502.2126
                                                    ],
                                                    "page": 13,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        207.9881,
                                                        491.1607,
                                                        229.6005,
                                                        502.0688
                                                    ],
                                                    "page": 13,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 100696576,
                                "para_index": 393346,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 42,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "d07016f7247812ee647ce20e297ab838",
                            "full_boxes": [
                                {
                                    "box": [
                                        207.9881,
                                        491.1607,
                                        229.6005,
                                        502.0688
                                    ],
                                    "page": 13,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        232.2271,
                                        491.0289,
                                        290.6477,
                                        502.2126
                                    ],
                                    "page": 13,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        473.4014,
                                        492.8868,
                                        509.442,
                                        501.3136
                                    ],
                                    "page": 13,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        473.4014,
                                        492.8868,
                                        509.442,
                                        501.3136
                                    ],
                                    "page": 13,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 13,
                        "doclet_type": "rating_report",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413744,
                "pages": [
                    151
                ],
                "boxes": {
                    "151": [
                        {
                            "left": 225.1389,
                            "top": 572.5508,
                            "right": 248.0826,
                            "bottom": 583.4702
                        },
                        {
                            "left": 252.1484,
                            "top": 572.4188,
                            "right": 316.3259,
                            "bottom": 583.6143
                        },
                        {
                            "left": 79.937,
                            "top": 598.6675,
                            "right": 115.9776,
                            "bottom": 607.2231
                        }
                    ]
                },
                "doc_id": "prospectus_summary",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222804,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus_summary",
                    "item": {
                        "id": 117413744,
                        "correlation_id": 52222804,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 151,
                                        "chars": [
                                            {
                                                "page": 151,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    225.1389,
                                                    572.5508,
                                                    235.5853,
                                                    583.4222
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    238.6676,
                                                    572.8868,
                                                    248.0826,
                                                    583.4702
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    248.0826,
                                                    583.4702
                                                ],
                                                "page": 151,
                                                "color": "0x0000ff",
                                                "start": [
                                                    225.1389,
                                                    583.4702
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 151,
                                        "chars": [
                                            {
                                                "page": 151,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    252.1484,
                                                    572.4188,
                                                    262.2709,
                                                    583.5182
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    265.0655,
                                                    572.4188,
                                                    275.8477,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    278.966,
                                                    572.4188,
                                                    288.8007,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    291.979,
                                                    572.4668,
                                                    302.7972,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    305.4597,
                                                    572.4188,
                                                    316.3259,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    316.3259,
                                                    583.6143
                                                ],
                                                "page": 151,
                                                "color": "0x0000ff",
                                                "start": [
                                                    252.1484,
                                                    583.6143
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 151,
                                        "chars": [
                                            {
                                                "page": 151,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    79.937,
                                                    598.6796,
                                                    84.9503,
                                                    607.0432
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    85.8978,
                                                    598.6796,
                                                    90.8991,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    92.2664,
                                                    605.7592,
                                                    93.5617,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    94.905,
                                                    598.6796,
                                                    99.4145,
                                                    607.0432
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    100.8897,
                                                    598.6796,
                                                    105.8911,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 151,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    106.8265,
                                                    598.6675,
                                                    115.9776,
                                                    607.2231
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    115.9776,
                                                    607.2231
                                                ],
                                                "page": 151,
                                                "color": "0x0000ff",
                                                "start": [
                                                    79.937,
                                                    607.2231
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 329080,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 46,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        79.937,
                                                        598.6675,
                                                        115.9776,
                                                        607.2231
                                                    ],
                                                    "page": 151,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 40
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 16,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        252.1484,
                                                        572.4188,
                                                        316.3259,
                                                        583.6143
                                                    ],
                                                    "page": 151,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        225.1389,
                                                        572.5508,
                                                        248.0826,
                                                        583.4702
                                                    ],
                                                    "page": 151,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 84244480,
                                "para_index": 329080,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 40,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "2d683c26ccc1d7a0fec32ab24c9e83a0",
                            "full_boxes": [
                                {
                                    "box": [
                                        225.1389,
                                        572.5508,
                                        248.0826,
                                        583.4702
                                    ],
                                    "page": 151,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        252.1484,
                                        572.4188,
                                        316.3259,
                                        583.6143
                                    ],
                                    "page": 151,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        79.937,
                                        598.6675,
                                        115.9776,
                                        607.2231
                                    ],
                                    "page": 151,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        79.937,
                                        598.6675,
                                        115.9776,
                                        607.2231
                                    ],
                                    "page": 151,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 151,
                        "doclet_type": "prospectus_summary",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413742,
                "pages": [
                    2
                ],
                "boxes": {
                    "2": [
                        {
                            "left": 249.7377,
                            "top": 372.1403,
                            "right": 271.3501,
                            "bottom": 383.0598
                        },
                        {
                            "left": 274.0846,
                            "top": 372.0083,
                            "right": 332.937,
                            "bottom": 383.2038
                        },
                        {
                            "left": 98.0473,
                            "top": 398.2271,
                            "right": 134.0879,
                            "bottom": 406.7827
                        }
                    ]
                },
                "doc_id": "prospectus_summary",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222803,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus_summary",
                    "item": {
                        "id": 117413742,
                        "correlation_id": 52222803,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 2,
                                        "chars": [
                                            {
                                                "page": 2,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    249.7377,
                                                    372.1403,
                                                    260.1841,
                                                    383.0118
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    261.9351,
                                                    372.4763,
                                                    271.3501,
                                                    383.0598
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    271.3501,
                                                    383.0598
                                                ],
                                                "page": 2,
                                                "color": "0x0000ff",
                                                "start": [
                                                    249.7377,
                                                    383.0598
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 2,
                                        "chars": [
                                            {
                                                "page": 2,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    274.0846,
                                                    372.0083,
                                                    284.2071,
                                                    383.1078
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    285.6704,
                                                    372.0083,
                                                    296.4526,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    298.2396,
                                                    372.0083,
                                                    308.0743,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    309.9213,
                                                    372.0563,
                                                    320.7395,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    322.0708,
                                                    372.0083,
                                                    332.937,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    332.937,
                                                    383.2038
                                                ],
                                                "page": 2,
                                                "color": "0x0000ff",
                                                "start": [
                                                    274.0846,
                                                    383.2038
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 2,
                                        "chars": [
                                            {
                                                "page": 2,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    98.0473,
                                                    398.2391,
                                                    103.0606,
                                                    406.6027
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    104.0081,
                                                    398.2391,
                                                    109.0094,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    110.3766,
                                                    405.3188,
                                                    111.6719,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    113.0152,
                                                    398.2391,
                                                    117.5248,
                                                    406.6027
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    119,
                                                    398.2391,
                                                    124.0013,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 2,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    124.9368,
                                                    398.2271,
                                                    134.0879,
                                                    406.7827
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    134.0879,
                                                    406.7827
                                                ],
                                                "page": 2,
                                                "color": "0x0000ff",
                                                "start": [
                                                    98.0473,
                                                    406.7827
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 327700,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 49,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        98.0473,
                                                        398.2271,
                                                        134.0879,
                                                        406.7827
                                                    ],
                                                    "page": 2,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 43
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 19,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        274.0846,
                                                        372.0083,
                                                        332.937,
                                                        383.2038
                                                    ],
                                                    "page": 2,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 14
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 14,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        249.7377,
                                                        372.1403,
                                                        271.3501,
                                                        383.0598
                                                    ],
                                                    "page": 2,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 12
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 83891200,
                                "para_index": 327700,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "ee2f56af07fb36b22ee5009b3d1c4fa5",
                                        "position": -1,
                                        "word_index": 9
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "1816554c7680012a76b2e8349b7afea4",
                                        "position": 43,
                                        "word_index": 21
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "f0bfc6bf657474aa8dfda08c4108620e",
                                        "position": 14,
                                        "word_index": 12
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "3d58909f27cd25ea44c9554eb2cc6d9b",
                                            "position": 12,
                                            "word_index": [
                                                11
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "bfefc4a8cbb2e25a66c881d6f86beb49",
                            "full_boxes": [
                                {
                                    "box": [
                                        249.7377,
                                        372.1403,
                                        271.3501,
                                        383.0598
                                    ],
                                    "page": 2,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        274.0846,
                                        372.0083,
                                        332.937,
                                        383.2038
                                    ],
                                    "page": 2,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        98.0473,
                                        398.2271,
                                        134.0879,
                                        406.7827
                                    ],
                                    "page": 2,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        98.0473,
                                        398.2271,
                                        134.0879,
                                        406.7827
                                    ],
                                    "page": 2,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 2,
                        "doclet_type": "prospectus_summary",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413740,
                "pages": [
                    161
                ],
                "boxes": {
                    "161": [
                        {
                            "left": 225.1389,
                            "top": 572.5508,
                            "right": 248.0826,
                            "bottom": 583.4702
                        },
                        {
                            "left": 252.1484,
                            "top": 572.4188,
                            "right": 316.3259,
                            "bottom": 583.6143
                        },
                        {
                            "left": 79.937,
                            "top": 598.6675,
                            "right": 115.9776,
                            "bottom": 607.2231
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222802,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus",
                    "item": {
                        "id": 117413740,
                        "correlation_id": 52222802,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 161,
                                        "chars": [
                                            {
                                                "page": 161,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    225.1389,
                                                    572.5508,
                                                    235.5853,
                                                    583.4222
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    238.6676,
                                                    572.8868,
                                                    248.0826,
                                                    583.4702
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    248.0826,
                                                    583.4702
                                                ],
                                                "page": 161,
                                                "color": "0x0000ff",
                                                "start": [
                                                    225.1389,
                                                    583.4702
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 161,
                                        "chars": [
                                            {
                                                "page": 161,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    252.1484,
                                                    572.4188,
                                                    262.2709,
                                                    583.5182
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    265.0655,
                                                    572.4188,
                                                    275.8477,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    278.966,
                                                    572.4188,
                                                    288.8007,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    291.979,
                                                    572.4668,
                                                    302.7972,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    305.4597,
                                                    572.4188,
                                                    316.3259,
                                                    583.6143
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    316.3259,
                                                    583.6143
                                                ],
                                                "page": 161,
                                                "color": "0x0000ff",
                                                "start": [
                                                    252.1484,
                                                    583.6143
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 161,
                                        "chars": [
                                            {
                                                "page": 161,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    79.937,
                                                    598.6796,
                                                    84.9503,
                                                    607.0432
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    85.8978,
                                                    598.6796,
                                                    90.8991,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    92.2664,
                                                    605.7592,
                                                    93.5617,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    94.905,
                                                    598.6796,
                                                    99.4145,
                                                    607.0432
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    100.8897,
                                                    598.6796,
                                                    105.8911,
                                                    607.0671
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 161,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    106.8265,
                                                    598.6675,
                                                    115.9776,
                                                    607.2231
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    115.9776,
                                                    607.2231
                                                ],
                                                "page": 161,
                                                "color": "0x0000ff",
                                                "start": [
                                                    79.937,
                                                    607.2231
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 263709,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 46,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        79.937,
                                                        598.6675,
                                                        115.9776,
                                                        607.2231
                                                    ],
                                                    "page": 161,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 40
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 16,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        252.1484,
                                                        572.4188,
                                                        316.3259,
                                                        583.6143
                                                    ],
                                                    "page": 161,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        225.1389,
                                                        572.5508,
                                                        248.0826,
                                                        583.4702
                                                    ],
                                                    "page": 161,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 67509504,
                                "para_index": 263709,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 40,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "49ef6e2f4135685e1c635362bc791e41",
                            "full_boxes": [
                                {
                                    "box": [
                                        225.1389,
                                        572.5508,
                                        248.0826,
                                        583.4702
                                    ],
                                    "page": 161,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        252.1484,
                                        572.4188,
                                        316.3259,
                                        583.6143
                                    ],
                                    "page": 161,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        79.937,
                                        598.6675,
                                        115.9776,
                                        607.2231
                                    ],
                                    "page": 161,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        79.937,
                                        598.6675,
                                        115.9776,
                                        607.2231
                                    ],
                                    "page": 161,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 161,
                        "doclet_type": "prospectus",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117413738,
                "pages": [
                    11
                ],
                "boxes": {
                    "11": [
                        {
                            "left": 225.1389,
                            "top": 217.3177,
                            "right": 248.0826,
                            "bottom": 228.2372
                        },
                        {
                            "left": 252.1484,
                            "top": 217.1857,
                            "right": 316.3259,
                            "bottom": 228.3812
                        },
                        {
                            "left": 79.937,
                            "top": 243.3144,
                            "right": 115.9776,
                            "bottom": 251.87
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52222801,
                "payload": {
                    "content_type": "quadruple",
                    "sub_doclet_type": "prospectus",
                    "item": {
                        "id": 117413738,
                        "correlation_id": 52222801,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    225.1389,
                                                    217.3177,
                                                    235.5853,
                                                    228.1892
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    238.6676,
                                                    217.6537,
                                                    248.0826,
                                                    228.2372
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    248.0826,
                                                    228.2372
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    225.1389,
                                                    228.2372
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    252.1484,
                                                    217.1857,
                                                    262.2709,
                                                    228.2852
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    265.0655,
                                                    217.1857,
                                                    275.8477,
                                                    228.3812
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    278.966,
                                                    217.1857,
                                                    288.8007,
                                                    228.3812
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    291.979,
                                                    217.2337,
                                                    302.7972,
                                                    228.3812
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "率",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    305.4597,
                                                    217.1857,
                                                    316.3259,
                                                    228.3812
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    316.3259,
                                                    228.3812
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    252.1484,
                                                    228.3812
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 11,
                                        "chars": [
                                            {
                                                "page": 11,
                                                "text": "6",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    79.937,
                                                    243.3264,
                                                    84.9503,
                                                    251.69
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    85.8978,
                                                    243.3264,
                                                    90.8991,
                                                    251.714
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    92.2664,
                                                    250.4061,
                                                    93.5617,
                                                    251.714
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    94.905,
                                                    243.3264,
                                                    99.4145,
                                                    251.69
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    100.8897,
                                                    243.3264,
                                                    105.8911,
                                                    251.714
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 11,
                                                "text": "%",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    106.8265,
                                                    243.3144,
                                                    115.9776,
                                                    251.87
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    115.9776,
                                                    251.87
                                                ],
                                                "page": 11,
                                                "color": "0x0000ff",
                                                "start": [
                                                    79.937,
                                                    251.87
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "value": "69.39%",
                            "entity": {
                                "id": 262291,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 46,
                                            "text": "69.39%",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        79.937,
                                                        243.3144,
                                                        115.9776,
                                                        251.87
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 40
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 16,
                                            "text": "资产负债率",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        252.1484,
                                                        217.1857,
                                                        316.3259,
                                                        228.3812
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        225.1389,
                                                        217.3177,
                                                        248.0826,
                                                        228.2372
                                                    ],
                                                    "page": 11,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "sid": 67146496,
                                "para_index": 262291,
                                "txt_triple": {
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_RATE$",
                                        "value": "69.39%",
                                        "checksum": "81d0d90ba113d8cecb65886a1c72be08",
                                        "position": 40,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_RATE$",
                                        "value": "资产负债率",
                                        "checksum": "70fde0d3de3e43d1f0bfe7001294539d",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ]
                                },
                                "index_in_para": 0
                            },
                            "checksum": "eec64249adf4992653353acd2f4a50ad",
                            "full_boxes": [
                                {
                                    "box": [
                                        225.1389,
                                        217.3177,
                                        248.0826,
                                        228.2372
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        252.1484,
                                        217.1857,
                                        316.3259,
                                        228.3812
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        79.937,
                                        243.3144,
                                        115.9776,
                                        251.87
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        79.937,
                                        243.3144,
                                        115.9776,
                                        251.87
                                    ],
                                    "page": 11,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": null,
                        "page": 11,
                        "doclet_type": "prospectus",
                        "para_index": null,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117405241,
                "pages": [
                    115
                ],
                "boxes": {
                    "115": [
                        {
                            "left": 213.2653,
                            "top": 461.7961,
                            "right": 234.7697,
                            "bottom": 472.7155
                        },
                        {
                            "left": 237.3244,
                            "top": 461.6641,
                            "right": 272.0097,
                            "bottom": 472.8596
                        },
                        {
                            "left": 188.1928,
                            "top": 486.6589,
                            "right": 282.8219,
                            "bottom": 498.1183
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52218738,
                "payload": {
                    "content_type": "formula",
                    "sub_doclet_type": null,
                    "item": {
                        "id": 117405241,
                        "correlation_id": 52218738,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 115,
                                        "chars": [
                                            {
                                                "page": 115,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    213.2653,
                                                    461.7961,
                                                    223.7117,
                                                    472.6675
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    225.3548,
                                                    462.132,
                                                    234.7697,
                                                    472.7155
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    234.7697,
                                                    472.7155
                                                ],
                                                "page": 115,
                                                "color": "0x0000ff",
                                                "start": [
                                                    213.2653,
                                                    472.7155
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 115,
                                        "chars": [
                                            {
                                                "page": 115,
                                                "text": "总",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    237.3244,
                                                    461.7121,
                                                    247.4949,
                                                    472.2476
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "资",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    249.6297,
                                                    461.6641,
                                                    259.7523,
                                                    472.7635
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "产",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    261.2275,
                                                    461.6641,
                                                    272.0097,
                                                    472.8596
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    272.0097,
                                                    472.8596
                                                ],
                                                "page": 115,
                                                "color": "0x0000ff",
                                                "start": [
                                                    237.3244,
                                                    472.8596
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 115,
                                        "chars": [
                                            {
                                                "page": 115,
                                                "text": "1",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    188.1928,
                                                    487.8948,
                                                    191.3231,
                                                    496.1264
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "0",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    193.2181,
                                                    487.8948,
                                                    198.3513,
                                                    496.2584
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": ",",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    199.4307,
                                                    494.9385,
                                                    201.1698,
                                                    498.1183
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "4",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    201.9734,
                                                    487.8948,
                                                    207.3585,
                                                    496.1264
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "0",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    208.21,
                                                    487.8948,
                                                    213.3433,
                                                    496.2584
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "4",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    213.9669,
                                                    487.8948,
                                                    219.352,
                                                    496.1264
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": ",",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    220.4194,
                                                    494.9385,
                                                    222.1585,
                                                    498.1183
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    223.2619,
                                                    487.8948,
                                                    227.7715,
                                                    496.2584
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "2",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    229.0188,
                                                    487.8948,
                                                    234.26,
                                                    496.1264
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "7",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    235.2075,
                                                    488.0628,
                                                    240.2328,
                                                    496.2824
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    241.6121,
                                                    494.9745,
                                                    242.9074,
                                                    496.2824
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "7",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    244.2027,
                                                    488.0628,
                                                    249.228,
                                                    496.2824
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "5",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    250.3314,
                                                    488.0628,
                                                    254.9609,
                                                    496.2584
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "万",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    260.1061,
                                                    486.8989,
                                                    270.6005,
                                                    497.2904
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 115,
                                                "text": "元",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    271.9077,
                                                    486.6589,
                                                    282.8219,
                                                    497.2904
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    282.8219,
                                                    498.1183
                                                ],
                                                "page": 115,
                                                "color": "0x0000ff",
                                                "start": [
                                                    188.1928,
                                                    498.1183
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "entity": {
                                "id": 263316,
                                "sid": 67408896,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 77,
                                            "text": "10,404,327.75万元",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        188.1928,
                                                        486.6589,
                                                        282.8219,
                                                        498.1183
                                                    ],
                                                    "page": 115,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 62
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 14,
                                            "text": "总资产",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        237.3244,
                                                        461.6641,
                                                        272.0097,
                                                        472.8596
                                                    ],
                                                    "page": 115,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        213.2653,
                                                        461.7961,
                                                        234.7697,
                                                        472.7155
                                                    ],
                                                    "page": 115,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "left": -1,
                                "name": "资产总额",
                                "index": 18,
                                "right": -1,
                                "value": [
                                    "10,404,327.75"
                                ],
                                "operator": "p&v",
                                "text_word": null,
                                "value_unit": [
                                    "万元"
                                ],
                                "triple_data": {
                                    "sid": 67408896,
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_MONEY$",
                                        "value": "10,404,327.75万元",
                                        "checksum": "2f8df2ae21d4516a9da66eda2884a922",
                                        "position": 62,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_MONEY$",
                                        "value": "总资产",
                                        "checksum": "62d91321a1c0299def3b80e757c5e451",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ],
                                    "paragraph_index": 263316,
                                    "index_in_paragraph": 0
                                },
                                "triple_index": 0,
                                "table_triples": null
                            },
                            "checksum": "108e21bb438d24ecfbfef395d184309d",
                            "relation": {
                                "left": -1,
                                "index": 18,
                                "right": -1,
                                "value": [
                                    "10,404,327.75"
                                ],
                                "result": [
                                    {
                                        "value": "10,404,327.75",
                                        "value_unit": "万元",
                                        "quadruple_left": 0,
                                        "quadruple_right": 0
                                    }
                                ],
                                "operator": "p&v",
                                "value_unit": [
                                    "万元"
                                ],
                                "quadruple_index": 0
                            },
                            "full_boxes": [
                                {
                                    "box": [
                                        213.2653,
                                        461.7961,
                                        234.7697,
                                        472.7155
                                    ],
                                    "page": 115,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        237.3244,
                                        461.6641,
                                        272.0097,
                                        472.8596
                                    ],
                                    "page": 115,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        188.1928,
                                        486.6589,
                                        282.8219,
                                        498.1183
                                    ],
                                    "page": 115,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        188.1928,
                                        486.6589,
                                        282.8219,
                                        498.1183
                                    ],
                                    "page": 115,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": 4,
                        "page": 115,
                        "doclet_type": "prospectus",
                        "para_index": 263316,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            },
            {
                "id": 117405240,
                "pages": [
                    147
                ],
                "boxes": {
                    "147": [
                        {
                            "left": 213.2653,
                            "top": 372.1403,
                            "right": 234.7697,
                            "bottom": 383.0598
                        },
                        {
                            "left": 237.4683,
                            "top": 372.0083,
                            "right": 284.399,
                            "bottom": 383.2038
                        },
                        {
                            "left": 214.2188,
                            "top": 397.0032,
                            "right": 305.2498,
                            "bottom": 408.4626
                        }
                    ]
                },
                "doc_id": "prospectus",
                "type": "rect",
                "subType": "widget2",
                "correlation_id": 52218738,
                "payload": {
                    "content_type": "formula",
                    "sub_doclet_type": null,
                    "item": {
                        "id": 117405240,
                        "correlation_id": 52218738,
                        "data": {
                            "svg": {
                                "highlight": [
                                    {
                                        "from": "preattributes",
                                        "page": 147,
                                        "chars": [
                                            {
                                                "page": 147,
                                                "text": "公",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    213.2653,
                                                    372.1403,
                                                    223.7117,
                                                    383.0118
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "司",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    225.3548,
                                                    372.4763,
                                                    234.7697,
                                                    383.0598
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    234.7697,
                                                    383.0598
                                                ],
                                                "page": 147,
                                                "color": "0x0000ff",
                                                "start": [
                                                    213.2653,
                                                    383.0598
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "attribute",
                                        "page": 147,
                                        "chars": [
                                            {
                                                "page": 147,
                                                "text": "负",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    237.4683,
                                                    372.0083,
                                                    247.303,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "债",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    249.162,
                                                    372.0563,
                                                    259.9802,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "总",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    261.5513,
                                                    372.0563,
                                                    271.7219,
                                                    382.5918
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "额",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    273.341,
                                                    372.0923,
                                                    284.399,
                                                    383.2038
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    284.399,
                                                    383.2038
                                                ],
                                                "page": 147,
                                                "color": "0x0000ff",
                                                "start": [
                                                    237.4683,
                                                    383.2038
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    },
                                    {
                                        "from": "value",
                                        "page": 147,
                                        "chars": [
                                            {
                                                "page": 147,
                                                "text": "7",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    214.2188,
                                                    398.4071,
                                                    219.2441,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": ",",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    220.4194,
                                                    405.2828,
                                                    222.1585,
                                                    408.4626
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "2",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    223.022,
                                                    398.2391,
                                                    228.2632,
                                                    406.4707
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "1",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    230.1702,
                                                    398.2391,
                                                    233.3005,
                                                    406.4707
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "9",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    235.2435,
                                                    398.2391,
                                                    240.2448,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": ",",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    241.4082,
                                                    405.2828,
                                                    243.1472,
                                                    408.4626
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "8",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    244.4905,
                                                    398.2391,
                                                    249.0601,
                                                    406.6027
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "3",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    250.2474,
                                                    398.2391,
                                                    254.757,
                                                    406.6027
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "1",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    257.1557,
                                                    398.2391,
                                                    260.286,
                                                    406.4707
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": ".",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    262.6008,
                                                    405.3188,
                                                    263.8961,
                                                    406.6267
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "4",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    264.9395,
                                                    398.2391,
                                                    270.3246,
                                                    406.4707
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "5",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "Times New Roman",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    271.3201,
                                                    398.4071,
                                                    275.9496,
                                                    406.6027
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "万",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    282.4141,
                                                    397.2431,
                                                    292.9085,
                                                    407.6346
                                                ],
                                                "text-decoration": "none"
                                            },
                                            {
                                                "page": 147,
                                                "text": "元",
                                                "font-size": 12,
                                                "font-color": "0x0000ff",
                                                "font-style": "normal",
                                                "font-family": "SimSun",
                                                "font-weight": "normal",
                                                "char-position": [
                                                    294.3357,
                                                    397.0032,
                                                    305.2498,
                                                    407.6346
                                                ],
                                                "text-decoration": "none"
                                            }
                                        ],
                                        "lines": [
                                            {
                                                "end": [
                                                    305.2498,
                                                    408.4626
                                                ],
                                                "page": 147,
                                                "color": "0x0000ff",
                                                "start": [
                                                    214.2188,
                                                    408.4626
                                                ],
                                                "width": 2
                                            }
                                        ]
                                    }
                                ]
                            },
                            "entity": {
                                "id": 263558,
                                "sid": 67470848,
                                "type": "paragraph",
                                "quadruple": {
                                    "time": [
                                        {
                                            "end": 7,
                                            "text": "2021年9月末",
                                            "boxes": null,
                                            "start": -1
                                        }
                                    ],
                                    "value": [
                                        {
                                            "end": 77,
                                            "text": "7,219,831.45万元",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        214.2188,
                                                        397.0032,
                                                        305.2498,
                                                        408.4626
                                                    ],
                                                    "page": 147,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 63
                                        }
                                    ],
                                    "attributes": [
                                        {
                                            "end": 15,
                                            "text": "负债总额",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        237.4683,
                                                        372.0083,
                                                        284.399,
                                                        383.2038
                                                    ],
                                                    "page": 147,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 11
                                        }
                                    ],
                                    "preattributes": [
                                        {
                                            "end": 11,
                                            "text": "公司",
                                            "boxes": [
                                                {
                                                    "box": [
                                                        213.2653,
                                                        372.1403,
                                                        234.7697,
                                                        383.0598
                                                    ],
                                                    "page": 147,
                                                    "type": "line",
                                                    "color": "0x0000ff"
                                                }
                                            ],
                                            "start": 9
                                        }
                                    ]
                                }
                            },
                            "origin": {
                                "left": -1,
                                "name": "负债总额",
                                "index": 17,
                                "right": -1,
                                "value": [
                                    "7,219,831.45"
                                ],
                                "operator": "p&v",
                                "text_word": null,
                                "value_unit": [
                                    "万元"
                                ],
                                "triple_data": {
                                    "sid": 67470848,
                                    "time": {
                                        "tag": "$TIME1$",
                                        "value": "2021年9月末",
                                        "checksum": "bf659a66d0a32706a093b2dc30a67e7a",
                                        "position": -1,
                                        "word_index": 6
                                    },
                                    "value": {
                                        "tag": "$VALUE_MONEY$",
                                        "value": "7,219,831.45万元",
                                        "checksum": "d47427950047c65a008e78e838331af6",
                                        "position": 63,
                                        "word_index": 18
                                    },
                                    "attribute": {
                                        "tag": "$ATTR_MONEY$",
                                        "value": "负债总额",
                                        "checksum": "9ff3fdee6ef2bf2ab6e3980bd5ef2cf4",
                                        "position": 11,
                                        "word_index": 9
                                    },
                                    "preattributes": [
                                        {
                                            "value": "公司",
                                            "checksum": "6c530475a90a1b38f98554b5b09cd2c2",
                                            "position": 9,
                                            "word_index": [
                                                8
                                            ]
                                        }
                                    ],
                                    "paragraph_index": 263558,
                                    "index_in_paragraph": 0
                                },
                                "triple_index": 0,
                                "table_triples": null
                            },
                            "checksum": "17f5527cb4044a44769eb70ed889137d",
                            "relation": {
                                "left": -1,
                                "index": 17,
                                "right": -1,
                                "value": [
                                    "7,219,831.45"
                                ],
                                "result": [
                                    {
                                        "value": "7,219,831.45",
                                        "value_unit": "万元",
                                        "quadruple_left": 0,
                                        "quadruple_right": 0
                                    }
                                ],
                                "operator": "p&v",
                                "value_unit": [
                                    "万元"
                                ],
                                "quadruple_index": 0
                            },
                            "full_boxes": [
                                {
                                    "box": [
                                        213.2653,
                                        372.1403,
                                        234.7697,
                                        383.0598
                                    ],
                                    "page": 147,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        237.4683,
                                        372.0083,
                                        284.399,
                                        383.2038
                                    ],
                                    "page": 147,
                                    "type": "line",
                                    "color": "0x0000ff"
                                },
                                {
                                    "box": [
                                        214.2188,
                                        397.0032,
                                        305.2498,
                                        408.4626
                                    ],
                                    "page": 147,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ],
                            "value_boxes": [
                                {
                                    "box": [
                                        214.2188,
                                        397.0032,
                                        305.2498,
                                        408.4626
                                    ],
                                    "page": 147,
                                    "type": "line",
                                    "color": "0x0000ff"
                                }
                            ]
                        },
                        "status": "confirm",
                        "type": 2,
                        "index": 3,
                        "page": 147,
                        "doclet_type": "prospectus",
                        "para_index": 263558,
                        "table_index": null,
                        "feedback": null,
                        "feedback_user_id": null,
                        "feedback_user_sys": null,
                        "feedback_utc": null,
                        "internal_status": 0,
                        "rv_url": null,
                        "experience": false
                    }
                }
            }
        ],
        "payload": {
            "outlines": [
                [
                    98.0473,
                    398.2271,
                    134.0879,
                    406.7827
                ]
            ],
            "correlation_ids": [
                52239100,
                52239099,
                52239098,
                52239097,
                52239096,
                52239095,
                52239094,
                52222807,
                52222806,
                52222805,
                52222804,
                52222803,
                52222802,
                52222801,
                52218738
            ],
            "type": "chars",
            "equal": true,
            "color": "0x0000ff",
            "outline_checksum": "bfefc4a8cbb2e25a66c881d6f86beb49",
            "cross_page": false,
            "value": "69.39%",
            "index": 262171,
            "index_type": "paragraph",
            "expand": true
        }
    },
],
  lineConfig: {
    color: 'blue',
    width: 1,
    lineStyle: 'dash',
  },
};
const sdk = ref(null);
let container = null;
onMounted(async () => {
  await loadStyle();
  container = new PdfViewerContainer(config.documents, config.lineConfig, { PDFiumWorkSrc: '../pdf-document-viewer/dist/worker/pdflux.worker.js?url' });
  container.render(sdk.value);
  if (config.correlations) {
    container.initLabelData(config.correlations)
  }
})
</script>
<style>
.pdf-wrapper {
  height: 100%;
}
#app {
  height: 100%;
}
</style>    

`