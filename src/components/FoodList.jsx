import React, { useContext } from "react";
import Food from "./Food";
import { FoodContext } from "../other/FoodProvider";

function FoodList() {
  const { foodList } = useContext(FoodContext);

  return (
    <ul>
      {foodList.map((food) => (
        <Food food={food} />
      ))}
    </ul>
  );
}

export default FoodList;
