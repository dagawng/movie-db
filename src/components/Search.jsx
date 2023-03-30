import {
  Grid,
  GridItem,
  Box,
  Link,
  Image,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Loader from "../components/Loader";
import { AiFillPlayCircle } from "react-icons/ai";
import LoadingImage from "../components/LoadingImage";
import moment from "moment";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  const { searchLoading, queryData, handleOnChangeSearch } = useGlobalContext();

  useEffect(() => {
    handleOnChangeSearch(params.id);
  }, [params.id]);

  if (searchLoading) {
    return <Loader />;
  } else {
    return (
      <Box>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5, 1fr)" }}
          gap={7}
        >
          {queryData.map((data) => {
            return (
              <GridItem key={data.id}>
                <Box position="relative">
                  <Link
                    href={`/${data.first_air_date ? "tv" : "movie"}/${data.id}`}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
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
                    href={`/${data.media_type}/${data.id}`}
                  >
                    {data.title || data.name}
                  </Link>

                  <Text color="gray.500">
                    {data.release_date || data.first_air_date
                      ? moment(
                          data.release_date || data.first_air_date,
                          "YYYY-MM-DD"
                        ).format("MMMM Do YYYY")
                      : ""}
                  </Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    );
  }
}

export default Search;
