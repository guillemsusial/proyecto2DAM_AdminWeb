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

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'
import ReEditar from '../ReEditar'

function Nombre({ onVerified, verified, contents }) {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const [Contents] = useState(contents)

  const {
    register,
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
                      defaultValue={Contents ? Contents[0] : ''}
                      // name="user_email"
                      {...register('nombre', {
                        required: true
                      })}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>URl</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="text"
                      minLength={5}                      
                      maxLength={50}
                      placeholder="Required"
                      defaultValue={Contents ? Contents[1] : ''}
                      // name="user_email"
                      {...register('url', {
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
