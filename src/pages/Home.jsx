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

import { useGlobalContext } from "../context";
import MovieCarousel from "../components/MovieCarousel";
import MovieCard from "../components/MovieCard";
import TVShowCard from "../components/TVShowCard";

function Home() {
  return (
    <Box>
      <Flex gap="4" alignItems="center" my="5">
        <Text fontSize="1.5rem">Trending This Week</Text>
      </Flex>
      <Box mb="1">
        <MovieCarousel />
      </Box>

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
    </Box>
  );
}

export default Home;
