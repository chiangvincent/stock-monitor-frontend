// import React from 'react';
// import { ResponsiveBar } from '@nivo/bar';


import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "id": "japan",
        "color": "hsl(278, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 164
            },
            {
                "x": "helicopter",
                "y": 198
            },
            {
                "x": "boat",
                "y": 283
            },
            {
                "x": "train",
                "y": 42
            },
            {
                "x": "subway",
                "y": 40
            },
            {
                "x": "bus",
                "y": 86
            },
            {
                "x": "car",
                "y": 41
            },
            {
                "x": "moto",
                "y": 75
            },
            {
                "x": "bicycle",
                "y": 87
            },
            {
                "x": "horse",
                "y": 167
            },
            {
                "x": "skateboard",
                "y": 20
            },
            {
                "x": "others",
                "y": 73
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(337, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 211
            },
            {
                "x": "helicopter",
                "y": 10
            },
            {
                "x": "boat",
                "y": 101
            },
            {
                "x": "train",
                "y": 219
            },
            {
                "x": "subway",
                "y": 290
            },
            {
                "x": "bus",
                "y": 256
            },
            {
                "x": "car",
                "y": 35
            },
            {
                "x": "moto",
                "y": 54
            },
            {
                "x": "bicycle",
                "y": 28
            },
            {
                "x": "horse",
                "y": 267
            },
            {
                "x": "skateboard",
                "y": 221
            },
            {
                "x": "others",
                "y": 291
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(315, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 61
            },
            {
                "x": "helicopter",
                "y": 173
            },
            {
                "x": "boat",
                "y": 69
            },
            {
                "x": "train",
                "y": 119
            },
            {
                "x": "subway",
                "y": 214
            },
            {
                "x": "bus",
                "y": 263
            },
            {
                "x": "car",
                "y": 41
            },
            {
                "x": "moto",
                "y": 288
            },
            {
                "x": "bicycle",
                "y": 279
            },
            {
                "x": "horse",
                "y": 29
            },
            {
                "x": "skateboard",
                "y": 172
            },
            {
                "x": "others",
                "y": 60
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(210, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 63
            },
            {
                "x": "helicopter",
                "y": 234
            },
            {
                "x": "boat",
                "y": 27
            },
            {
                "x": "train",
                "y": 240
            },
            {
                "x": "subway",
                "y": 78
            },
            {
                "x": "bus",
                "y": 148
            },
            {
                "x": "car",
                "y": 1
            },
            {
                "x": "moto",
                "y": 166
            },
            {
                "x": "bicycle",
                "y": 197
            },
            {
                "x": "horse",
                "y": 227
            },
            {
                "x": "skateboard",
                "y": 277
            },
            {
                "x": "others",
                "y": 265
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(321, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 230
            },
            {
                "x": "helicopter",
                "y": 231
            },
            {
                "x": "boat",
                "y": 72
            },
            {
                "x": "train",
                "y": 99
            },
            {
                "x": "subway",
                "y": 290
            },
            {
                "x": "bus",
                "y": 182
            },
            {
                "x": "car",
                "y": 86
            },
            {
                "x": "moto",
                "y": 152
            },
            {
                "x": "bicycle",
                "y": 49
            },
            {
                "x": "horse",
                "y": 293
            },
            {
                "x": "skateboard",
                "y": 124
            },
            {
                "x": "others",
                "y": 71
            }
        ]
    }
]

const Chart = () => (
    <div style={{ height: 400 }}>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
)

export default Chart