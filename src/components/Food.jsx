import React from "react";

function Food({ food }) {
  const { id, name, type, quantity } = food;
  return (
    <li key={id}>
      <h3>{name}</h3>
      <h4> {type} </h4>
      <p>Left: {quantity}</p>
    </li>
  );
}

export default Food;
