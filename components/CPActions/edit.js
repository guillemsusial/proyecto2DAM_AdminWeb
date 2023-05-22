//custom Layout
import Layout from '../layouts/article'
import React, { useState } from 'react'
//componentes Form
import DatosIdentificativos from '../CPanelComponets/DatosIdentificativos'
import EspecificacionesDelMotor from '../CPanelComponets/EspecificacionesDelMotor'
import Pesos from '../CPanelComponets/Pesos'
import Dimensiones from '../CPanelComponets/Dimensiones'
import EspecificacionesDeLaTransmision from '../CPanelComponets/EspecificacionesDeLaTransmision'
import Velocidades from '../CPanelComponets/Velocidades'
import Nombre from '../CPanelComponets/Nombre'
import axios from 'axios'
//chakra
import {
  Box,
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure
} from '@chakra-ui/react'
//modal
import ErrorModal from '../errorModal'

function Editar({ content }) {
  const [Contents] = useState(content)

  //Creamos el estado del formulario (por verificar , es decir False)
  const [Dindentidad, setDidentidad] = useState(false)
  const [DespecificacionesMotor, setDespecificacionesMotor] = useState(false)
  const [Ddimensiones, setDdimensiones] = useState(false)
  const [Dpesos, setDpesos] = useState(false)
  const [Nombres, setNombres] = useState(false)
  const [
    DespecificacionesDeLaTransmision,
    setDespecificacionesDeLaTransmision
  ] = useState(false)
  const [Dvelocidades, setDvelocidades] = useState(false)
  //En este estado se guarda el JSON que mas adelante mandaremos a la BBDD
  const [document, setdocument] = useState({})

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

  // const para que nos envie los datos del JSON solo en caso de Veificacion
  const verify = (event, name) => {
    if (event != null || !(event.type === 'click')) {
      if (name == 'nombre') {
        event = {
          nombre: event.nombre,
          url: event.url
        }
      } else {
        event = {
          [name]: event
        }
      }
      data(event)
    }
  }

  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const { isOpen, onOpen, onClose } = useDisclosure()

  // cuando enviamos el formulario corroboramos que todos los formularios
  // este verificados y enviamos el JSON a la base de datos
  const onSubmit = async () => {
    //falta cerrar modal
    const nombreOg = Contents.nombre
    if (
      Nombres &&
      Dindentidad &&
      DespecificacionesMotor &&
      Ddimensiones &&
      Dpesos &&
      DespecificacionesDeLaTransmision &&
      Dvelocidades
    ) {
      try {
        const response = await axios.post('/api/updateOne', {
          document,
          nombreOg
        })
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    } else {
      //error

      onOpen()
    }
  }
  //Est constante funciona de Componente para controlar los estilos de los subformularios ,
  //controllando cual es el estado de de cada uno de los subformularios en tiempo real
  const SubTabs = props => {
    let styles
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
        onClose={() => {
          onClose()
        }}
      />
      {/* ------------------FORMS/TABS---------------------------- */}
      <Tabs isFitted onChange={() => {}} size="md" variant="enclosed">
        <TabList
          mb="0.1em"
          _selected={{ fil: 'drop-shadow(2px 4px 6px black)' }}
        >
          <SubTabs subFormState={Nombres} name={'Nombre'} />
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
            <Nombre
              verified={Nombres}
              contents={Contents ? [Contents.nombre, Contents.url] : null}
              onVerified={data => {
                setNombres(!Nombres)
                verify(data, 'nombre')
              }}
            />
          </TabPanel>
          <TabPanel>
            {' '}
            <DatosIdentificativos
              verified={Dindentidad}
              contents={Contents ? Contents.datos_identificativos : null}
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
              contents={Contents ? Contents.especificaciones_del_motor : null}
              onVerified={data => {
                setDespecificacionesMotor(!DespecificacionesMotor)
                verify(data, 'especificaciones_del_motor')
              }}
            />
          </TabPanel>
          <TabPanel>
            <Dimensiones
              verified={Ddimensiones}
              contents={Contents ? Contents.dimensiones : null}
              onVerified={data => {
                setDdimensiones(!Ddimensiones)
                verify(data, 'dimensiones')
              }}
            />
          </TabPanel>
          <TabPanel>
            <Pesos
              verified={Dpesos}
              contents={Contents ? Contents.pesos : null}
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
              contents={
                Contents ? Contents.especificaciones_de_la_transmision : null
              }
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
              contents={Contents ? Contents.velocidades : null}
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
export default Editar
