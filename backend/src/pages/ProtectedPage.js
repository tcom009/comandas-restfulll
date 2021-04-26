import React from "react";
import ProtectedView from "../components/ProtectedView";

export default function ProtectedPage() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third">
          <ProtectedView />
        </div>
        <div className="column is-one-third"></div>
      </div>
    </div>
  );
}
