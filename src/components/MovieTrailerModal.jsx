import React, { useEffect } from "react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  AspectRatio,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context";
import useFetch from "../useFetch";
function MovieTrailerModal({ id }) {
  const { isOpen, onClose } = useGlobalContext();
  const { data, isLoading } = useFetch(`movie/${id}/videos`);
  const [trailerId, setTrailerId] = useState(null);
  useEffect(() => {
    setTrailerId(!isLoading && data.pop());
  });

  console.log(trailerId);

  return (
    <Modal isOpen={isOpen} size="2xl" onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent>
        <ModalBody>
          <AspectRatio maxW="780px" ratio={1}>
            <iframe
              src={`https://www.youtube.com/embed/`}
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MovieTrailerModal;
