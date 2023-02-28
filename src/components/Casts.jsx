import useFetch from "../useFetch";
import { Box, Grid, Image, Text, GridItem, Link } from "@chakra-ui/react";
import SampleImage from "../assets/books.jpg";
function Casts({ id }) {
  const { data, isLoading } = useFetch(`${id}/credits`);
  console.log(data);
  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(8, 1fr)" }}
        gap={7}
      >
        {isLoading
          ? "Loading..."
          : data.cast.map((cast, index) => {
              return (
                <GridItem>
                  <Link href="/" key={cast.id + index}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                      borderRadius="full"
                      objectFit="cover"
                      fallbackSrc="https://via.placeholder.com/150"
                    ></Image>
                  </Link>
                  <Box p="5">
                    <Text fontWeight="bold">{cast.name}</Text>
                    <Text>{cast.character}</Text>
                  </Box>
                </GridItem>
              );
            })}
      </Grid>
    </Box>
  );
}

export default Casts;
