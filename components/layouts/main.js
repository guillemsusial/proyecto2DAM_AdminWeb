import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

function Main({ children, router }) {
  return (
    <Box as={'main'} pb={8}>
      <Head>
        <meta
          name={'viewport'}
          content={'width=device-width, initial-scale=1'}
        />
        <title>Panel Admin</title>
      </Head>
      {router.asPath == '/' ? '' : <Navbar path={router.asPath} />}

      <Container maxW="container.xl" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
export default Main
