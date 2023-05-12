import { Alert, AlertIcon,Button } from '@chakra-ui/react'

export default function ReEditar({onVerified}) {
  return (
    <Alert status="success">
      <AlertIcon />
      Informacion Verificada
      <Button ml={12} colorScheme="teal" size="sm" onClick={onVerified}>
        Editar
      </Button>
    </Alert>
  )
}
