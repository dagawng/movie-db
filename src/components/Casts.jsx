import useFetch from "../useFetch";
import { Box, Grid, Image, Text, GridItem, Link } from "@chakra-ui/react";
import thumbnail from "../assets/pp.webp";
function Casts({ id }) {
  const { data, isLoading } = useFetch(id ? `${id}/credits` : null);

  return (
    <Box>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(8, 1fr)" }}
        gap={7}
      >
        {isLoading
          ? "Loading..."
          : data?.cast?.map((cast) => {
              return (
                <GridItem key={cast.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    borderRadius="full"
                    title={cast.name}
                    objectFit="cover"
                    fallbackSrc={thumbnail}
                  ></Image>

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
