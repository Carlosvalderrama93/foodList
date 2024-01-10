import React from "react";

function Select({
  labelText,
  name,
  value,
  event,
  options,
  classLabel,
  className,
}) {
  return (
    <label className={classLabel}>
      {labelText ?? ""}
      <select
        name={name ?? ""}
        value={value ?? ""}
        onChange={(e) => event(e)}
        className={className}
      >
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
