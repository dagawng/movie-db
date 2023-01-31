import React from "react";
import { Image, Box, Text, Link, Flex, Icon } from "@chakra-ui/react";
import { AiFillPlayCircle } from "react-icons/ai";
import moment from "moment/moment";

import LoadingFigure from "./LoadingFigure";
const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  name,
  first_air_date,
}) => {
  return (
    <Box>
      <Box position="relative">
        <Link href={`/movie/${id}`}>
          {poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              fallback={<LoadingFigure />}
            />
          ) : (
            <LoadingFigure />
          )}

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
        <Link fontWeight="bold" href={`/movie/${id}`}>
          {title ? title : name}
        </Link>
        <Text color="gray.500">
          {moment(
            release_date ? release_date : first_air_date,
            "YYYY-MM-DD"
          ).format("MMMM Do YYYY")}
        </Text>
      </Box>
    </Box>
  );
};

export default MovieCard;
