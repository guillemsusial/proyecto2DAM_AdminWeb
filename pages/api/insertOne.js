import axios from 'axios'
import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())

app.post('/api/insertOne', async (req, res) => {
  const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq'

  const document = req.body.document

  const datas = {
    dataSource: 'Proyecto2DAM',
    database: 'CarWikiAR',
    collection: 'cars',
    document: document
  }

  try {
    const response = await axios.post(
      'https://data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/insertOne',
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
