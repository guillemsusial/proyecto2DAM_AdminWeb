import { Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Insert from '../components/insert'

function Index() {
  return (
    <Layout>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Insert</Tab>
            <Tab>Edit</Tab>
            <Tab>Delete</Tab>
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
