import React from "react";

function Select({ labelText, name, value, onChange, options }) {
  return (
    <label for={name ?? ""}>
      {labelText}
      <select name={name ?? ""} value={value ?? ""} onChange={onChange}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default Select;
