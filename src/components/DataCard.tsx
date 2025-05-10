import React from 'react';
import { formatNumber, getStatusColor } from '../utils/formatters';
import { DataCardProps } from '../types';

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  unit,
  icon,
  loading,
  error,
  thresholds,
}) => {
  const statusColor = getStatusColor(value, thresholds);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="text-green-600 transition-transform hover:scale-110">{icon}</div>
        </div>

        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-full bg-gray-200 rounded"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-sm animate-fade-in">{error}</div>
        ) : (
          <>
            <div className="flex items-baseline mb-4 transition-all duration-300 animate-fade-in">
              <span className="text-4xl font-bold text-gray-700">{formatNumber(value)}</span>
              <span className="ml-2 text-gray-500">{unit}</span>
            </div>

            <div className="flex items-center animate-fade-in">
              <div className={`w-3 h-3 rounded-full mr-2 ${statusColor} transition-colors duration-300`}></div>
              <span className="text-sm text-gray-600">
                {value !== undefined && value <= thresholds.low 
                  ? 'Normal' 
                  : value !== undefined && value <= thresholds.medium 
                  ? 'Warning' 
                  : 'Alert'}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DataCard;