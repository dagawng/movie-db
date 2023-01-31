import { Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

function LoadingFigure() {
  return (
    <Stack boxShadow="lg">
      <Skeleton height="300px" />
      <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
    </Stack>
  );
}

export default LoadingFigure;
