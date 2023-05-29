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

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'
import ReEditar from '../ReEditar'

function DatosIdentificativos({ onVerified, verified, contents }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const [Contents] = useState(contents)

  const {
    register,
    //formState: { errors },
    handleSubmit
  } = useForm()

  return (
    <Box
      borderRadius={'lg'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      mb={6}
    >
      <Box as={'h1'} fontSize={35}>
        Datos Identificativos
      </Box>
      {!verified ? (
        <form onSubmit={handleSubmit(onVerified)}>
          {/*handleSubmit(onSubmit)*/}
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>País de Origen</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Select country"
                      defaultValue={Contents ? Contents.pais_de_origen : ''}
                      size="md"
                      {...register('pais_de_origen', {
                        required: true
                      })}
                    >
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
                      {Contents ? (
                        <option>{Contents.pais_de_origen}</option>
                      ) : (
                        ''
                      )}
                    </Select>
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
                      defaultValue={Contents ? Contents.fabricante : ''}
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      // name="user_email"
                      {...register('fabricante', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Modelo</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      defaultValue={Contents ? Contents.modelo : ''}
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      size="md"
                      {...register('modelo', { required: true })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Generacion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={1}
                      defaultValue={Contents ? Contents.generacion : ''}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('generacion', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Serie</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={3}
                      defaultValue={Contents ? Contents.serie : ''}
                      errorBorderColor="red.300"
                      //name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('serie', { required: true, maxLength: 80 })}
                    />
                  </InputGroup>
                </FormControl>
                {/* falta validaciones personalizadas */}
                <FormControl isRequired>
                  <FormLabel>Año de inicio</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      errorBorderColor="red.300"
                      type="number"
                      defaultValue={
                        Contents
                          ? Contents.años_de_fabricacion.año_de_inicio
                          : ''
                      }
                      min={1900}
                      max={2050}
                      placeholder="Required"
                      size="md"
                      {...register('años_de_fabricacion.año_de_inicio', {
                        required: true,
                        maxLength: 80
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Año de Finalizacion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      errorBorderColor="red.300"
                      type="number"
                      defaultValue={
                        Contents
                          ? Contents.años_de_fabricacion.año_de_finalizacion
                          : ''
                      }
                      min={1900}
                      max={2050}
                      placeholder="Required"
                      size="md"
                      {...register('años_de_fabricacion.año_de_finalizacion', {
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

export default DatosIdentificativos
