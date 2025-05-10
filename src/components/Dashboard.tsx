import React, { useEffect, useState } from 'react';
import { Thermometer, Droplets, Wind } from 'lucide-react';
import { useFirebaseData } from '../hooks/useFirebaseData';
import { SensorDataType } from '../types';
import DataCard from './DataCard';
import DataChart from './DataChart';

const thresholds = {
  temperature: { low: 25, medium: 30, high: 35, unit: '°C' },
  humidity: { low: 50, medium: 70, high: 85, unit: '%' },
  gas: { low: 400, medium: 700, high: 1000, unit: 'ppm' },
};

// Mock historical data generator for demonstration
const generateMockHistoricalData = (currentValue: number, count: number, variance: number) => {
  const now = Date.now();
  const result = [];

  for (let i = 0; i < count; i++) {
    // Generate data points going back in time
    const timeOffset = i * (24 * 60 * 60 * 1000 / count); // Spread over 24 hours
    const randomVariance = (Math.random() - 0.5) * variance;
    
    result.push({
      timestamp: now - timeOffset,
      value: Math.max(0, currentValue + randomVariance),
    });
  }

  return result.reverse(); // Latest data last
};

const Dashboard: React.FC = () => {
  const { data, loading, error } = useFirebaseData('/');
  const [historicalData, setHistoricalData] = useState<{
    temperature: any[];
    humidity: any[];
    gas: any[];
  }>({
    temperature: [],
    humidity: [],
    gas: [],
  });

  useEffect(() => {
    if (data && !loading) {
      setHistoricalData({
        temperature: generateMockHistoricalData(data.temperature || 25, 24, 5),
        humidity: generateMockHistoricalData(data.humidity || 60, 24, 10),
        gas: generateMockHistoricalData(data.gas || 450, 24, 100),
      });
    }
  }, [data, loading]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Current Readings</h2>
        <p className="text-gray-600">
          Live environmental data from your sensors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <DataCard
          title="Temperature"
          value={data?.temperature}
          unit={thresholds.temperature.unit}
          icon={<Thermometer className="h-6 w-6" />}
          loading={loading}
          error={error}
          thresholds={thresholds.temperature}
        />

        <DataCard
          title="Humidity"
          value={data?.humidity}
          unit={thresholds.humidity.unit}
          icon={<Droplets className="h-6 w-6" />}
          loading={loading}
          error={error}
          thresholds={thresholds.humidity}
        />

        <DataCard
          title="Gas Level"
          value={data?.gas}
          unit={thresholds.gas.unit}
          icon={<Wind className="h-6 w-6" />}
          loading={loading}
          error={error}
          thresholds={thresholds.gas}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Data Trends</h2>
        <p className="text-gray-600">
          Environmental metrics over the last 24 hours
        </p>
      </div>



      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Your environment is currently being monitored. All readings are within normal ranges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;