import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

// class PriceCoordinate {
//     constructor(date, price) {
//         this.x = date;
//         this.y = price;
//     }
// }

// const formatData = (responseData) => {
//     // format data for Nivo.
//     // responseData is in the form of Array<{
//     //     id:   string | number
//     //     data: Array<{
//     //         x: number | string | Date
//     //         y: number | string | Date
//     //     }>
//     // }>
//     return (
//         responseData.map((individualResponse) => {
//             const newData = individualResponse.data.map((coordinate) => (
//                 new PriceCoordinate(new Date(coordinate.x), coordinate.y)
//             ))
//             return (
//                 {
//                     id: individualResponse.id,
//                     data: newData
//                 }
//             );
//         })
//     )
// }

const Chart = ({ historicalData, loading }) => {
    if (loading) {
        return (
            <div style={{ height: 600 }}>
                <Segment>
                    <Dimmer active>
                        <Loader indeterminate>Fetching Historical Data...</Loader>
                    </Dimmer>
                </Segment>
            </div>
        )
    } else {
        return (
            <div style={{ height: 600 }}>
                <ResponsiveLine
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    data={historicalData}
                    xScale={{
                        type: 'time',
                        format: '%Y-%m-%d',
                        useUTC: false,
                        precision: 'day',
                    }}
                    xFormat="time:%Y-%m-%d"
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Closing Price ($)',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    axisBottom={{
                        format: '%b %Y',
                        tickValues: 'every month',
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 30,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'category10' }}
                    pointSize={2}
                    pointBorderWidth={1}
                    pointBorderColor={{
                        from: 'color',
                        modifiers: [['darker', 0.3]],
                    }}
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
                    lineWidth={1}
                />
            </div>
        );
    }
}

export default Chart;