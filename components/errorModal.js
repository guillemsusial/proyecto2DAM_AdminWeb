/* eslint-disable no-extra-semi */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box
} from '@chakra-ui/react'

function ErrorModal({ isOpen, onClose, overlay, text, large, color,header }) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      size={large ? large : 'sm'}
      onClose={onClose}
    >
      {overlay}
      <ModalContent bg={color ? color : 'red.500'}>
        <ModalHeader>{header?header:'Error'}</ModalHeader>
        <ModalBody>
          <Box>{text}</Box>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="gray">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ErrorModal
