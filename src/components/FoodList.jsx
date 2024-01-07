import React from "react";
import Food from "./Food";

function FoodList({ foodList }) {
  return (
    <ul>
      {foodList.map((food) => (
        <Food food={food} />
      ))}
    </ul>
  );
}

export default FoodList;
