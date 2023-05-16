import axios from 'axios'
import React, { useMemo, useState, useEffect } from 'react'

import Tables from './table'

function Seleccionar() {
  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'TV Show',
        // First group columns
        columns: [
          {
            Header: 'Name',
            accessor: 'documents.nombre'
          },
          {
            Header: 'Type',
            accessor: 'documents.datos_identificativos.serie'
          }
        ]
      }
      // },
      // {
      //   // Second group - Details
      //   Header: 'Details',
      //   // Second group columns
      //   columns: [
      //     {
      //       Header: 'Language',
      //       accessor: 'documents.datos_identificativos.pais_de_origen'
      //     },
      //     {
      //       Header: 'Genre(s)',
      //       accessor: 'documents.datos_identificativos.fabricante'
      //     },
      //     {
      //       Header: 'Runtime',
      //       accessor: 'documents.datos_identificativos.modelo'
      //     },
      //     {
      //       Header: 'Status',
      //       accessor: 'documents.datos_identificativos.generacion'
      //     }
      //   ]
      // }
    ],
    []
  )

  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([])
  const datas = {
    dataSource: 'Proyecto2DAM',
    database: 'CarWikiAR',
    collection: 'cars'
  }
  const secret =
    'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq'

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    ;(async () => {
      await axios
        .post(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })()
  }, [])

  return (
    <div className="App">
      <Tables columns={columns} data={data} />
    </div>
  )
}
export default Seleccionar
