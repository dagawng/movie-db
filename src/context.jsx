import { useState, useContext, createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import useFetch from "./useFetch";
export const api_endpoint_for_tmdb = `https://api.themoviedb.org/3/`;

export const api_endpoint_key = `?api_key=${
  import.meta.env.VITE_REACT_TMDB_API_KEY
}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [popularMoviesOrTvShow, setPopularMovieOrTvShow] = useState("movie");

  const [query, setQuery] = useState("trending/all/day");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isLoading, data, error } = useFetch(query);

  // fetch movies  when movie button is clicked
  const handleMovies = () => {
    setPopularMovieOrTvShow("movie");
  };

  // fetch tv show when tvshow button is clicked
  const handleTvShows = () => {
    setPopularMovieOrTvShow("tv");
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        data,
        handleTvShows,
        handleMovies,
        popularMoviesOrTvShow,
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
