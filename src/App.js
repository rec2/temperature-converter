import React, { useState } from "react";
import './App.css';
import ConvertForm from "./components/ConvertForm"

function App() {
  const [units, setUnit] = useState([
    "Kelvin",
    "Celcius",
    "Fahrenheit",
    "Rankie"
  ]);

  return (
    <div className="App test">
      <ConvertForm />
    </div>
  );
}

export default App;
