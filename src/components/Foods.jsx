import React, { useContext } from "react";
import Food from "./Food";
import { FoodContext } from "../other/FoodProvider";
import Title from "./Title";

import "../styles/foods.css";

function Foods() {
  const foods = useContext(FoodContext);

  return (
    <section>
      <div className="container">
        <Title className={"fs-3"} type={"2"}>
          Food
        </Title>
        <Title className={"fs-3"} type={"2"}>
          Type
        </Title>
        <Title className={"fs-3"} type={"2"}>
          Total
        </Title>
        <Title className={"fs-3"} type={"2"}>
          Actions
        </Title>
      </div>
      {foods.map((food) => (
        <Food food={food} key={food.id} />
      ))}
    </section>
  );
}

export default Foods;
