// hooks/useScenes.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useScenes = () => {
  const [scenes, setScenes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScenes = async () => {
      try {
        const response = await axios.get('http://10.0.2.16:8081/ecenas');
        setScenes(response.data);
      } catch (err) {
        setError('Error fetching scenes');
      } finally {
        setLoading(false);
      }
    };

    fetchScenes();
  }, []);

  return { scenes, loading, error };
};

export default useScenes;
