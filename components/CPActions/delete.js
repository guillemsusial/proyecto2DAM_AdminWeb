import { Input } from '@chakra-ui/input'
import Layout from '../layouts/article'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import axios from 'axios';

export default function Delete() {
  const onSubmit = () => {
    window.alert('falta axios')
    const datas = {
      dataSource: 'Proyecto2DAM',
      database: 'CarWikiAR',
      collection: 'cars',
      fiter:{
        _id: id
      }
    }
    ;(async () => {
      const result = await axios.post('/api/delete/'+id, datas)
      window.alert(result)
    })()
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
