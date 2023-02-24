import {
  Image,
  Grid,
  GridItem,
  Text,
  Box,
  Link,
  Flex,
  Icon,
} from "@chakra-ui/react";
import useFetch from "../useFetch";
import LoadingImage from "./LoadingImage";
import { AiFillPlayCircle } from "react-icons/ai";
import moment from "moment";
function MovieCarousel() {
  const { data, isLoading } = useFetch("trending/all/day");
  return (
    <>
      <Grid
        gridAutoFlow="column"
        gridAutoColumns={{ base: "35%", md: "17%" }}
        gap="6"
        overflowX="auto"
        overscrollbehaviorinline="contain"
        scrollSnapType="inline mandatory"
      >
        {isLoading
          ? "loading.."
          : data.map((media) => {
              return (
                <GridItem key={media.id} scrollSnapAlign="start">
                  <Box position="relative">
                    <Link href={`/${media.media_type}/${media.id}`}>
                      <Image
                        src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
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
                    <Link
                      fontWeight="bold"
                      href={`/${media.media_type}/${media.id}`}
                    >
                      {media.title ? media.title : media.name}
                    </Link>

                    <Text color="gray.500">
                      {moment(
                        media.release_date
                          ? media.release_date
                          : media.first_air_date,
                        "YYYY-MM-DD"
                      ).format("MMMM Do YYYY")}
                    </Text>
                  </Box>
                </GridItem>
              );
            })}
      </Grid>
    </>
  );
}

export default MovieCarousel;
