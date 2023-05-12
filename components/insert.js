//custom Layout
import Layout from './layouts/article'
import React, { useState } from 'react'
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
  TabIndicator,
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
  //En este estado se guarda el JSON que mas adelante mandaremos a la BBDD
  const [FinalJson, setFinalJson] = useState({})

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

  //Esta contante es un overlay que pertenece al Modal de error de envio de formulario
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  )

  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState()

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
  //Est constante funciona de Componente para controlar los estilos de los subformularios ,
  //controllando cual es el estado de de cada uno de los subformularios
  const SubTabs = props => {
    let styles
    console.log(props.subFormState)
    if (props.subFormState) {
      styles = {
        color: 'white',
        backgroundColor: '#40a46c'
      }
    } else {
      styles = {
        color: 'white',
        backgroundColor: '#e83c3c'
      }
    }
    return <Tab style={styles}>{props.name}</Tab>
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
      {/* ------------------FORMS/TABS---------------------------- */}
      <Tabs isFitted onChange={() => {}} size="md" variant="enclosed">
        <TabList
          mb="0.1em"
          _selected={{ fil: 'drop-shadow(2px 4px 6px black)' }}
        >
          <SubTabs subFormState={Dindentidad} name={'Datos Identificativos'} />
          <SubTabs
            subFormState={DespecificacionesMotor}
            name={'Especificaciones del Motor'}
          />
          <SubTabs subFormState={Ddimensiones} name={'Dimensiones'} />
          <SubTabs subFormState={Dpesos} name={'Pesos'} />
          <SubTabs
            subFormState={DespecificacionesDeLaTransmision}
            name={'Especificaciones de la Transmision'}
          />
          <SubTabs subFormState={Dvelocidades} name={'Velocidades'} />
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="4px"
          bg="#e0e1e5"
          borderRadius="1px"
        />
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

      {/*--------------------------------------------------- */}

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
