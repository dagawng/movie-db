import { Grid, Heading, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { useGlobalContext } from "../context";
import { lazy, Suspense } from "react";
import LoadingFigure from "../components/LoadingFigure";
const MovieCard = lazy(() => import("../components/MovieCard"));
const TVShowCard = lazy(() => import("../components/TVShowCard"));

function Home() {
  const {
    data,
    isLoading,
    handleMovies,
    handleTvShows,
    popularMovies,
    popularTvShows,
  } = useGlobalContext();
  return (
    <>
      <Flex gap="4" alignItems="center">
        <Heading fontSize="3xl" fontFamily="mono">
          Trending
        </Heading>
        <ButtonGroup isAttached>
          <Button
            variant={popularMovies ? "solid" : "outline"}
            colorScheme={popularMovies ? "purple" : ""}
            onClick={handleMovies}
          >
            Movies
          </Button>
          <Button
            variant={popularTvShows ? "solid" : "outline"}
            colorScheme={popularTvShows ? "purple" : ""}
            onClick={handleTvShows}
          >
            TV Shows
          </Button>
        </ButtonGroup>
      </Flex>
      <Grid
        mt="1rem"
        templateColumns={{ md: "repeat(5,1fr)", base: "repeat(2,1fr)" }}
        gap="6"
      >
        {isLoading ? (
          <LoadingFigure />
        ) : (
          data.map((movie) => {
            return (
              <Suspense fallback={<LoadingFigure />} key={movie.id}>
                {popularMovies ? (
                  <MovieCard {...movie} />
                ) : (
                  <TVShowCard {...movie} />
                )}
              </Suspense>
            );
          })
        )}
      </Grid>
    </>
  );
}

export default Home;
