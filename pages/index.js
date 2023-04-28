import {
  Box,
  Button,
  VStack,
  FormControl,
  useColorModeValue,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Grid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'

function Index() {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm()

  //console.log(errors)

  const onSubmit = values => console.log(values)

  return (
    <Layout>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        align={'center'}
        mb={6}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>País de Origen</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      defaultValue={'text'}
                      type="text"
                      // name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('País de Origen', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Fabricante</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Required"
                      // name="user_email"
                      {...register('Fabricante', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Modelo *</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      // name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Modelo', { required: true, maxLength: 80 })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Generacion *</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      // name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Generacion', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Serie *</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      //name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Serie', { required: true, maxLength: 80 })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Año de inicio *</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      // name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Año de inicio', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Año de Finalizacion *</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      //name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Año de Finalizacion', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <Button colorScheme="teal" id="submit-D" type="submit">
                    Verify Content
                  </Button>
                </FormControl>
              </Grid>
            </VStack>
          </Box>
        </form>
      </Box>
    </Layout>
  )
}
export default Index
