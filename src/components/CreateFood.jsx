import React, { useContext, useState } from "react";
import Input from "./Input";
import { FoodDispatchContext } from "../other/FoodProvider";
import Button from "./Button";
import Select from "./Select";

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
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={"Food Name"}
          required={true}
          type="text"
          name="name"
          value={newFood.name}
          onChange={handleInput}
        />

        <Select
          name={"type"}
          value={newFood.type}
          event={handleInput}
          options={[{ text: "Food" }, { text: "Drink" }]}
        />

        <Input
          required={true}
          type="number"
          name="quantity"
          value={newFood.quantity}
          onChange={handleInput}
          min="0"
          max="100"
        />

        <Button className={"button-1"} type="submit" text={"Add"} />
        <Button
          className={"button-1"}
          onClick={() => setAddFood(false)}
          text={"Cancel"}
        />
      </form>
    );
  }

  return (
    <Button
      className={"button-1"}
      onClick={() => setAddFood(true)}
      text={"Add Food"}
    />
  );
}

export default CreateFood;
