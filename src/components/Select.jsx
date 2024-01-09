import React from "react";

function Select({ labelText, name, value, event, options }) {
  return (
    <label>
      {labelText ?? ""}
      <select name={name ?? ""} value={value ?? ""} onChange={(e) => event(e)}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.sortBy}>
              {option.text}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default Select;
