import { Image, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, IconButton, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, isError } = useScreenshots(gameId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  if (isLoading) return <p>Loading screenshots.....</p>;
  if (isError) return <p>Error fetching screenshots..</p>;

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === data?.results.length - 1 ? 0 : (prevIndex! + 1) % data?.results.length));
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? data?.results.length - 1 : (prevIndex! - 1 + data?.results.length) % data?.results.length));
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    onClose();
  };

  return (
    <>
      <SimpleGrid columns={{ base: 1, medium: 2 }}>
        {data?.results.map((file, index) => (
          <Image key={file.id} src={file.image} onClick={() => handleImageClick(index)} cursor="pointer" />
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={closeModal} size="80%">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedImageIndex !== null && (
              <Box position="relative">
                <Image src={data?.results[selectedImageIndex].image} objectFit="cover" w="100%" h="100%" />

                <IconButton
                  icon={<AiOutlineArrowLeft />}
                  size="lg"
                  position="absolute"
                  left="0"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={handlePreviousImage}
                  aria-label="Previous Image"
                />

                <IconButton
                  icon={<AiOutlineArrowRight />}
                  size="lg"
                  position="absolute"
                  right="0"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={handleNextImage}
                  aria-label="Next Image"
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GameScreenshots;
