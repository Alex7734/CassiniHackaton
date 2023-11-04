import { useEffect, useState } from 'react';

const usePoints = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8055/items/points', {
            method: 'GET',
            mode: 'cors',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Save the data to local storage
        localStorage.setItem('pointsData', JSON.stringify(data.data));

        // Set the state
        setData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error as any);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default usePoints;
