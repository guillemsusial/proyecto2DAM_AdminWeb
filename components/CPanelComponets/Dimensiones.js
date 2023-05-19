import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  Select,
  useColorModeValue,  
} from '@chakra-ui/react'
import ReEditar from '../ReEditar'
import React from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'

function Dimensiones({ onVerified, verified }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')

  const {
    register,
    //formState: { errors },
    handleSubmit
  } = useForm()

  // //console.log(errors)
  // const onSubmit = values => {
  //   console.log("d")

  // }

  return (
    <Box
      borderRadius={'lg'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
    >
      <Box as={'h1'} fontSize={35}>
        Dimensiones
      </Box>

      {!verified ? (
        <form onSubmit={handleSubmit(onVerified)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>Unidad de Distancia</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      defaultValue={'mm'}
                      size="md"
                      {...register('unidad_de_distancia', {
                        required: true
                      })}
                    >
                      <option>mm</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Longitud</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('longitud', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Anchura</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('anchura', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Altura</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('altura', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Separacion de las ruedas</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('separacion_de_las_ruedas', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Unidad de Combustible</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      defaultValue={'l'}
                      size="md"
                      {...register('combustible.unidad_del_combustible', {
                        required: true
                      })}
                    >
                      <option>l</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Capacidad de Combustible</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('combustible.capacidad_de_combustible', {
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
      ) : (
        <ReEditar onVerified={onVerified} />
      )}
    </Box>
  )
}
export default Dimensiones
