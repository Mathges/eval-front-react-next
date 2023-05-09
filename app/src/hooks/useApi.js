import { useState } from 'react';

const useApi = ({ method, url, body, token }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: method,
        ...body && {
          body: JSON.stringify(body)
        },
        headers: {
          "Content-Type": "Application/json",
          ...token && {
            "authorization": token
          }
        },
      });
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }
  return { data, isLoading, error, fetchData };
};

export default useApi;