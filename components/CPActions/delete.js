import { useState } from 'react';
import { Input } from '@chakra-ui/input';
import Layout from '../layouts/article';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import axios from 'axios';

export default function Delete() {
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = async () => {
    try {
      if (!nombre) {
        setError('Por favor, ingrese un nombre');
        return;
      }
  
      setError('');
      window.alert(nombre);
  
      const response = await axios.post('/api/deleteOne', { nombre });
      setResult(response);
    } catch (error) {
      setError('Error al enviar la solicitud: ' + error.response.data);
    }
    window.alert(result);
  };

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <Layout>
      <Input mb={12} placeholder="Inserte el nombre:" value={nombre} onChange={handleInputChange} />
      {error && <p>{error}</p>}
      <Box align="center">
        <Button w={150} h={12} colorScheme="teal" size="lg" onClick={onSubmit}>
          Enviar
        </Button>
      </Box>
    </Layout>
  );
}
