import axios from 'axios';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.post('/api/deleteOne', async (req, res) => {
  const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq';
  console.log(req.body);

  const { nombre } = req.body;

  const datas = {
    dataSource: 'Proyecto2DAM',
    database: 'CarWikiAR',
    collection: 'cars',
    filter: {
      nombre: nombre
    }
  };

  try {
    const response = await axios.post(
      'https://data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/deleteOne',
      datas,
      {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': secret
          }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default app;
