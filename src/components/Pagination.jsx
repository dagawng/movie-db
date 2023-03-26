import { Button, Flex, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useGlobalContext } from "../context";

function Pagination() {
  const totalPages = 10;

  let pages = [];
  for (let i = 1; i <= 500; i++) {
    pages.push(i);
  }

  const {
    nextPage,
    previousPage,
    handlePageClick,
    currentPage,
    minPageLimit,
    maxPageLimit,
  } = useGlobalContext();

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page >= minPageLimit) {
      return (
        <Button
          borderRadius="50%"
          mx="0.5rem"
          padding="1"
          _hover={{ bg: "gray.400" }}
          key={page}
          bg={page === currentPage ? "gray.400" : ""}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Button>
      );
    } else {
      return null;
    }
  });

  let pageIncrementEllipse = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipse = (
      <Button onClick={nextPage} bg="white" _hover={{ bg: "white" }}>
        &hellip;
      </Button>
    );
  }
  let pageDecrementEllipse = null;
  if (minPageLimit >= 1) {
    pageDecrementEllipse = (
      <Button onClick={previousPage} _hover={{ bg: "white" }} bg="white">
        &hellip;
      </Button>
    );
  }

  return (
    <Flex justify="center" my="1.75rem">
      <IconButton
        borderRadius="50%"
        icon={<ArrowBackIcon />}
        onClick={previousPage}
      />
      {pageDecrementEllipse}
      {pageNumbers}
      {pageIncrementEllipse}
      <IconButton
        borderRadius="50%"
        icon={<ArrowForwardIcon />}
        onClick={nextPage}
      />
    </Flex>
  );
}

export default Pagination;
