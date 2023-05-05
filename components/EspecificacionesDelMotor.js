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
  useColorModeValue,
  Select,
  InputRightAddon,
  Alert,
  AlertIcon
} from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'

export default function EspecificacionesDelMotor({ onVerified, verified }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const [unidad_de_potencia, setUnidad_de_potencia] = useState()
  useEffect(() => {
    setUnidad_de_potencia('hp')
  }, [unidad_de_potencia])

  const { register, handleSubmit } = useForm()

  //console.log(errors)

  // const onSubmit = values => {
  //   console.log(values)
  //   console.log(errors)
  // }

  return (
    <Box
      borderRadius={'lg'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      align={'center'}
      mb={6}
    >
      <Box as={'h1'} fontSize={35}>
        Especificaciones del Motor
      </Box>
      {!verified ? (
        <form onSubmit={handleSubmit(onVerified)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>Fabricante del Motor</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      // name="user_email"
                      {...register('fabricante_del_motor', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Tipo de Motor</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      // name="user_email"
                      {...register('tipo_de_motor', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Disposicion de los Cilindros</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      size="md"
                      {...register('disposicion_de_los_cilindros', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Tipo de Combustible</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Seleccionar"
                      size="md"
                      {...register('tipo_de_combustible', {
                        required: true
                      })}
                    >
                      <option>Gasolina</option>
                      <option>Diesel</option>
                      <option>Electico</option>
                      <option>Hidrogeno</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Tipo de Inyeccion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Seleccionar"
                      size="md"
                      {...register('sistema_de_inyeccion', {
                        required: true
                      })}
                    >
                      <option>Directa</option>
                      <option>Indirecta</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Tipo de Aspiracion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Seleccionar"
                      size="md"
                      {...register('tipo_de_aspiracion', {
                        required: true
                      })}
                    >
                      <option>Atmosferica</option>
                      <option>Turbocargador</option>
                      <option>Sobrealimentador</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Valvulas por Cilindro</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      // name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('valvulas_por_cilindro', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                {/* Falta : convertri campo disposicion_de_los_cilindros en 2 campos -> numero de cilindor y disposicion */}
                {/* Falta : Una vez partidos los campos se calculara este campo (numero de cilindros*valvulas por cilindro = valvulas totales) */}
                <FormControl isRequired>
                  <FormLabel>Valvulas Totales</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      placeholder="Required"
                      size="md"
                      {...register('valvulas_totales', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Unidad de Potencia</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      //falta: setear la variable default en state para relacion peso/potencia(demomento hardcoded)
                      //onChange={setUnidad_de_potencia()}
                      defaultValue={'hp'}
                      size="md"
                      {...register('potencia.unidad_de_potencia', {
                        required: true
                      })}
                    >
                      <option>hp</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Potencia</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      placeholder="Required"
                      size="md"
                      {...register('potencia.potencia', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Rpm Maxima Potencia</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      placeholder="Required"
                      size="md"
                      {...register('potencia.rpm', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  {/* falta:revisar que regrese los valores con . y no con ,  */}
                  <FormLabel>Relacion Peso / Potencia</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      placeholder="Required"
                      size="md"
                      {...register('relacion_peso/potencia', {
                        required: true
                      })}
                    />
                    <InputRightAddon> kg/hp</InputRightAddon>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Unidad de Par</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      //falta: setear la variable default en state para relacion peso/potencia(demomento hardcoded)
                      //onChange={setUnidad_de_potencia()}
                      defaultValue={'Nm'}
                      size="md"
                      {...register('par.unidad_de_par', {
                        required: true
                      })}
                    >
                      <option>hp</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Par</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={6}
                      placeholder="Required"
                      size="md"
                      {...register('par.par', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Rpm Maximo Par</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      maxLength={2}
                      placeholder="Required"
                      size="md"
                      {...register('par.rpm', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                {/* falta: Max RPM */}
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
        <Alert status="success">
          <AlertIcon />
          Informacion Verificada
          <Button ml={12} colorScheme="teal" size="sm" onClick={onVerified}>
            Editar
          </Button>
        </Alert>
      )}
    </Box>
  )
}
