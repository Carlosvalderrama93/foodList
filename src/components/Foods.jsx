import React, { useContext } from "react";

import { FoodContext } from "../other/FoodProvider";
import Title from "./Title";
import Food from "./Food";

function Foods() {
  const foods = useContext(FoodContext);

  return (
    <section>
      <div className="container">
        <Title className={"fs-3 name-food"} type={"2"}>
          Food
        </Title>
        <Title className={"fs-3 ta-c"} type={"2"}>
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
