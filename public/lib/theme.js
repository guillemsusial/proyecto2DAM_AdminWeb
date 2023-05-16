import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { StepsTheme as Steps } from 'chakra-ui-steps'

// 2. Add your color mode config
const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    // styles for different visual variants ("outline", "solid")
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUndelineoffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Steps,
  Link: {
    // style object for base or default style
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  Heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: '#88ccca'
}

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

// 3. extend the theme
const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
