import axios from 'axios'
import React, { useMemo, useState, useEffect } from 'react'
import Tables from '../table'

function Seleccionar() {
  //aqui alojaremos los datos que recibimos de la base de datos
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchData()
  }, [])
  //esta funcion asyncrona nos trae todos los modelos de la base de datos
  //y los inserta en la constante data 
  const fetchData = async () => {
    const datas = {
      dataSource: 'Proyecto2DAM',
      database: 'CarWikiAR',
      collection: 'cars'
    }

    const result = await axios.post('/api/selectAll', datas)
    setData(result.data.documents)
  }
  //esta constante nos sirve de plantilla para pasarle todos los datos al componente TABLE 
  //en el cual mediante un map los mostraremos al usuario
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
