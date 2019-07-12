import Chart from 'react-google-charts';
import React from 'react';
import sprintData from './sprint-data';

export default class SprintPlanChart extends React.PureComponent {
    render() {
        return <Chart
            width={'1200px'}
            height={'300px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={sprintData}
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