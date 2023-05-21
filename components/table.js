/* eslint-disable react/jsx-key */
// Table.js

import { IconButton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { React, useState } from 'react'
import { useTable } from 'react-table'
import { RiEdit2Line } from 'react-icons/ri'
import { FaTrashAlt, FaSyncAlt } from 'react-icons/fa'
import axios from 'axios'
import ErrorModal from './errorModal'
import { Text, Box, Button, useDisclosure } from '@chakra-ui/react'
import Layout from './layouts/article'
import Editar from './CPActions/edit'

export default function Tables({ columns, data, refreshData }) {
  //Estos 2 estados nos sirven para controlar los estados del MODAL de ERROR
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose
  } = useDisclosure()
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose
  } = useDisclosure()

  const [ModelDelete, setModelDelete] = useState()
  const [AllData, setAllDAta] = useState()

  const handleRefresh = async () => {
    await refreshData()
  }

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
        isOpen={isDeleteOpen}
        onClose={() => {
          onDeleteClose()
        }}
        //falta un diccionario de errores
        text={
          <>
            <Text>Esta seguro de eliminar este vehiculo?</Text>
            <br />
            <Text>{ModelDelete}</Text>
            <br />
            <Box align="center">
              <Button
                colorScheme="teal"
                id="submit-D"
                type="submit"
                onClick={() => {
                  axios
                    .post('/api/deleteOne', { ModelDelete })
                    .then(() => {
                      // Llamada Delete Axios
                      onDeleteClose()
                      handleRefresh()
                    })
                    .catch(error => console.log(error))
                }}
              >
                SIS
              </Button>
            </Box>
          </>
        }
      />
      <ErrorModal
        isOpen={isEditOpen}
        large={'full'}
        header={'Edit'}
        color={'#1d222c'}
        onClose={() => {
          onEditClose()
        }}
        //falta un diccionario de errores
        text={<Editar content={AllData} />}
      />
      <Box align="right">
        <IconButton
          colorScheme="cyan"
          icon={<FaSyncAlt />}
          onClick={() => handleRefresh()}
        />
      </Box>

      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              <Th>Number</Th>
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
                <Td>{i + 1}</Td>
                {row.cells.map(cell => {
                  return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                })}

                <Td>
                  <IconButton
                    colorScheme="teal"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<RiEdit2Line />}
                    onClick={() => {
                      onEditOpen()
                      setAllDAta(row.original)
                    }}
                  />
                </Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<FaTrashAlt />}
                    onClick={() =>
                      {
                        onDeleteOpen()
                        setModelDelete(row.original.nombre)
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
