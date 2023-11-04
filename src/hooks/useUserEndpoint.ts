import { useCallback } from 'react';

const API_URL = 'http://127.0.0.1:8055/items/points';

interface Polygon {
  type: string;
  coordinates: number[][][][];
}

interface User {
  id: number;
  name: string;
  locations: Polygon;
}

interface UserUpdateData {
  id: number;
  locations: Polygon;
}

function useUserEndpoint() {
  const updateUserLocation = useCallback(async (updateData: UserUpdateData) => {
    const { id, locations } = updateData;

    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ locations }),
    });
  }, []);

  const fetchUserLocation = useCallback(async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user location: ${response.statusText}`);
    }

    const responseData: User = await response.json();

    return responseData;
  }, []);

  return { updateUserLocation, fetchUserLocation };
}

export default useUserEndpoint;
