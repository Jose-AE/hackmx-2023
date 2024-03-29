"use client";
import React, { useState } from "react";
import axios from "axios";
import IApiResponse from "@/Interfaces/IApiResponse";
import { Button } from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

const MyComponent: React.FC<{
  setSelectedTable: any;
  setCol1: any;
  setCol2: any;
  setPlotType: any;
}> = ({ setSelectedTable, setCol1, setCol2, setPlotType }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<IApiResponse>();
  const [requestLoading, setRequestLoading] = useState(false);

  const toast = useToast();

  const handleRequest = async () => {
    try {
      setRequestLoading(true);
      const apiResponse = await axios.post("/api/query", { message });
      const content = JSON.parse(apiResponse.data.content);
      setSelectedTable(content.table);
      setCol1(content.col1.name);
      setCol2(content.col2.name);
      setPlotType(content.plot_type);
      setResponse(apiResponse.data);
      console.log(content);
      setRequestLoading(false);
    } catch (error) {
      setRequestLoading(false);
      toast({
        title: "No se tienen los datos nesecarios para contestar esta pregunta",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error("Error al realizar la solicitud a la API:", error);
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Haz una pregunta sobre el estatus del sector del aguacate:</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu consulta aquí"
          style={{
            marginTop: "15px",
            padding: "15px",
            backgroundColor: "#DEF3C4", // Verde claro
            color: "black", // Color del texto
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Sombras
            borderRadius: "8px", // Redondea los bordes ajustando el valor
            resize: "none", // Permite que el campo se expanda verticalmente
          }}
          rows={3} // Número de filas iniciales (altura)
          cols={120} // Número de columnas iniciales (anchura)
        />

        <br />
        <Button
          isLoading={requestLoading}
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
          Enviar Pregunta
        </Button>
      </div>
    </div>
  );
};

export default MyComponent;
