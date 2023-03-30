import { useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg" variant="filled">
        <Input
          placeholder="Search for a movies, tv show..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputLeftElement children={<SearchIcon />} />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
