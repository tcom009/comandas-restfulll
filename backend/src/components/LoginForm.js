import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [logedUser, setLogedUser] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState(false);
  //const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsError(false);
    setErrorMessage("");
    setIsLoading(true);
    await axios({
      method: "post",
      url: "api/token-auth/",
      data: { username: username, password: password },
    }).then(
      (response) => {
        //setData({ ...response });
        console.log(response);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("token-refresh", response.data.refresh);
        setIsLogedIn(true);
        setIsLoading(false);
        console.log("access: " + localStorage.getItem("token"));
        console.log("refresh: " + localStorage.getItem("token-refresh"));
        setLogedUser(username);
        //setUsername(response.username);
      },
      (error) => {
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(error.message);
        console.log(error.message);
        // setIsError((isError.errorState = true));
        // setIsError((isError.message = error));
      }
    );
  };

  const loginMessages = () => {
    if (isError) {
      console.log(errorMessage);
      return <h1> Ha ocurrido un error: {errorMessage} </h1>;
    } else {
      if (isLogedIn) {
        return <h1>Bienvenido {logedUser}</h1>;
      }
    }
    return <h1> Ingresa Tus credenciales</h1>;
  };

  return (
    <div className="container">
      <div className="Box">
        <div className="column has-text-centered has-text-weight-bold">
          Bienvenido
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input "
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <div className="column">
          {!isLoading ? (
            <button
              className="button is-fullwidth is-primary"
              onClick={handleLogin}
            >
              Log In!
            </button>
          ) : (
            <button className="button is-fullwidth is-primary is-loading"></button>
          )}
        </div>{" "}
      </div>
      <div>{loginMessages()}</div>
    </div>
  );
}
