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
  useColorModeValue
} from '@chakra-ui/react'

import React from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'
import ReEditar from '../ReEditar'

function Nombre({ onVerified, verified }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')

  const {
    register,
    //formState: { errors },
    handleSubmit
  } = useForm()

  //console.log(errors)
  // const onSubmit = values => {
  //  console.log(data)
  //  event.preventDefault();
  // }

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
                  <FormLabel>Nombre</FormLabel>
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
                      {...register('nombre', {
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

export default Nombre
