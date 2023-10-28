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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Consulta a la API:</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu consulta aquí"
          style={{
            backgroundColor: "#DEF3C4",  // Verde claro
            color: "black", // Color del texto
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",  // Sombras
            borderRadius: "8px",  // Redondea los bordes ajustando el valor
            resize: "vertical",  // Permite que el campo se expanda verticalmente
          }}
          rows={3}  // Número de filas iniciales (altura)
          cols={120}  // Número de columnas iniciales (anchura)
        />

        <br />
        <button
          onClick={handleRequest}
          style={{
            backgroundColor: "#57DEC3", // Color de fondo
            color: "white", // Color del texto
            borderRadius: "25px", // Redondea los bordes (ajusta el valor según tu preferencia)
            padding: "10px 20px", // Ajusta el relleno (padding) según tu preferencia
            cursor: "pointer", // Cambia el cursor al pasar el mouse
            border: "none", // Quita el borde
          }}
        >
          Enviar Consulta
        </button>
      </div>

      {response && (
        <div>
          <p>Respuesta de la API:</p>
          <pre>{response.content}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;

