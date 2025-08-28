import { useState, useEffect } from "react";
import axios from "axios";
import { api_endpoint_for_tmdb, api_endpoint_key } from "./context";

const useFetch = (endpoint, page) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const responseData = response.data;

      if (responseData.results) {
        setData(responseData.results);
      } else {
        setData(responseData);
      }
      setError({ show: false, msg: "" });
    } catch (error) {
      console.error("API Fetch Error:", error);
      setError({ show: true, msg: error.message || "Request failed." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!endpoint) {
      setIsLoading(false);
      return;
    }

    // Construct the base URL with the API key
    let url = `${api_endpoint_for_tmdb}${endpoint}${api_endpoint_key}`;

    // Only add the page parameter if it's provided and is a positive number
    if (page > 0) {
      url += `&page=${page}`;
    }

    fetchData(url);
  }, [endpoint, page]);

  return { isLoading, data, error };
};

export default useFetch;
