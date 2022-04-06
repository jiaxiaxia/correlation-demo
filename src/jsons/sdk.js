export default {
  "documents": [
    {
      "url": "./132.pdf",
      "isMain": true,
      "id": 1,
      "registWidgets": [
        {
          "type": "rect",
          "subType": "widget1",
          "isResizeEnable": false,
          "isAlwaysShow": true,
          "isAlwaysControlBar": false,
          "style": {
            "stroke": "black",
            "focus": {
              "stroke": "blue"
            }
          },
          "locked": false,
          "autoFocusOnClick": false,
          "autoFocusOnEnter": false,
          "dataset": [
            {
              "key": "tag",
              "value": "error"
            }
          ]
        },
        {
          "type": "rect",
          "subType": "widget2",
          "isAlwaysShow": true,
          "style": {
            "stroke": "blue",
            "border": "2px solid blue",
            "focus": {
              "stroke": "red"
            }
          }
        }
      ]
    },
    {
      "url": "./132.pdf",
      "isMain": false,
      "id": 2,
      "registWidgets": [
        {
          "type": "rect",
          "subType": "widget2",
          "isAlwaysShow": true,
          "style": {
            "stroke": "blue",
            "border": "2px solid blue",
            "focus": {
              "stroke": "red"
            }
          }
        }
      ]
    },
    {
      "url": "./132.pdf",
      "isMain": false,
      "id": 3,
      "registWidgets": [
        {
          "type": "rect",
          "subType": "widget2",
          "isAlwaysShow": true,
          "style": {
            "stroke": "blue",
            "border": "2px solid blue",
            "focus": {
              "stroke": "red"
            }
          }
        }
      ]
    }
  ],
  "correlations": [
    {
      "doc_id": 1,
      "pages": [
        1
      ],
      "boxes": {
        "0": [
          {
            "left": 106.0263,
            "top": 83,
            "right": 491.6537,
            "bottom": 154.0416
          }
        ]
      },
      "type": "rect",
      "subType": "widget1",
      "id": 1
    },
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
          "subType": "widget2",
          "id": 2
        },
        {
          "doc_id": 3,
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
          "subType": "widget2",
          "id": 3
        }
      ],
      "id": 2
    }
  ],
  "lineConfig": {
    "color": "blue",
    "width": 1,
    "lineStyle": "dash"
  }
}