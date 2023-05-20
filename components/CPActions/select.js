import axios from 'axios'
import React, { useMemo, useState, useEffect } from 'react'
import Tables from '../table'

function Seleccionar() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const datas = {
      dataSource: 'Proyecto2DAM',
      database: 'CarWikiAR',
      collection: 'cars'
    }

    const result = await axios.post('/api/selectAll', datas)
    setData(result.data.documents)
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Documents',
        columns: [
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
      }
    ],
    []
  )

  return (
    <div className="App">
      <Tables columns={columns} data={data} refreshData={fetchData} />
    </div>
  )
}

export default Seleccionar
