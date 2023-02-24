import { Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

function LoadingSingleMovie() {
  return (
    <HStack boxShadow="lg">
      <Skeleton height="350px" />
      <SkeletonText mt="4" noOfLines={5} spacing="4" skeletonHeight="2" />
    </HStack>
  );
}

export default LoadingSingleMovie;
