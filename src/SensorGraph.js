import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const generateData = (interval, count, unit) => {
  const labels = [];
  const data = [];

  const now = new Date();

  for (let i = 0; i < count; i++) {
    const date = new Date(now.getTime() - interval * i);
    labels.unshift(date.toLocaleString());
    data.unshift(Math.floor(Math.random() * 100));
  }

  return {
    labels,
    datasets: [
      {
        label: `Internet Sensor Data (${unit} intervals)`,
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };
};

const SensorGraph = () => {
  const [interval, setInterval] = useState(20 * 60 * 1000); // 20 minutes in milliseconds
  const [count, setCount] = useState(9); // Default to 3 hours (20 min intervals)
  const [unit, setUnit] = useState('minute');

  const handleButtonClick = (newInterval, newCount, newUnit) => {
    setInterval(newInterval);
    setCount(newCount);
    setUnit(newUnit);
  };

  const data = generateData(interval, count, unit);

  return (
    <div style={{ backgroundColor: 'hotpink', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <h2 style={{ color: 'white' }}>Internet Sensor Graph</h2>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => handleButtonClick(20 * 60 * 1000, 9, 'minute')} 
          style={{ 
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            margin: '0 5px',
            padding: '10px 20px',
            borderRadius: '12px',  // Slightly rounded corners
            border: 'none',
            cursor: 'pointer'
          }}>
          Last 3 Hours
        </button>
        <button 
          onClick={() => handleButtonClick(60 * 60 * 1000, 24, 'hour')} 
          style={{ 
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            margin: '0 5px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Last 24 Hours
        </button>
        <button 
          onClick={() => handleButtonClick(24 * 60 * 60 * 1000, 7, 'day')} 
          style={{ 
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            margin: '0 5px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Last 7 Days
        </button>
        <button 
          onClick={() => handleButtonClick(30 * 24 * 60 * 60 * 1000, 30, 'day')} 
          style={{ 
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            margin: '0 5px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Last 30 Days
        </button>
        <button 
          onClick={() => handleButtonClick(30 * 24 * 60 * 60 * 1000 * 12 / 365, 12, 'month')} 
          style={{ 
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            margin: '0 5px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Last 1 Year
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default SensorGraph;
