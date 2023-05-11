//custom Layout
import Layout from './layouts/article'
import React, { useEffect, useState } from 'react'
//componentes Form
import DatosIdentificativos from './CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from './CPanelComponets/EspecificacionesDelMotor'
import Pesos from './CPanelComponets/Pesos'
import Dimensiones from './CPanelComponets/Dimensiones'
import EspecificacionesDeLaTransmision from './CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from './CPanelComponets/Velocidades'
//chakra
import {
  Box,
  Button,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure
} from '@chakra-ui/react'
//modal
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

  useEffect(() => {
    console.log(Dindentidad)
  }, [Dindentidad])

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
    if (event != null || !(event.type === 'click')) {
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
      <Tabs isFitted onChange={() => {}}>
        <TabList mb="0.1em">
          <Tab
            color={Dindentidad ? 'white' : 'white'}
            bg={Dindentidad ? 'green.500' : 'red.500'}
          >
            Datos Identificativos
          </Tab>
          <Tab
            color={DespecificacionesMotor ? 'white' : 'white'}
            bg={DespecificacionesMotor ? 'green.500' : 'red.500'}
          >
            Especificaciones del Motor
          </Tab>
          <Tab
            color={Ddimensiones ? 'white' : 'white'}
            bg={Ddimensiones ? 'green.500' : 'red.500'}
          >
            Dimensiones
          </Tab>
          <Tab
            color={Dpesos ? 'white' : 'white'}
            bg={Dpesos ? 'green.500' : 'red.500'}
          >
            Pesos
          </Tab>
          <Tab
            color={DespecificacionesDeLaTransmision ? 'white' : 'white'}
            bg={DespecificacionesDeLaTransmision ? 'green.500' : 'red.500'}
          >
            Especificaciones de la Transmision
          </Tab>
          <Tab
            color={Dvelocidades ? 'white' : 'white'}
            bg={Dvelocidades ? 'green.500' : 'red.500'}
          >
            Velocidades
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {' '}
            <DatosIdentificativos
              verified={Dindentidad}
              onVerified={data => {
                setDidentidad(!Dindentidad)
                verify(data, 'datos_identificativos')
              }}
            />
          </TabPanel>
          <TabPanel>
            {' '}
            <EspecificacionesDelMotor
              verified={DespecificacionesMotor}
              onVerified={data => {
                setDespecificacionesMotor(!DespecificacionesMotor)
                verify(data, 'especificaciones_del_motor')
              }}
            />
          </TabPanel>
          <TabPanel>
            <Dimensiones
              verified={Ddimensiones}
              onVerified={data => {
                setDdimensiones(!Ddimensiones)
                verify(data, 'dimensiones')
              }}
            />
          </TabPanel>
          <TabPanel>
            <Pesos
              verified={Dpesos}
              onVerified={data => {
                setDpesos(!Dpesos)
                verify(data, 'pesos')
              }}
            />
          </TabPanel>
          <TabPanel>
            {' '}
            <EspecificacionesDeLaTransmision
              verified={DespecificacionesDeLaTransmision}
              onVerified={data => {
                setDespecificacionesDeLaTransmision(
                  !DespecificacionesDeLaTransmision
                )
                verify(data, 'especificaciones_de_la_transmision')
              }}
            />
          </TabPanel>
          <TabPanel>
            {' '}
            <Velocidades
              verified={Dvelocidades}
              onVerified={data => {
                setDvelocidades(!Dvelocidades)
                verify(data, 'velocidades')
              }}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

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
