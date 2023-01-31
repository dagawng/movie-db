import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function SearchBar() {
  return (
    <InputGroup size="lg" variant="filled">
      <InputLeftElement children={<SearchIcon />} />
      <Input placeholder="Search for a movies, tv show..." />
    </InputGroup>
  );
}

export default SearchBar;
