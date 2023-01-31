import { useState, useContext, createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import useFetch from "./useFetch";
export const api_endpoint_for_tmdb = `https://api.themoviedb.org/3/`;

export const api_endpoint_key = `?api_key=${
  import.meta.env.VITE_REACT_TMDB_API_KEY
}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState(true);
  const [popularTvShows, setPopularTvShows] = useState(false);
  const [query, setQuery] = useState("trending/movie/day");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, data, error } = useFetch(query);

  // fetch movies  when movie button is clicked
  const handleMovies = () => {
    setPopularMovies(true);
    setPopularTvShows(false);
    setQuery("trending/movie/day");
  };

  // fetch tv show when tvshow button is clicked
  const handleTvShows = () => {
    setPopularTvShows(true);
    setPopularMovies(false);
    setQuery("trending/tv/day");
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        data,
        handleTvShows,
        handleMovies,
        popularMovies,
        popularTvShows,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
