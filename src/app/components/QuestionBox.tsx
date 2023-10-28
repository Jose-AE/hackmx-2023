"use client";
import React, { useState } from "react";
import axios from "axios";
import IApiResponse from "@/Interfaces/IApiResponse";

const MyComponent: React.FC<{
  setSelectedTable: any;
  setCol1: any;
  setCol2: any;
  setPlotType: any;
}> = ({ setSelectedTable, setCol1, setCol2, setPlotType }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<IApiResponse>();

  const handleRequest = async () => {
    try {
      const apiResponse = await axios.post("/api/query", { message });
      const content = JSON.parse(apiResponse.data.content);
      setSelectedTable(content.table);
      setCol1(content.col1.name);
      setCol2(content.col2.name);
      setPlotType(content.plot_type);
      setResponse(apiResponse.data);
      console.log(content);
    } catch (error) {
      console.error("Error al realizar la solicitud a la API:", error);
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
            backgroundColor: "#61B624", // Color de fondo
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
    </div>
  );
};

export default MyComponent;

