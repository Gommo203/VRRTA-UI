import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterSetup from "./components/router";

function App() {
  return (
    <div>
      <Router>
        <RouterSetup />
      </Router>
    </div>
  );
}

export default App;
