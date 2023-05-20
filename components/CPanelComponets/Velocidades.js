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
  useColorModeValue
} from '@chakra-ui/react'
import ReEditar from '../ReEditar'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'

export default function Velocidades({ onVerified, verified, contents }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const [Contents] = useState(contents)
  const { register, handleSubmit } = useForm()

  return (
    <Box
      borderRadius={'lg'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
    >
      <Box as={'h1'} fontSize={35}>
        Velocidades
      </Box>
      {!verified ? (
        <form onSubmit={handleSubmit(onVerified)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>Velocidad Maxima</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Required"
                      defaultValue={Contents ? Contents.velocidad_maxima.velocidad_maxima : ''}
                      // name="user_email"
                      {...register('velocidad_maxima.velocidad_maxima', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Unidad de Velocidad</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      defaultValue={Contents ? Contents.velocidad_maxima.unidad_de_velocidad : 'km/h'}
                      size="md"
                      {...register('velocidad_maxima.unidad_de_velocidad', {
                        required: true
                      })}
                    >
                      <option>km/h</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>0-100 km/h</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Required"
                      defaultValue={Contents ? Contents.aceleracion["0-100_km/h"] : ''}
                      // name="user_email"
                      {...register('aceleracion.0-100_km/h', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Unidad de aceleracion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Required"
                      size="md"
                      defaultValue={Contents ? Contents.aceleracion.unidad_de_aceleracion : ''}
                      {...register('aceleracion.unidad_de_aceleracion', {
                        required: true
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
