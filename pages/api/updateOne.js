import axios from 'axios'
import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.post('/api/updateOne', async (req, res) => {
  const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq'

  const nombre = req.body.nombreOg
  const document = req.body.document

  const datas = {
    dataSource: 'Proyecto2DAM',
    database: 'CarWikiAR',
    collection: 'cars',
    filter: { nombre: nombre },
    update: {
        $set: {
            nombre: document.nombre,
            url: document.url,
            datos_identificativos: document.datos_identificativos,
            especificaciones_del_motor: document.especificaciones_del_motor,
            dimensiones: document.dimensiones,
            pesos: document.pesos,
            especificaciones_de_la_transmision: document.especificaciones_de_la_transmision,
            velocidades: document.velocidades
        }
    }
  }

  try {
    const response = await axios.post(
      'https://data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/updateOne',
      datas,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': secret
        }
      }
    )

    res.json(response.data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

export default app
