import axios from 'axios';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.post('/api/selectAll', async (req, res) => {
  const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq';
  console.log(req.body);

  try {
    const response = await axios.post(
      'https://data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/find',
      req.body,
      {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': secret,
            Accept: 'application/json'
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
