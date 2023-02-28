import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { ArrowBackIcon } from "@chakra-ui/icons";
import useFetch from "../useFetch";
import LoadingSingleMovie from "./LoadingSingleMovie";
import Casts from "./Casts";
import { useGlobalContext } from "../context";
import MovieTrailerModal from "./MovieTrailerModal";
function SingleMovie() {
  const { pathname } = useLocation();
  const { onOpen } = useGlobalContext();

  const { data, isLoading } = useFetch(pathname);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button mb={3} leftIcon={<ArrowBackIcon />} onClick={goBack}>
        Back
      </Button>
      {isLoading ? (
        <LoadingSingleMovie />
      ) : (
        <Card
          shadow="base"
          direction={{ base: "column", md: "row", sm: "column" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            maxW={{ base: "100%", sm: "100%", md: "25%" }}
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={data.title}
          />

          <Stack>
            <CardBody>
              <Heading size="lg">{data.title}</Heading>

              <Button
                onClick={onOpen}
                my="1rem"
                variant="outline"
                colorScheme="red"
                rightIcon={<BsPlayFill size="1.5rem" />}
              >
                Play Trailer
              </Button>
              <MovieTrailerModal />
              <Text fontWeight="bold" fontFamily="mono" fontSize="xl">
                Overview
              </Text>
              <Text py="2" letterSpacing={0.5} fontSize="1.25rem">
                {data.overview}
              </Text>

              <Box>
                <Text>
                  <Text as="span" fontWeight="bold">
                    Released Date:
                  </Text>{" "}
                  <Badge p="0.5" colorScheme="pink">
                    {data.release_date
                      ? data.release_date
                      : data.first_air_date}
                  </Badge>
                </Text>
                <Text>
                  <Text as="span" fontWeight="bold">
                    Genre:
                  </Text>{" "}
                  {data.genres.map((genre) => {
                    return (
                      <Badge mr="1" p="0.5" colorScheme="purple" key={genre.id}>
                        {genre.name}
                      </Badge>
                    );
                  })}
                </Text>
              </Box>
              <Box>
                <Text>
                  <Text as="span" fontWeight="bold">
                    Duration:
                  </Text>{" "}
                  <Badge p="0.5" colorScheme="red">
                    {`${Math.floor(data.runtime / 60)} hours and ${
                      data.runtime % 60
                    }`}{" "}
                    minutes
                  </Badge>
                </Text>
                <Text>
                  <Text as="span" fontWeight="bold">
                    country:
                  </Text>{" "}
                  {data.production_countries.map((country, index) => {
                    return (
                      <Badge mr="1" colorScheme="orange" key={index}>
                        {country.name}{" "}
                      </Badge>
                    );
                  })}
                </Text>
                <Text>
                  <Text as="span" fontWeight="bold">
                    Production:
                  </Text>{" "}
                  {data.production_companies.map((company) => {
                    return (
                      <Badge mr="1" colorScheme="blue" key={company.id}>
                        {company.name},{" "}
                      </Badge>
                    );
                  })}
                </Text>
              </Box>
            </CardBody>
          </Stack>
        </Card>
      )}
      <Box>
        <Text fontSize="1.7rem" m="1rem" ml="5">
          Casts
        </Text>

        <Casts id={pathname} />
      </Box>
    </>
  );
}

export default SingleMovie;
