import Layout from './layouts/article'
import React, { useState } from 'react'
import DatosIdentificativos from './CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from './CPanelComponets/EspecificacionesDelMotor'
import Pesos from './CPanelComponets/Pesos'
import Dimensiones from './CPanelComponets/Dimensiones'
import EspecificacionesDeLaTransmision from './CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from './CPanelComponets/Velocidades'
import { Box, Button, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import ErrorModal from './errorModal'

function Insert() {
  //Creamos el estado del formulario (por verificar , es decir False)
  const [Dindentidad, setDidentidad] = useState(false)
  const [DespecificacionesMotor, setDespecificacionesMotor] = useState(false)
  const [Ddimensiones, setDdimensiones] = useState(false)
  const [Dpesos, setDpesos] = useState(false)
  const [
    DespecificacionesDeLaTransmision,
    setDespecificacionesDeLaTransmision
  ] = useState(false)
  const [Dvelocidades, setDvelocidades] = useState(false)
  const [FinalJson, setFinalJson] = useState({})

  // const bgInput = useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')
  const data = prod => {
    let updatedValue = {}
    updatedValue = prod
    setFinalJson(shopCart => ({
      ...shopCart,
      ...updatedValue
    }))
  }

  //const para que nos envie los datos del JSON solo en caso de Veificacion
  const verify = (event, name) => {
    if (event == null || !(event.type === 'click')) {
      event = {
        [name]: event
      }
      data(event)
    }
  }

  //error modal
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  )
  //estados del Modal
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState()

  // cuando enviamos el formulario corroboramos que todos los formularios
  // este verificados y enviamos el JSON a la base de datos
  const onSubmit = () => {
    if (
      Dindentidad &&
      DespecificacionesMotor &&
      Ddimensiones &&
      Dpesos &&
      DespecificacionesDeLaTransmision &&
      Dvelocidades
    ) {
      window.alert('El Form se envio correctamente')
      //final JSON
      console.log(FinalJson)
    } else {
      //error
      setOverlay(<OverlayTwo />)
      onOpen()
    }
  }

  return (
    <Layout>
      {/* Modal */}
      <ErrorModal
        isOpen={isOpen}
        onClose={() => {
          onClose()
        }}
        overlay={overlay}
      />
      {/* FORMS---------------------------- */}
      <DatosIdentificativos
        verified={Dindentidad}
        onVerified={data => {
          setDidentidad(!Dindentidad)
          verify(data, 'datos_identificativos')
        }}
      />

      <EspecificacionesDelMotor
        verified={DespecificacionesMotor}
        onVerified={data => {
          setDespecificacionesMotor(!DespecificacionesMotor)
          verify(data, 'especificaciones_del_motor')
        }}
      />
      <Dimensiones
        verified={Ddimensiones}
        onVerified={data => {
          setDdimensiones(!Ddimensiones)
          verify(data, 'dimensiones')
        }}
      />
      <Pesos
        verified={Dpesos}
        onVerified={data => {
          setDpesos(!Dpesos)
          verify(data, 'pesos')
        }}
      />
      <EspecificacionesDeLaTransmision
        verified={DespecificacionesDeLaTransmision}
        onVerified={data => {
          setDespecificacionesDeLaTransmision(!DespecificacionesDeLaTransmision)
          verify(data, 'especificaciones_de_la_transmision')
        }}
      />
      <Velocidades
        verified={Dvelocidades}
        onVerified={data => {
          setDvelocidades(!Dvelocidades)
          verify(data, 'velocidades')
        }}
      />
      {/*---------------------------- */}
      <Box align="center">
        {' '}
        <Button w={150} h={12} colorScheme="teal" size="lg" onClick={onSubmit}>
          Enviar
        </Button>
      </Box>
    </Layout>
  )
}
export default Insert
