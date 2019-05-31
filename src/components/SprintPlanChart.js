import Chart from 'react-google-charts';
import React from 'react';

export default class SprintPlanChart extends React.PureComponent {
    render() {
        return <Chart
            width={'1200px'}
            height={'600px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'string', id: 'Stream' },
                    { type: 'string', id: 'Story' },
                    { type: 'date', id: 'Start' },
                    { type: 'date', id: 'End' },
                ],
                [ 'Anchal', 'DOP-627',    new Date(2019, 6, 30),  new Date(2019, 6, 30) ],
                [ 'Anchal', 'DOP-993',    new Date(2019, 6, 31), new Date(2019, 7, 6) ],
                [ 'Varun', 'DOP-980',   new Date(2019, 6, 30), new Date(2019, 6, 31) ],
                [ 'Varun', 'DOP-990',   new Date(2019, 6, 31), new Date(2019, 7, 5) ],
                [ 'Varun', 'DOP-992',       new Date(2019, 7, 6), new Date(2019, 7, 10) ],
                [ 'Abhijeet', 'DOP-987',        new Date(2019, 6, 30), new Date(2019, 7, 5) ],
                [ 'Abhijeet',  'DOP-1003',       new Date(2019, 7, 6), new Date(2019, 7, 7)],

                [ 'Prathamesh',  'DOP-627',       new Date(2019, 6, 30), new Date(2019, 7, 4)],
                [ 'Prathamesh',  'DOP-868',       new Date(2019, 7, 5), new Date(2019, 7, 11)],
                [ 'Prathamesh',  'DOP-869',       new Date(2019, 7, 11), new Date(2019, 7, 13)],

                [ 'Mayank',  'DOP-986',       new Date(2019, 6, 30), new Date(2019, 6, 30)],
                [ 'Mayank',  'DOP-993',       new Date(2019, 6, 31), new Date(2019, 7, 6)],

            ]}
            options={{
                timeline: { groupByRowLabel: true },
                hAxis: {
                    format: 'd/M'
                },
                width: 1200
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    }
}