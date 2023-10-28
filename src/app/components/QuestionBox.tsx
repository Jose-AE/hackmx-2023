"use client"
import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleRequest = async () => {
    try {
      const apiResponse = await axios.post('/api/query', { message });
      setResponse(apiResponse.data);
    } catch (error) {
      console.error('Error al realizar la solicitud a la API:', error);
    }
  };
  

  return (
    <div>
      <h1>Consulta a la API</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu consulta aquí"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleRequest}>Enviar Consulta</button>
      {response && (
        <div>
          
          <p>Respuesta de la API:</p>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;

