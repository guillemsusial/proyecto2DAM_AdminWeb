import axios from 'axios';
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());

app.post('/api/login/checkUser', async (req, res) => {
  const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq';

  const username = req.body.email
  const password = req.body.password

  // Validación y sanitización de los datos de entrada
  if (!username || !password) {
    console.log('Faltan datos de usuario');
    res.json(false)
  }else{
    const data = {
      dataSource: "Proyecto2DAM",
      database: "CarWikiAR",
      collection: "users",
      filter: {
        email: username
      },
      projection:{
          password: 1
      }
    };

    try {
      const response = await axios.post(
        'https://data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/find',
        data,
        {
          headers: {
              'Content-Type': 'application/json',
              'Access-Control-Request-Headers': '*',
              'api-key': secret,
              Accept: 'application/json'
            }
        }
      );

      if (response.data.documents.length > 0) {
        const hash = response.data.documents[0].password;
        const result = bcrypt.compareSync(password, hash);
        if(result){
          res.json(true)
        }else{
          res.json(false)
        }
      } else {
        console.log('El nombre de usuario o la contraseña son incorrectos');
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
});

export default app;