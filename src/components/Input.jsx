import React from "react";

function Input({ value, name, event, labelText, type, placeholder }) {
  return (
    <label>
      {labelText}
      <input value={value} name={name} onChange={event} />
    </label>
  );
}

export default Input;
