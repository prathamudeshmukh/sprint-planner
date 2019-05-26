import Chart from 'react-google-charts';
import React from 'react';

export default class SprintPlanChart extends React.PureComponent {
    render() {
        return <Chart
            width={'600px'}
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
                [ 'Anchal',  'DOP-987',    new Date(2019, 5, 24),  new Date(2019, 5, 27) ],
                [ 'Anchal',  'DOP-934',    new Date(2019, 5, 27), new Date(2019, 5, 28) ],
                [ 'Anchal',  'DOP-956',   new Date(2019, 5, 28), new Date(2019, 5, 30) ],
                [ 'Abhijeet', 'DOP-937',   new Date(2019, 5, 24), new Date(2019, 5, 25) ],
                [ 'Abhijeet', 'DOP-946',       new Date(2019, 5, 25), new Date(2019, 5, 28) ],
                [ 'Abhijeet', 'DOP-980',        new Date(2019, 5, 28), new Date(2019, 5, 30) ],
                [ 'Mayank',   'DOP-273',       new Date(2019, 5, 24), new Date(2019, 5, 29)],
            ]}
            options={{
                timeline: { groupByRowLabel: true },
                hAxis: {
                    format: 'd/M'
                },
                width: 600
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    }
}