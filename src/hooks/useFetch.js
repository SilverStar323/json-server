import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setLoading(false);
    setData(result);
  };

  return { data, loading };
}