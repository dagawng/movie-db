import { useState, useEffect } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const { handleOnChangeSearch, currentPage } = useGlobalContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (query) {
  //     handleOnChangeSearch(query);
  //   }
  // };

  useEffect(() => {
    if (query) {
      handleOnChangeSearch(query);
      navigate(`/search/${query}`);
    } else {
      return;
    }
  }, [query]);

  return (
    <InputGroup size="lg" variant="filled">
      <Input
        placeholder="Search for a movies, tv show..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <InputLeftElement children={<SearchIcon />} />
    </InputGroup>
  );
}

export default SearchBar;
