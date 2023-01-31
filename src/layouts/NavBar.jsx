import React from "react";
import {
  Flex,
  Box,
  Link,
  Spacer,
  Hide,
  Show,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";
import { HamburgerIcon } from "@chakra-ui/icons";
import SideBar from "./SideBar";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb="5" shadow="base">
      <Flex p="3" alignItems="center" gap="2" mx="auto" maxW="1240px">
        <SideBar isOpen={isOpen} onClose={onClose} />
        <Show below="md">
          <Button onClick={onOpen}>
            <HamburgerIcon />
          </Button>
        </Show>
        <Hide below="md">
          <Box>
            <Link
              href="/"
              fontSize="32"
              fontFamily="monospace"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              MOVIEDB
            </Link>
          </Box>
        </Hide>
        <Box width={{ base: "80%", md: "60%" }} mx="auto">
          <SearchBar />
        </Box>
        <Hide below="md">
          <Flex mx="auto" gap="2">
            <Box>
              <Link href="/">Home</Link>
            </Box>
            <Spacer />
            <Box>
              <Link href="/movies">Movies</Link>
            </Box>
            <Spacer />
            <Box>
              <Link href="/tv-show">TV Shows</Link>
            </Box>
          </Flex>
        </Hide>
      </Flex>
    </Box>
  );
}

export default NavBar;
