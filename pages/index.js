import Layout from '../components/layouts/article'
import React, { useState } from 'react'
import DatosIdentificativos from '../components/CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from '../components/CPanelComponets/EspecificacionesDelMotor'
import Pesos from '../components/CPanelComponets/Pesos'
import Dimensiones from '../components/CPanelComponets/Dimensiones'
import EspecificacionesDeLaTransmision from '../components/CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from '../components/CPanelComponets/Velocidades'
import { Box, Button } from '@chakra-ui/react'

function Index() {
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

    //final JSON
    console.log(FinalJson)
  }

  //const para que nos envie los datos del JSON solo en caso de Veificacion
  const verify = (event, name) => {
    if (event == null || !(event.type === 'click')) {
      event = {
        [name]: event
      }
      data(event)
    }

    // console.log('/*------------------*/')
    // console.log('Didentidad :' + Dindentidad)
    // console.log('DespecificacionesMotor :' + DespecificacionesMotor)
    // console.log('Ddimensiones :' + Ddimensiones)
    // console.log('Dpesos :' + Dpesos)
    // console.log(
    //   'DespecificacionesDeLaTransmision :' + DespecificacionesDeLaTransmision
    // )
    // console.log('Dvelocidades :' + Dvelocidades)
    // console.log('/*------------------*/')
  }
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
    } else {
      window.alert('Faltan por verificar datos')
    }

    console.log([FinalJson])
  }

  return (
    <Layout>
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
      <Box align="center">
        {' '}
        <Button w={150} h={12} colorScheme="teal" size="lg" onClick={onSubmit}>
          Enviar
        </Button>
      </Box>
    </Layout>
  )
}
export default Index
