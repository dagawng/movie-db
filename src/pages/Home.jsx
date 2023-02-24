import {
  Text,
  Flex,
  Button,
  Divider,
  Box,
  ButtonGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useGlobalContext } from "../context";
import MovieCarousel from "../components/MovieCarousel";
import MovieCard from "../components/MovieCard";
import TVShowCard from "../components/TVShowCard";

function Home() {
  const popularSection = useRef(null);

  const { popularMoviesOrTvShow, handleTvShows, handleMovies } =
    useGlobalContext();

  return (
    <Box>
      <Flex gap="4" alignItems="center" my="5">
        <Text fontSize="1.5rem">Trending This Week</Text>
      </Flex>
      <MovieCarousel />
      <Divider my="5" />

      <Tabs variant="unstyled" defaultIndex={0}>
        <Flex ms="5">
          <Text fontSize="2xl" mr="5">
            Popular
          </Text>
          <TabList border="1px" borderColor="gray.200">
            <Tab _selected={{ color: "white", bg: "blue.500" }}>Movies</Tab>
            <Tab _selected={{ color: "white", bg: "red.500" }}>TV Shows</Tab>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <MovieCard />
          </TabPanel>
          <TabPanel>
            <TVShowCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <ButtonGroup variant="outline" isAttached>
          <Button color="red.500" onClick={handleMovies}>
            Movies
          </Button>
          <Button color="purple.500" onClick={handleTvShows}>
            TV Show
          </Button>
        </ButtonGroup> */}

      {/* <div ref={popularSection}>
        {popularMoviesOrTvShow === "movie" ? <MovieCard /> : <TVShowCard />}
      </div> */}
    </Box>
  );
}

export default Home;
