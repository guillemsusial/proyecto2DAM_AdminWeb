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

export default function Pesos({ onVerified, verified, contents }) {
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
        Pesos
      </Box>
      {!verified ? (
        <form onSubmit={handleSubmit(onVerified)}>
          <Box m={8}>
            <VStack spacing={5}>
              <Grid templateColumns="repeat(2, 2fr)" gap={6}>
                <FormControl isRequired>
                  <FormLabel>Unidad de Peso</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <Select
                      defaultValue={Contents ? Contents.unidad_del_peso : 'kg'}
                      size="md"
                      {...register('unidad_del_peso', {
                        required: true
                      })}
                    >
                      <option>kg</option>
                    </Select>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Peso en Vacio</FormLabel>
                  <InputGroup bg={bgInput} borderRadius="lg">
                    <InputLeftElement pointerEvents="none">
                      <BsPencil />
                    </InputLeftElement>
                    <Input
                      type="number"
                      minLength={1}
                      maxLength={5}
                      placeholder="Required"
                      defaultValue={Contents ? Contents.peso_en_vacio : ''}
                      // name="user_email"
                      {...register('peso_en_vacio', {
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
