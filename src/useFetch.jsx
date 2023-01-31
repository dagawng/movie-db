import { useState, useEffect } from "react";
import { api_endpoint_for_tmdb, api_endpoint_key } from "./context";
import axios from "axios";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchTrendingMovies = async (url) => {
    setIsLoading(true);

    try {
      const { data } = await axios(url);

      setData(Array.isArray(data.results) ? data.results : data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies(
      `${api_endpoint_for_tmdb}${urlParams}${api_endpoint_key}`
    );
  }, [urlParams]);
  return { isLoading, data, error };
};

export default useFetch;
