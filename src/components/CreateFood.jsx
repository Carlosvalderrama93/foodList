import React, { useContext, useState } from "react";

import { FoodDispatchContext } from "../other/FoodProvider";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import Title from "./Title";

const emptyFood = { name: "", type: "Food", quantity: 1 };

function CreateFood() {
  const [newFood, setNewFood] = useState(emptyFood);
  const [addFood, setAddFood] = useState(false);
  const dispatch = useContext(FoodDispatchContext);

  function handleInput(e) {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  }

  function handleSubmit(e) {
    setNewFood(emptyFood);
    setAddFood(false);
    e.preventDefault();
    if (newFood.name === "" || !newFood.quantity) {
      console.error("Should not be empty");
      return;
    }
    dispatch({
      type: "added",
      food: newFood,
    });
  }

  if (addFood) {
    return (
      <div className="mw-b">
        <Title type={"2"}>Create</Title>
        <form className="create-food" onSubmit={handleSubmit}>
          <Input
            placeholder={"Food Name"}
            required={true}
            type="text"
            name="name"
            value={newFood.name}
            onChange={handleInput}
            className={"w-m"}
          />

          <Input
            required={true}
            type="number"
            name="quantity"
            value={newFood.quantity}
            onChange={handleInput}
            min="0"
            max="100"
            className={"input-number w-m"}
            classLabel={"w-m"}
          />

          <Select
            name={"type"}
            value={newFood.type}
            event={handleInput}
            options={[{ text: "Food" }, { text: "Drink" }]}
            className={"w-m"}
          />

          <Button className={"button-1 w-m"} type="submit" text={"Add"} />
          <Button
            className={"button-1 w-m"}
            onClick={() => setAddFood(false)}
            text={"Cancel"}
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      <Title type={"2"}>Create</Title>
      <Button
        className={"button-1 w-m"}
        onClick={() => setAddFood(true)}
        text={"Add"}
      />
    </div>
  );
}

export default CreateFood;
