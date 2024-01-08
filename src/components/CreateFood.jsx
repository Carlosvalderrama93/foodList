import React, { useContext, useState } from "react";
import Input from "./Input";
import { FoodDispatchContext } from "../other/FoodProvider";

const emptyFood = { name: "", type: "", quantity: 1 };

function CreateFood() {
  const [newFood, setNewFood] = useState(emptyFood);
  const [addFood, setAddFood] = useState(false);
  const dispatch = useContext(FoodDispatchContext);

  function handleInput(e) {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value.trim() });
  }

  function handleSubmit(e) {
    setNewFood(emptyFood);
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
          labelText={"Name"}
          type="text"
          name="name"
          value={newFood.name}
          onChange={handleInput}
        />

        <select
          id="type"
          name="type"
          value={newFood.type}
          onChange={handleInput}
        >
          <option value="food">Food</option>
          <option value="drink">Drink</option>
        </select>

        <Input
          required={true}
          labelText={"Quantity"}
          type="number"
          name="quantity"
          value={newFood.quantity}
          onChange={handleInput}
          min="0"
          max="100"
        />

        <button type="submit">Add</button>
        <button onClick={() => setAddFood(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <>
      <button onClick={() => setAddFood(true)}>Add Food</button>
    </>
  );
}

export default CreateFood;
