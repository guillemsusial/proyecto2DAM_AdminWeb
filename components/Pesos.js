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

import React from 'react'
import { useForm } from 'react-hook-form'
import { BsPencil } from 'react-icons/bs'

export default function Pesos() {
  const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')

  const {
    register,

    formState: { errors },
    handleSubmit
  } = useForm()

  //console.log(errors)

  const onSubmit = values => {
    console.log(values)
    console.log(errors)
  }
  return (
    <Box
      borderRadius={'lg'}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      p={3}
      align={'center'}
      mb={6}
    >
      <Box as={'h1'} fontSize={35}>
        Pesos
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box m={8}>
          <VStack spacing={5}>
            <Grid templateColumns="repeat(2, 2fr)" gap={6}>
              <FormControl isRequired isDisabled>
                <FormLabel>Unidad de Peso</FormLabel>
                <InputGroup bg={bgInput} borderRadius="lg">
                  <Select
                    defaultValue={'kg'}
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
    </Box>
  )
}
