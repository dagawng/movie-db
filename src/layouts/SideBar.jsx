import { MdMovieFilter, MdHome, MdTv } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Button,
  Icon,
  Stack,
} from "@chakra-ui/react";
function SideBar({ isOpen, onClose }) {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Link
              fontSize="2rem"
              fontFamily="monospace"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
            >
              MOVIEDB
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Button as="a" leftIcon={<Icon as={MdHome} />} isActive href="/">
                Home
              </Button>
              <Button
                as="a"
                leftIcon={<Icon as={MdMovieFilter} />}
                href="/movies"
              >
                Movie
              </Button>
              <Button as="a" leftIcon={<Icon as={MdTv} />} href="/tv-show">
                TV Shows
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;
