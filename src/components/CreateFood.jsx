import React, { useContext, useState } from "react";
import Input from "./Input";
import { FoodContext } from "../other/FoodProvider";
import createID from "../other/idCreator";

function CreateFood() {
  const [food, setFood] = useState({});
  const { foodList, setFoodList } = useContext(FoodContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = createID();
    setFoodList([{ id, ...food }, ...foodList]);
    setFood({});
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelText={"Name"}
        type="text"
        name="name"
        value={food.name}
        event={handleInputChange}
      />

      <Input
        labelText={"Type"}
        type="text"
        name="type"
        value={food.type}
        event={handleInputChange}
      />

      <Input
        labelText={"Quantity"}
        type="text"
        name="quantity"
        value={food.quantity}
        event={handleInputChange}
      />

      <button type="submit">Add Food</button>
    </form>
  );
}

export default CreateFood;
