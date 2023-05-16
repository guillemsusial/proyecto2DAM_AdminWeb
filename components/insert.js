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
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Dimensiones from './CPanelComponets/Dimensiones'
import Pesos from './CPanelComponets/Pesos'
import DatosIdentificativos from './CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from './CPanelComponets/EspecificacionesDelMotor'
import EspecificacionesDeLaTransmision from './CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from './CPanelComponets/Velocidades'
import ErrorModal from './errorModal'

//modal

export default function Basic({ variant }) {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  })
  const [CorrectF, setCorrectF] = useState(false)

  const steps = [
    {
      label: 'Step 1',
      content: (
        <DatosIdentificativos
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'datos_identificativos')
          }}
        />
      )
    },
    {
      label: 'Step 2',
      content: (
        <EspecificacionesDelMotor
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'especificaciones_del_motor')
          }}
        />
      )
    },
    {
      label: 'Step 3',
      content: (
        <EspecificacionesDeLaTransmision
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'especificaciones_de_la_transmision')
          }}
        />
      )
    },
    {
      label: 'Step 4',
      content: (
        <Velocidades
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'velocidades')
          }}
        />
      )
    },
    {
      label: 'Step 5',
      content: (
        <Dimensiones
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'dimensiones')
          }}
        />
      )
    },
    {
      label: 'Step 6',
      content: (
        <Pesos
          verified={CorrectF}
          onVerified={() => {
            setCorrectF(!CorrectF)
            verify(data, 'pesos')
          }}
        />
      )
    }
  ]

  const isLastStep = activeStep === steps.length - 1
  const hasCompletedAllSteps = activeStep === steps.length
  const bg = useColorModeValue('gray.200', 'gray.700')

  //En este estado se guarda el JSON que mas adelante mandaremos a la BBDD
  const [FinalJson, setFinalJson] = useState({})

  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState()

  // Esta constante funciona como StringBuilder , acumulando todas las
  // respuestas de los fomularios , siempre y cuando los formularios esten validados
  const data = prod => {
    let updatedValue = {}
    updatedValue = prod
    setFinalJson(shopCart => ({
      ...shopCart,
      ...updatedValue
    }))
  }

  // const para que nos envie los datos del JSON solo en caso de Veificacion
  const verify = (event, name) => {
    if (event != null || !(event.type === 'click')) {
      event = {
        [name]: event
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
        overlay={overlay}
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
                    isLastStep ? onsubmit() : console.log('error'))
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
