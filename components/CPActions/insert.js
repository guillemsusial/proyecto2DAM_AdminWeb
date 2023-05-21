//custom Layout

import React, { useState } from 'react'

//componentes Form

import { Step, Steps, useSteps } from 'chakra-ui-steps'
//chakra
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Dimensiones from '../CPanelComponets/Dimensiones'
import Pesos from '../CPanelComponets/Pesos'
import DatosIdentificativos from '../CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from '../CPanelComponets/EspecificacionesDelMotor'
import EspecificacionesDeLaTransmision from '../CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from '../CPanelComponets/Velocidades'
import ErrorModal from '../errorModal'
import axios from 'axios'
import Nombre from '../CPanelComponets/Nombre'

//modal

export default function Basic({ variant }) {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  const [CorrectF, setCorrectF] = useState(false)
  //aqui esta la estructura de cada paso
  //como podemos ver el contenido es el formulario mimos que lo llamamos desde otro componente
  //con verified nos trae un boolean (true o false )si el formulario ha sido validado una vez
  //enviado , y onVerified nos trae el resultado del envio(en caso de que haya sido enviado),

  const steps = [
    {
      label: 'Step 1',
      content: (
        <Nombre
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'nombre')
          }}
        />
      )
    },
    {
      label: 'Step 2',
      content: (
        <DatosIdentificativos
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'datos_identificativos')
          }}
        />
      )
    },
    {
      label: 'Step 3',
      content: (
        <EspecificacionesDelMotor
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'especificaciones_del_motor')
          }}
        />
      )
    },
    {
      label: 'Step 4',
      content: (
        <EspecificacionesDeLaTransmision
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'especificaciones_de_la_transmision')
          }}
        />
      )
    },
    {
      label: 'Step 5',
      content: (
        <Velocidades
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'velocidades')
          }}
        />
      )
    },
    {
      label: 'Step 6',
      content: (
        <Dimensiones
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'dimensiones')
          }}
        />
      )
    },
    {
      label: 'Step 7',
      content: (
        <Pesos
          verified={CorrectF}
          onVerified={data => {
            setCorrectF(!CorrectF)
            verify(data, 'pesos')
          }}
        />
      )
    }
  ]
  //aqui controlamos que paso es el ultimo para mostrar la vista de reinicio
  const isLastStep = activeStep === steps.length - 1
  //nos aseguramos que haya cumplido todos los pasos (Boolean)
  const hasCompletedAllSteps = activeStep === steps.length
  const bg = useColorModeValue('gray.200', 'gray.700')

  //En este estado se guarda el JSON que mas adelante mandaremos a la BBDD
  const [document, setdocument] = useState({})

  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Esta constante funciona como StringBuilder , acumulando todas las
  // respuestas de los fomularios , siempre y cuando los formularios esten validados
  const data = prod => {
    let updatedValue = {}
    updatedValue = prod
    setdocument(shopCart => ({
      ...shopCart,
      ...updatedValue
    }))
  }

  //una vez finalizamos el fomulario realizamos una llamada axios a una api express(error CORS)
  //y insertamos el nuevo modelo.
  const onsubmit = async () => {
    try {
      const response = await axios.post('/api/insertOne', { document })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    setdocument()
  }
  // const para que nos envie los datos del JSON solo en caso de Veificacion
  const verify = (event, name) => {
    if (event != null || !(event.type === 'click')) {
      if (name == 'nombre') {
        event = {
          nombre: event.nombre,
          url:event.url
        }
      } else {
        event = {
          [name]: event
        }
      }
      data(event)
    }
  }

  return (
    <Flex flexDir="column" width="100%">
      {/* Modal */}
      <ErrorModal
        isOpen={isOpen}
        onClose={() => {
          onClose()
        }}
        //falta un diccionario de errores
        text={
          <>
            <Text>
              Porfavor Valide todos los datos antes de ir al siguiente
              formulario:
            </Text>
            <br />
            <Text>
              Si no esta seguro de como validar los datos , al final del
              formulario encontrara un boton parecido a este:
            </Text>
            <Box align="center" m={10}>
              <Button colorScheme="teal" id="submit-D" type="submit">
                Verify Content
              </Button>
            </Box>
            <Text>
              Una vez presionado este le dira que es lo que le falta por
              validar, gracias.
            </Text>
          </>
        }
      />
      <Steps variant={variant} colorScheme="blue" activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label} description={'Required'}>
            <Box sx={{ p: 8, bg, my: 8, rounded: 'md' }}>
              <Heading fontSize="xl" textAlign="center">
                {content}
              </Heading>
            </Box>
          </Step>
        ))}
      </Steps>
      {hasCompletedAllSteps && (
        <Box sx={{ bg, my: 8, p: 8, rounded: 'md' }}>
          <Heading fontSize="xl" textAlign={'center'}>
            El vehiculo se ha insertado Correctamente 🎉
          </Heading>
        </Box>
      )}
      <Flex width="100%" justify="flex-end" gap={4}>
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={reset}>
            Insertar Otro Vehiculo
          </Button>
        ) : (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>

            {/* Falta poner el modal on error */}
            <Button
              size="sm"
              onClick={() =>
                CorrectF
                  ? (nextStep(),
                    setCorrectF(!CorrectF),
                    isLastStep ? onsubmit() : '')
                  : onOpen()
              }
            >
              {isLastStep ? 'Finish' : 'Next'}
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  )
}
