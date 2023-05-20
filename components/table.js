/* eslint-disable react/jsx-key */
// Table.js

import {  
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { React, useState } from 'react'
import { useTable } from 'react-table'
import { RiEdit2Line } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios';
import ErrorModal from './errorModal'
import { Text, Box, Button, useDisclosure } from '@chakra-ui/react'
import Layout from './layouts/article'

export default function Tables({ columns, data }) {
  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ confirmDelete, setconfirmDelete ] = useState(false)

  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  })

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <Layout>
      <ErrorModal
          isOpen={isOpen}
          onClose={() => {
            onClose()
          }}
          //falta un diccionario de errores
          text={
            <>
              <Text>
                Esta seguro de eliminar este vehiculo?:
              </Text>
              <br />
              {/* FALTA/MEJORA que te ponga el nombre del coche actual*/}
              <Box align="center">
                <Button colorScheme="teal" id="submit-D" type="submit" onClick={onClose()}>
                  SIS
                </Button>
              </Box>
            </>
          }
        />
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
              <Th></Th>
              <Th></Th>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <Tr key={i} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                })}

                <Td>
                  <IconButton
                    colorScheme="teal"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<RiEdit2Line />}
                    onClick={() =>
                      //window.alert('await axios.post(' + '/api/data' + ', datas)')
                      console.log(row.original)
                    } 
                  />
                </Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<FaTrashAlt />}
                    onClick={() =>
                      //window.alert('await axios.post(' + '/api/data' + ', datas)')
                      {
                        onOpen()
                        if(confirmDelete){
                          axios.post('/api/deleteOne', row.original.nombre)
                          .then(() => {
                            console.log("Eliminado correctamente")
                            setconfirmDelete(false)
                          })
                          .catch((error) => console.log(error))
                        }
                        console.log(confirmDelete)
                      }
                    }
                  />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Layout>
  )
}
