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
  const pageNumberLimit = 5;
  const [popularMoviesOrTvShow, setPopularMovieOrTvShow] = useState("movie");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

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
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > 500) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  const previousPage = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = 500;
      }
      return prevPage;
    });
  };

  const handlePageClick = (index) => {
    setCurrentPage(index);
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
        currentPage,
        setCurrentPage,
        nextPage,
        previousPage,
        handlePageClick,
        minPageLimit,
        maxPageLimit,
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
