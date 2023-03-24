import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context";
function SearchBar() {
  const { search, setSearch } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <InputGroup size="lg" variant="filled">
        <InputLeftElement children={<SearchIcon />} />
        <Input placeholder="Search for a movies, tv show..." />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
