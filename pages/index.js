import Layout from '../components/layouts/article'
import React, { useState } from 'react'
import DatosIdentificativos from '../components/DatosIdentificativos'
// import EspecificacionesDelMotor from '../components/EspecificacionesDelMotor'
// import Dimensiones from '../components/Dimensiones'
// import Pesos from '../components/Pesos'
import { Text } from '@chakra-ui/react'
function Index() {
  //Creamos el estado del formulario (por verificar , es decir False)
  const [Dindentidad, setDidentidad] = useState(false)

  // const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const data = e => {
    console.log(JSON.stringify(e))
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm()

  // const onSubmit = values => {
  //   console.log(values)
  // }

  return (
    <Layout>
      <DatosIdentificativos
        verified={Dindentidad}
        onVerified={datos_identificativos => {
          setDidentidad(!Dindentidad)
          if (!(datos_identificativos.type === 'click')) {
            datos_identificativos = {
              datos_identificativos
            }
            data(datos_identificativos)
          }
        }}
      />

      {/* <EspecificacionesDelMotor />
      <Dimensiones />
      <Pesos /> */}
      {/* ----------------------Especificaciones de la transmision---------------------------- */}
      {/* <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        align={'center'}
        mb={6}
      >
        <Box as={'h1'} fontSize={35}>
          Especificaciones de la Transmision
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>País de Origen</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Select country"
                      size="md"
                      {...register('País de Origen', {
                        required: true
                      })}
                    >
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
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
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      // name="user_email"
                      {...register('Fabricante', {
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
      </Box> */}
      {/* ----------------------Velocidades---------------------------- */}
      {/* <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        align={'center'}
        mb={6}
      >
        <Box as={'h1'} fontSize={35}>
          Velocidades
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>País de Origen</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      placeholder="Select country"
                      size="md"
                      {...register('País de Origen', {
                        required: true
                      })}
                    >
                      <option>United Arab Emirates</option>
                      <option>Nigeria</option>
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
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      // name="user_email"
                      {...register('Fabricante', {
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
                      minLength={3}
                      maxLength={50}
                      placeholder="Required"
                      size="md"
                      {...register('Modelo', { required: true })}
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
                      type="number"
                      minLength={1}
                      maxLength={15}
                      placeholder="Required"
                      size="md"
                      {...register('Generacion', {
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
                      errorBorderColor="red.300"
                      //name="user_name"
                      placeholder="Required"
                      size="md"
                      {...register('Serie', { required: true, maxLength: 80 })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Año de inicio</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      errorBorderColor="red.300"
                      type="number"
                      min={1900}
                      max={2050}
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
                <FormControl isRequired>
                  <FormLabel>Año de Finalizacion</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      errorBorderColor="red.300"
                      type="number"
                      min={1900}
                      max={2050}
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
      </Box> */}
    </Layout>
  )
}
export default Index
