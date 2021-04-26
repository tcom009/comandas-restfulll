import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import Home from "./pages/Home";

const refreshJwt = localStorage.getItem("token-refresh");
const axiosInstance = axios.create();
function App() {
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
          },
          (error) => {
            console.log(error.status);
          }
        );
      }
    }
  );

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/protected" component={ProtectedPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
