import axios from 'axios'
import React, { useMemo, useState, useEffect } from 'react'

import Tables from './table'
import { Button } from '@chakra-ui/button'

function Seleccionar() {
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    const datas = {
      dataSource: 'Proyecto2DAM',
      database: 'CarWikiAR',
      collection: 'cars'
    }
    ;(async () => {
      const result = await axios.post('/api/data', datas)

      setData(result.data.documents)
    })()
  }, [])

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setData(result.data);
  //   })();
  // }, []);
  const Edit = () => {
    return <Button bg={'orange'} />
  }
  const Delete = () => {
    return <Button bg={'red'} />
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Documents',
        columns: [
          {
            Header: 'ID',
            accessor: '_id'
          },
          {
            Header: 'Nombre',
            accessor: 'nombre'
          }
        ]
      },
      {
        Header: 'General Info',
        columns: [
          {
            Header: 'Fabricante',
            accessor: 'datos_identificativos.fabricante'
          },
          {
            Header: 'Modelo',
            accessor: 'datos_identificativos.modelo'
          }
        ]
      },
      {
        Header: 'Options',
        columns: [
          {
            Header: 'Update',
            accessor: Edit
          },
          {
            Header: 'Delete',
            accessor: Delete
          }
        ]
      }
    ],
    []
  )

  return (
    <div className="App">
      <Tables columns={columns} data={data} />
    </div>
  )
}

export default Seleccionar
