import React, { useContext } from "react";
import Food from "./Food";
import { FoodContext } from "../other/FoodProvider";

function FoodList() {
  const { foodList } = useContext(FoodContext);

  return (
    <ol>
      {foodList.map((food) => (
        <Food food={food} key={food.id} />
      ))}
    </ol>
  );
}

export default FoodList;
