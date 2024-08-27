import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import TimeIntervalButtons from './TimeIntervalButtons';

const generateData = (interval) => {
  // Generate mock data based on interval
  // This function should return data for the graph, similar to the Latency Sensor Graph
  let data = [];
  switch (interval) {
    case '3hours':
      data = Array.from({ length: 9 }, (_, i) => ({
        name: `${i * 20} min`,
        value: Math.floor(Math.random() * 100),
      }));
      break;
    case '24hours':
      data = Array.from({ length: 24 }, (_, i) => ({
        name: `${i} hr`,
        value: Math.floor(Math.random() * 100),
      }));
      break;
    case '7days':
      data = Array.from({ length: 7 }, (_, i) => ({
        name: `Day ${i + 1}`,
        value: Math.floor(Math.random() * 100),
      }));
      break;
    case '30days':
      data = Array.from({ length: 30 }, (_, i) => ({
        name: `Day ${i + 1}`,
        value: Math.floor(Math.random() * 100),
      }));
      break;
    case '1year':
      data = Array.from({ length: 12 }, (_, i) => ({
        name: `Month ${i + 1}`,
        value: Math.floor(Math.random() * 100),
      }));
      break;
    default:
      data = [];
  }
  return data;
};

const InternetSensorGraph = () => {
  const [data, setData] = useState(generateData('3hours'));

  const handleIntervalChange = (interval) => {
    setData(generateData(interval));
  };

  return (
    <div>
      <TimeIntervalButtons onIntervalChange={handleIntervalChange} />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InternetSensorGraph;
