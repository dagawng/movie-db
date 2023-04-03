import { Spinner, Center, Text, Stack } from "@chakra-ui/react";
function Loader() {
  return (
    <Center h="60vh">
      <Stack>
        <Spinner
          size="xl"
          thickness="4px"
          color="blue.500"
          emptyColor="gray.200"
        />
        <Text>Loading....</Text>
      </Stack>
    </Center>
  );
}

export default Loader;
