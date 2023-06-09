import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

function LinkItem({ href, path, children }) {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        borderRadius={10}
      >
        {children}
      </Link>
    </NextLink>
  )
}

function Navbar(props) {
  const nextRouter = useRouter()
  const { path } = props

  return (
    <Box
      position={'fixed'}
      as={'nav'}
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}></Heading>
        </Flex>
        {/* Stack ->para separar los Link items */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          {/* <LinkItem href={'/'} path={path}>
            Panel de Control
          </LinkItem> */}
          <LinkItem href={'/Home'} path={path}>
            Home
          </LinkItem>
          <LinkItem href={'/ModelViewer'} path={path}>
            ModelViewer
          </LinkItem>
          <Button onClick={() => {
            if(Cookies.get("loggedIn"))
              Cookies.remove("loggedIn")
              nextRouter.push('/')
          }}>
            Cerrar Sesión
          </Button>
        </Stack>
        {/* Crearemos un menu a la derecha para cuando el width sea muy pequeño para mostrar los menus,
                nos desapareceran los items del nav y aparecera este menu */}
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href={'/'} passHref>
                  <MenuItem as={Link}>SingIn</MenuItem>
                </NextLink> */}
                <NextLink href={'/Home'} passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href={'/ModelViewer'} passHref>
                  <MenuItem as={Link}>ModelViewer</MenuItem>
                </NextLink>
                <br/>
                <Button onClick={() => {
                  Cookies.remove("loggedIn")
                  nextRouter.push('/')
                }}>
                  Cerrar Sesión
                </Button>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Navbar
