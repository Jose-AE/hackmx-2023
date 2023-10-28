"use client";
import React, { useState } from "react";
import axios from "axios";
import IApiResponse from "@/Interfaces/IApiResponse";

const MyComponent: React.FC<{
  setSelectedTable: any;
  setCol1: any;
  setCol2: any;
}> = ({ setSelectedTable, setCol1, setCol2 }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<IApiResponse>();

  const handleRequest = async () => {
    try {
      const apiResponse = await axios.post("/api/query", { message });
      const content = JSON.parse(apiResponse.data.content);
      setSelectedTable(content.table);
      setCol1(content.col1.name);
      setCol2(content.col2.name);
      setResponse(apiResponse.data);
      console.log(content);
    } catch (error) {
      console.error("Error al realizar la solicitud a la API:", error);
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
      {/* {response && (
        <div>
          <p>Respuesta de la API:</p>
          <pre>{response.content}</pre>
        </div>
      )} */}
    </div>
  );
};

export default MyComponent;
