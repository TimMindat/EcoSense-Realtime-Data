import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatDistanceToNow } from 'date-fns';

interface DataPoint {
  timestamp: number;
  value: number;
}

interface DataChartProps {
  data: DataPoint[];
  dataKey: string;
  color: string;
  unit: string;
  loading: boolean;
}

const DataChart: React.FC<DataChartProps> = ({ data, dataKey, color, unit, loading }) => {
  if (loading) {
    return (
      <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="animate-pulse flex space-x-4">
          <div className="h-32 w-full bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const chartData = data.map(point => ({
    ...point,
    formattedTime: formatDistanceToNow(new Date(point.timestamp), { addSuffix: true })
  }));

  return (
    <div className="h-64 w-full bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <h3 className="text-md font-medium text-gray-700 mb-2">{dataKey} Trend</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="formattedTime" 
            tick={{ fontSize: 10 }}
            height={40}
            tickFormatter={(value) => value.slice(0, 10) + '...'}
          />
          <YAxis 
            tick={{ fontSize: 10 }}
            width={40}
            tickFormatter={(value) => `${value}${unit}`}
          />
          <Tooltip 
            formatter={(value) => [`${value} ${unit}`, dataKey]}
            labelFormatter={(label) => `Time: ${label}`}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;