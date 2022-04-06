export default {
  documents: [
    {
      url: '/autodoc/api/v1/doclet/6402/download/pdf',
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
      loadDataByPage: (docId, pageNumber) => {
        function convertAutoDocDataToCorrelations (data) {
          const { svg_info, correlation_data, page } = data;
          const widgetsOfCorrelation = [];
          svg_info.forEach((svgInfo) => {
            const marks = [];
            svgInfo.correlation_ids.forEach(id => {
              const relatedCorrelation = correlation_data.find(item => item.id === id);
              if (relatedCorrelation) {
                relatedCorrelation.correlation_items.forEach(item => {
                  if (item.data.full_boxes) {
                    const mark = {
                      id: item.id,
                      pages: [item.page],
                      boxes: {
                        [item.page]: item.data.full_boxes.map(boxInfo => ({
                          left: boxInfo.box[0], top: boxInfo.box[1], right: boxInfo.box[2], bottom: boxInfo.box[3],
                        })),
                      },
                      doc_id: item.doclet_type,
                      type: 'rect',
                      subType: 'widget2',
                      correlation_id: relatedCorrelation.id,
                      payload: { ...relatedCorrelation, item },
                    };
                    marks.push(mark);
                  }
                });
              }
            });
            const correlation = {
              id: svgInfo.outline_checksum,
              marks: [{
                id: svgInfo.outline_checksum,
                pages: [page],
                boxes: {
                  [page]: svgInfo.outlines.map(outline => ({
                    left: outline[0], top: outline[1], right: outline[2], bottom: outline[3],
                  })),
                },
                doc_id: docId,
                type: 'rect',
                subType: 'widget1',
                payload: svgInfo,
                correlation_ids: svgInfo.correlation_ids,
              }, ...marks],
              payload: svgInfo,
            };
            widgetsOfCorrelation.push(correlation);
          });
          return widgetsOfCorrelation;
        }
        return fetch(`/autodoc/api/v1/documents/3123/pages/${pageNumber -  1}/correlations?doclet_type=prospectus`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
        }).then(response => response.json())
          .then(({ data }) => convertAutoDocDataToCorrelations(data));
      },
    },
    {
      url: '/autodoc/api/v1/doclet/6402/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6404/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6403/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6398/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6401/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6396/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6397/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6400/download/pdf',
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
      url: '/autodoc/api/v1/doclet/6399/download/pdf',
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
  lineConfig: {
    color: 'blue',
    width: 1,
    lineStyle: 'dash',
  },
};
