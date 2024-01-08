import React, { useContext } from "react";
import Food from "./Food";
import { FoodContext } from "../other/FoodProvider";

function Foods() {
  const foods = useContext(FoodContext);

  return (
    <ol>
      {foods.map((food) => (
        <Food food={food} key={food.id} />
      ))}
    </ol>
  );
}

export default Foods;
