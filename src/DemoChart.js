import React from 'react';
import { Line } from 'react-chartjs-2';
import { format, parseISO } from 'date-fns';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

// Convert the date strings to Date objects using date-fns parseISO
const data = {
  labels: [
    '2023-01-01',
    '2023-02-01',
    '2023-03-01',
    '2023-04-01',
    '2023-05-01',
    '2023-06-01',
    '2023-07-01',
  ].map(parseISO),
  datasets: [
    {
      label: 'Sample Chart',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'time', // Use 'time' for the x-axis
      time: {
        unit: 'month', // Display by month (change this based on your data)
        displayFormats: {
          month: 'MMM yyyy', // Format for displaying month labels
        },
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const DemoChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default DemoChart;

