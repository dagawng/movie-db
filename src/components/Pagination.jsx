import { Button, Flex, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context";

function Pagination() {
  let pages = [];
  for (let i = 1; i <= 500; i++) {
    pages.push(i);
  }
  const { nextPage, previousPage, page } = useGlobalContext();
  return (
    <Flex my="2rem" justify="center">
      <IconButton
        borderRadius="50%"
        icon={<ArrowBackIcon />}
        mr="0.5rem"
        onClick={previousPage}
      />

      <Button as="a" borderRadius="50%" mr="0.5rem" _active={{ color: "dark" }}>
        1
      </Button>
      <Button borderRadius="50%" mr="0.5rem">
        2
      </Button>
      <Button borderRadius="50%" mr="0.5rem">
        3
      </Button>
      <Button borderRadius="50%" mr="0.5rem">
        4
      </Button>
      <IconButton
        borderRadius="50%"
        icon={<ArrowForwardIcon />}
        onClick={nextPage}
      />
    </Flex>
  );
}

export default Pagination;
