import { useState, useContext, createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import useFetch from "./useFetch";
export const api_endpoint_for_tmdb = `https://api.themoviedb.org/3/`;

export const api_endpoint_key = `?api_key=${
  import.meta.env.VITE_REACT_TMDB_API_KEY
}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState(" ");
  const [popularMoviesOrTvShow, setPopularMovieOrTvShow] = useState("movie");
  const [page, setPage] = useState(1);
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

  const nextPage = () => {
    if (page > 500) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
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
        setSearch,
        search,
        page,
        setPage,
        nextPage,
        previousPage,
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
