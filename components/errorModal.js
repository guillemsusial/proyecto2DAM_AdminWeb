/* eslint-disable no-extra-semi */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  ModalFooter,
  Button
} from '@chakra-ui/react'

function ErrorModal({ isOpen, onClose, overlay, text }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent bg={'red.500'}>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>
          <Text>{text}</Text>
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