import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../firebase/config';
import { SensorDataType } from '../types';

export const useFirebaseData = (path: string) => {
  const [data, setData] = useState<SensorDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dbRef = ref(database, path);

    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const fetchedData = snapshot.val();
        if (fetchedData) {
          setData(fetchedData);
          setError(null);
        } else {
          setError('No data available');
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please check your connection.');
        setLoading(false);
      }
    );

    // Clean up subscription on unmount
    return () => {
      off(dbRef);
    };
  }, [path]);

  return { data, loading, error };
};