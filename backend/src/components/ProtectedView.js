import React, { useState, useEffect } from "react";
import axios from "axios";

const storedJwt = localStorage.getItem("token");

const AuthAxios = axios.create({
  headers: {
    Authorization: `Bearer ${storedJwt}`,
  },
});

export default function ProtectedView() {
  const [data, setData] = useState({});

  const fecthData = async () => {
    const data = await AuthAxios("/tod/todos/").then(
      (response) => {
        setData(...response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <button onClick={fecthData} className="is-button is-warning">
            Obtener data
          </button>
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
          <h1>
            ¿La tarea ha sido completada?
            <br />
            {data.completed ? "Si" : "No"}
          </h1>
        </div>
      </div>
    </div>
  );
}
