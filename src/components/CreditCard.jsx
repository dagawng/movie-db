import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import LoadingImage from "./loadingImage";
function CreditCard({ cast, crew }) {
  return (
    <>
      <Card
        boxShadow="md"
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        variant="outline"
        mx="3"
      >
        <Link>
          <Image
            boxSize="300px"
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            fallback={<LoadingImage />}
          />
        </Link>

        <Stack>
          <CardBody>
            <Heading size="sm">{name}</Heading>
            <Text>{character}</Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}

export default CreditCard;
