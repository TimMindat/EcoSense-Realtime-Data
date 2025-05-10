import { format, formatDistanceToNow } from 'date-fns';

export const formatNumber = (value: number | undefined, precision = 1): string => {
  if (value === undefined) return 'N/A';
  return value.toFixed(precision);
};

export const getStatusColor = (
  value: number | undefined,
  thresholds: { low: number; medium: number; high: number }
): string => {
  if (value === undefined) return 'bg-gray-400';
  
  if (value <= thresholds.low) {
    return 'bg-green-500';
  } else if (value <= thresholds.medium) {
    return 'bg-yellow-500';
  } else {
    return 'bg-red-500';
  }
};

export const formatTimestamp = (timestamp: number | undefined): string => {
  if (!timestamp) return 'Unknown';
  return format(new Date(timestamp), 'PPp');
};

export const formatTimeAgo = (timestamp: number | undefined): string => {
  if (!timestamp) return 'Unknown';
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
};