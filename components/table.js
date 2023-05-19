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
import React from 'react'
import { useTable } from 'react-table'
import { RiEdit2Line } from 'react-icons/ri'
import { FaTrashAlt } from 'react-icons/fa'

export default function Tables({ columns, data }) {
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
                    window.alert('await axios.post(' + '/api/data' + ', datas)')
                  } //console.log(row.original)
                />
              </Td>
              <Td>
                <IconButton
                  colorScheme="red"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaTrashAlt />}
                  onClick={() =>
                    window.alert('await axios.post(' + '/api/data' + ', datas)')
                  } //console.log(row.original)
                />
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
