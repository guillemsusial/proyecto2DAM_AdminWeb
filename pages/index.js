import { Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Insert from '../components/CPActions/insert'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Seleccionar from '../components/CPActions/select'

function Index() {
  return (
    <Layout>
      <Box mt={50}>
        <Tabs isFitted variant="enclosed" colorScheme="green">
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
              <BsFillDatabaseFill />
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'green.500' }}>
              <AiOutlinePlusCircle />
            </Tab>
            {/* <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>
              <FaPencilAlt />
            </Tab>
            <Tab _selected={{ color: 'white', bg: 'red.500' }}>
              <MdDelete />
            </Tab> */}
          </TabList>
          <TabPanels>
            <TabPanel>
              <Seleccionar />
            </TabPanel>
            <TabPanel>
              <Insert />
            </TabPanel>
            {/* <TabPanel>
              <Editar />
            </TabPanel>
            <TabPanel>
              <Delete />
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  )
}
export default Index
