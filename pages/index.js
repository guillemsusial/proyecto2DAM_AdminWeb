import { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState('')

  const handleSubmit = async () => {
    try {
      const login = await axios.post('/api/login/checkUser', { email, password })
      if(login.data) {
        console.log("Inicio de sesión correcto")
        if(rememberMe){
          Cookies.set("loggedIn", true, {expires: 400 })
          router.push('/Home')
        }else{
          Cookies.set("loggedIn", true, {expires: 1 })
          router.push('/Home')
        }
      }else{
        //FALTA: mensaje error
        console.log("Inicio de sesión incorrecto")
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Flex minH={'50vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} as="form">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox
                  isChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                >
                Remember me
                </Checkbox>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
