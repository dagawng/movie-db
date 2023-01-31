import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { useGlobalContext } from "../context";
function MovieTrailerModal() {
  const { isOpen, onClose } = useGlobalContext();
  return (
    <Modal isOpen={isOpen} size="2xl" onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader></ModalHeader> */}
        <ModalBody>
          <iframe
            src="https://www.youtube.com/embed/sb7qxjPEcwg"
            width={700}
            height={500}
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MovieTrailerModal;
