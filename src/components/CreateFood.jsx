import React, { useContext, useState } from "react";
import Input from "./Input";
import { FoodDispatchContext } from "../other/FoodProvider";

const emptyFood = { name: "", type: "", quantity: "" };

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
    e.preventDefault();
    dispatch({
      type: "added",
      food: newFood,
    });
  }

  if (addFood) {
    return (
      <form onSubmit={handleSubmit}>
        <Input
          labelText={"Name"}
          type="text"
          name="name"
          value={newFood.name}
          event={handleInput}
        />

        <Input
          labelText={"Type"}
          type="text"
          name="type"
          value={newFood.type}
          event={handleInput}
        />

        <Input
          labelText={"Quantity"}
          type="text"
          name="quantity"
          value={newFood.quantity}
          event={handleInput}
        />

        <button type="submit">Add</button>
        <button onClick={() => setAddFood(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <>
      <button onClick={() => setAddFood(true)}>Add another food</button>
    </>
  );
}

export default CreateFood;
