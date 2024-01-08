import {
  Image,
  Box,
  Text,
  Link,
  Flex,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import moment from "moment/moment";
import useFetch from "../useFetch";
import LoadingImage from "./LoadingImage";

const MovieCard = () => {
  const { data, isLoading } = useFetch("movie/popular", 1);

  return (
    <Grid
      templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5, 1fr)" }}
      gap={7}
    >
      {isLoading
        ? "loading"
        : data.results.map((movie) => {
            return (
              <GridItem key={movie.id}>
                <Box position="relative">
                  <Link href={`/movie/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      fallback={<LoadingImage />}
                    />

                    <Flex
                      direction="column"
                      align="center"
                      justify="center"
                      position="absolute"
                      top="0"
                      left="0"
                      bgColor="blackAlpha.600"
                      width="100%"
                      height="100%"
                      color="#ffffff"
                      opacity="0"
                      _hover={{ opacity: "1" }}
                      transition="0.2s"
                    >
                      <Icon as={AiFillPlayCircle} boxSize={20} />
                    </Flex>
                  </Link>
                </Box>
                <Box p="2">
                  <Link fontWeight="bold" href={`/movie/${movie.id}`}>
                    {movie.title}
                  </Link>

                  <Text color="gray.500">
                    {moment(movie.release_date, "YYYY-MM-DD").format(
                      "MMMM Do YYYY"
                    )}
                  </Text>
                </Box>
              </GridItem>
            );
          })}
    </Grid>
  );
};

export default MovieCard;
