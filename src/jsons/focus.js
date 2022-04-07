export default {
  "documents": [
    {
      "url": "../documents/132.pdf",
      "isMain": true,
      "id": 1,
      "registWidgets": [
        {
          "type": "rect",
          "subType": "subwidget",
          "isAlwaysShow": true,
          "autoFocusOnClick": true,
          "style": {
            "stroke": "blue",
            "focus": {
              "stroke": "red",
              "fill": "#8080804d"
            }
          }
        }
      ]
    },
    {
      "url": "../documents/132.pdf",
      "isMain": false,
      "id": 2,
      "registWidgets": [
        {
          "type": "rect",
          "subType": "subwidget2",
          "isAlwaysShow": true,
          "style": {
            "stroke": "blue"
          }
        }
      ]
    }
  ],
  "correlations": [
    {
      "marks": [
        {
          "doc_id": 1,
          "pages": [
            1
          ],
          "boxes": {
            "0": [
              {
                "left": 197.146,
                "top": 172.9308,
                "right": 397.968,
                "bottom": 190.6235
              }
            ]
          },
          "type": "rect",
          "subType": "subwidget"
        },
        {
          "doc_id": 2,
          "pages": [
            1
          ],
          "boxes": {
            "0": [
              {
                "left": 90.0656,
                "top": 205.2775,
                "right": 504.7266,
                "bottom": 313.0096
              }
            ]
          },
          "type": "rect",
          "subType": "subwidget2"
        }
      ],
      "id": 1
    }
  ],
  "lineConfig": {
    "color": "blue",
    "width": 1,
    "lineStyle": "dash"
  }
}