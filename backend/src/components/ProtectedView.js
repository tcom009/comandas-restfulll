import React, { useState, useEffect } from "react";
import axios from "axios";

// const AuthAxios = axios.create({
//   headers: {
//     Authorization: `Bearer ${storedJwt}`,
//   },
// });

export default function ProtectedView() {
  const storedJwt = localStorage.getItem("token");
  const refreshJwt = localStorage.getItem("token-refresh");
  const [data, setData] = useState({});
  const [token, setToken] = useState(storedJwt);
  const refreshToken = async () => {
    await axios({
      method: "post",
      url: "api/token-refresh/",
      data: { refresh: refreshJwt },
    }).then(
      (response) => {
        console.log(response);
        localStorage.setItem("token", response.data.access);
        setToken(response.data.access);
        console.log("access: " + localStorage.getItem("token"));
        console.log("refresh: " + localStorage.getItem("token-refresh"));
      },
      (error) => {
        console.log(error.message);
      }
    );
  };

  const fecthData = async () => {
    await axios({
      method: "get",
      url: "tod/todos/",
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (response) => {
        setData(...response.data);
        console.log(response.data);
      },
      (error) => {
        console.log(error);
        refreshToken();
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
