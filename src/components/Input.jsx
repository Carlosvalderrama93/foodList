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
  className,
  classLabel,
}) {
  return (
    <label className={classLabel}>
      {labelText ?? ""}
      <input
        className={className}
        placeholder={placeholder ?? ""}
        required={required ?? false}
        value={value ?? ""}
        name={name ?? ""}
        onChange={(e) => onChange(e)}
        onClick={onClick}
        type={type ?? "text"}
        min={min ?? undefined}
        max={max ?? undefined}
      />
    </label>
  );
}

export default Input;
