import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import Home from "./pages/Home";
function App() {
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
