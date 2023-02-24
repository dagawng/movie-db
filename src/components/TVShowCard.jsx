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
import LoadingImage from "./LoadingImage";
import useFetch from "../useFetch";

const TVShowCard = () => {
  const { data, isLoading } = useFetch("tv/popular");

  return (
    <Grid
      templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5, 1fr)" }}
      gap={7}
    >
      {isLoading
        ? "loading"
        : data.map((tv) => {
            return (
              <GridItem key={tv.id}>
                <Box position="relative">
                  <Link href={`/tv/${tv.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
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
                  <Link fontWeight="bold" href={`/tv/${tv.id}`}>
                    {tv.name}
                  </Link>

                  <Text color="gray.500">
                    {moment(tv.first_air_date, "YYYY-MM-DD").format(
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

export default TVShowCard;
