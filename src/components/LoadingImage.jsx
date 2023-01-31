import { Skeleton, Stack } from "@chakra-ui/react";

function LoadingImage() {
  return (
    <Stack boxShadow="lg">
      <Skeleton height="300px" />
    </Stack>
  );
}

export default LoadingImage;
