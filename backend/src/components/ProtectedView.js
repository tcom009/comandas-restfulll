import React, { useState } from "react";
import axios from "axios";

export default function ProtectedView() {
  const axiosInstance = axios.create();
  const storedJwt = localStorage.getItem("token");
  const refreshJwt = localStorage.getItem("token-refresh");
  const [data, setData] = useState({});
  const [token, setToken] = useState(storedJwt);

  axiosInstance.interceptors.request.use(async function reFetch() {
    await axios({
      method: "get",
      url: "tod/todos/",
      headers: { Authorization: `Bearer ${storedJwt}` },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.response.status);
      }
    );
  });
  //here is the issue!!!
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async function (error) {
      if (error.response.status === 401) {
        await axios({
          method: "post",
          url: "api/token-refresh/",
          data: { refresh: refreshJwt },
        }).then(
          (response) => {
            console.log(response);
            localStorage.setItem("token", response.data.access);
            console.log("access: " + localStorage.getItem("token"));
            console.log("refresh: " + localStorage.getItem("token-refresh"));
            setToken(response.data.access);
          },
          (error) => {
            console.log(error.status);
          }
        );
      }
    }
  );

  async function fecthData() {
    await axios({
      method: "get",
      url: "tod/todos/",
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (response) => {
        console.log(response);
        //  setData()});
      },
      (error) => {
        console.log(`Error Code: ${error.response.status}`);
        if (error.response.status === 401) {
          setData([]);
        }
      }
    );
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <button
            onClick={() => {
              fecthData();
            }}
            className="button is-warning"
          >
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
