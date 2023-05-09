import { Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Insert from '../components/insert'

function Index() {
  return (
    <Layout>
      <Box mt={50}>
        <Tabs isFitted variant="enclosed" colorScheme="green">
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'green.500' }}>Insert</Tab>
            <Tab _selected={{ color: 'white', bg: 'yellow.500' }}>Edit</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.500' }}>Delete</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Insert />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>hola</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  )
}
export default Index
