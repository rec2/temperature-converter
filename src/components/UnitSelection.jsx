import React, { useState } from "react";

export default function UnitSelection() {
  const [units, setUnits] = useState([
    {
      value: "Kelvin"
    },
    {
      value: "Celcius"
    },
    {
      value: "Fahrenheit"
    },
    {
      value: "Rankine"
    }
  ]);

  function displayValue(event) {
    console.log(event.target.value);
  }

  // needs to return option value back to form
  return (
    <div className="spacing">
      <select name="unitList" defaultValue="Kelvin">
        {units.map(({ value }) => {
          return (
            <option
              onChange={displayValue}
              key={value}
              name={value}
              label={value}
              value={value}
            >
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
