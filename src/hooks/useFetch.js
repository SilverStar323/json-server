import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    async (signal) => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        const result = await response.json();
        setData(result);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    },
    [url]
  );
  
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [url, fetchData]);


  return { data, loading, error };
}