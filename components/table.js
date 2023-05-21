/* eslint-disable react/jsx-key */

// Table.js

import { IconButton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { React, useState } from 'react'
import { useTable, useSortBy } from 'react-table'
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

  // Utilice useTable Hook para enviar las columnas y los datos para construir la tabla
  const {
    getTableProps, // accesorios de table de react-table
    getTableBodyProps, // table body props de react-table
    headerGroups, // headerGroups, para los headers de nuestra tabla
    rows, // filas para la tabla en función de los datos pasados
    prepareRow // Prepare la fila (esta función debe llamarse para cada fila 
    //antes de obtener los accesorios de la fila)
  } = useTable(
    {
      columns,
      data
    },
    useSortBy //sorting library
  )

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
                Confirmar
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
              {headerGroup.headers.map(column => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🡫' : ' 🡩') : ''}
                  </span>
                </Th>
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
                    onClick={() => {
                      onDeleteOpen()
                      setModelDelete(row.original.nombre)
                    }}
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
