import React from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third">
          <LoginForm />
        </div>
        <div className="column is-one-third"></div>
      </div>
    </div>
  );
}
