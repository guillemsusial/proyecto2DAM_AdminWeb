import { Input } from '@chakra-ui/input'
import Layout from '../layouts/article'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

export default function Delete() {
  const onSubmit = () => {
    window.alert('falta axios')
  }

  return (
    <Layout>
      <Input mb={12} placeholder="Inserte el ID" />
      <Box align="center">
        <Button w={150} h={12} colorScheme="teal" size="lg" onClick={onSubmit}>
          Enviar
        </Button>
      </Box>
    </Layout>
  )
}
