import React, { useState } from "react";
import UnitSelection from "./UnitSelection";
import Axios from "axios"

export default function Convert() {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [problemInput, setProblemInput] = useState("");
  const [grade, setGrade] = useState("");
  const [desiredUnit, setDesiredUnit] = useState([
    {
      symbol: "K",
      unit: "Kelvin"
    },
    {
      symbol: "C",
      unit: "Celcuis"
    },
    {
      symbol: "K",
      unit: "Fahrenheit"
    },
    {
      symbol: "R",
      unit: "Rankine"
    }
  ]);
  const [formData, setFormData] = useState([
    {
      problem: problemInput,
      unit: selectedUnit,
      answer: studentAnswer,
      grade: grade
    }
  ]);

  // Determine and convert between beginning and ending unit and then deisplay a status
  function calculateGrade() {
    let authorizedValue = 0;
    const allowedCharacters = /^-?\d*\.?\d+/gim;
    const validInput = problemInput.match(allowedCharacters).toString();
    const validAnswer = studentAnswer.match(allowedCharacters).toString();

    if (selectedUnit === "Kelvin" && desiredUnit === "Fahrenheit") {
      authorizedValue = (Number(validAnswer) * 9) / 5 - 459.67;
    }

    if (selectedUnit === "Kelvin" && desiredUnit === "Celcius") {
      authorizedValue = Number(validAnswer) - 273.15;
    }

    if (selectedUnit === "Kelvin" && desiredUnit === "Rankine") {
      authorizedValue = (Number(validAnswer) * 9) / 5;
    }

    if (selectedUnit === "Celcius" && desiredUnit === "Fahrenheit") {
      authorizedValue = 1.8 * Number(validAnswer) + 32;
    }

    if (selectedUnit === "Celcius" && desiredUnit === "Rankine") {
      authorizedValue = (Number(validAnswer) + 273.15) * 1.8;
    }

    if (selectedUnit === "Celcius" && desiredUnit === "Kelvin") {
      authorizedValue = Number(validAnswer) + 273;
    }

    if (selectedUnit === "Fahrenheit" && desiredUnit === "Rankine") {
      authorizedValue = Number(validAnswer) + 459.67;
    }

    if (selectedUnit === "Fahrenheit" && desiredUnit === "Kelvin") {
      authorizedValue = ((Number(validAnswer) + 459.67) * 5) / 9;
    }

    if (selectedUnit === "Fahrenheit" && desiredUnit === "Celcius") {
      authorizedValue = ((Number(validAnswer) - 32) * 5) / 9;
    }

    if (
      validAnswer != null &&
      validInput != null &&
      validAnswer === authorizedValue
    ) {
      setFormData({
        problem: problemInput,
        unit: selectedUnit,
        answer: studentAnswer
      });
      setGrade("valid");
    } else {
      setGrade("invalid");
    }
  }

  // Prevent form submission
  function handleClick(event) {
    event.preventDefault();
    console.log(selectedUnit);
  }

  function handleStudentInputChange(event) {
    setStudentAnswer(event.target.value);
  }

  function handleProblemInputChange(event) {
    setProblemInput(event.target.value);
  }

  function handleStartingUnitChange(event) {
    const { value } = event.target;
    setSelectedUnit(event.target.value);
    return value;
  }

  function handleDesiredUnitChange(event) {
    const { value } = event.target;
    setDesiredUnit(event.target.value);
    return value;
  }

  // Send completed question to database
  async function submitToDatabase() {
    const pendingForm = await Axios({
      method: "post",
      url: "/problem",
      data: formData
    });
  }

  return (
    <div>
      <div className="spacing">
        <h1>Form</h1>
        <form onSubmit={submitToDatabase} method="POST">
          <label>Enter Problem</label>
          <input
            type="number"
            name="problemInput"
            placeholder="1234"
            value={studentAnswer.answer}
          />
          <label>Starting Unit</label>
          <UnitSelection value={handleDesiredUnitChange} />
          <label className="spacing">Desired Unit</label>
          <UnitSelection onChange={handleDesiredUnitChange} />

          <label name="answer">Student Answer</label>
          <input
            type="number"
            name="studentAnswer"
            placeholder="12.5"
            value={studentAnswer.answer}
          />
          <button onClick={calculateGrade}>Submit</button>
        </form>
        <div>
          <p>Grade of: {grade}</p>
        </div>
      </div>
    </div>
  );
}
