import { Text, Box, Button } from '@chakra-ui/react'

export const errorVerify = (  
    <>
      <Text>
        Porfavor Valide todos los datos antes de ir al siguiente formulario:
      </Text>
      <br />
      <Text>
        Si no esta seguro de como validar los datos , al final del formulario
        encontrara un boton parecido a este:
      </Text>
      <Box align="center" m={10}>
        <Button colorScheme="teal" id="submit-D" type="submit">
          Verify Content
        </Button>
      </Box>
      <Text>
        Una vez presionado este le dira que es lo que le falta por validar,
        gracias.
      </Text>
    </>
)

