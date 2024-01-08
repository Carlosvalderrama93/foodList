import React from "react";

function Input({
  value,
  name,
  onChange,
  onClick,
  labelText,
  type,
  placeholder,
  min,
  max,
  required,
}) {
  return (
    <label for={name ?? ""}>
      {labelText}
      <input
        placeholder={placeholder ?? ""}
        required={required ?? false}
        value={value ?? ""}
        name={name ?? ""}
        onChange={onChange}
        onClick={onClick}
        type={type ?? "text"}
        min={min ?? undefined}
        max={max ?? undefined}
      />
    </label>
  );
}

export default Input;
