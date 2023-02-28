import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  AspectRatio,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context";
function MovieTrailerModal() {
  const { isOpen, onClose } = useGlobalContext();
  return (
    <Modal isOpen={isOpen} size="2xl" onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader></ModalHeader> */}
        <ModalBody>
          <AspectRatio maxW="780px" ratio={1}>
            <iframe
              src="https://www.youtube.com/embed/sb7qxjPEcwg"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MovieTrailerModal;
