import React, { useContext, useEffect, useState } from "react";
import { FoodDispatchContext } from "../other/FoodProvider";
import Input from "./Input";

function Food({ food }) {
  const [currentFood, setCurrentFood] = useState(food);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(FoodDispatchContext);

  function handleUpdateFood(e) {
    const { name, value } = e.target;
    setCurrentFood({
      ...currentFood,
      [name]: value,
    });
  }

  function handleDeleteFood(id) {
    dispatch({ type: "deleted", id });
  }

  useEffect(() => {
    if (isEditing) {
      dispatch({
        type: "changed",
        food: currentFood,
      });
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <li>
        <Input
          labelText={"Name"}
          value={currentFood.name}
          name={"name"}
          event={handleUpdateFood}
        />
        <Input
          labelText={"Type"}
          value={currentFood.type}
          name={"type"}
          event={handleUpdateFood}
        />
        <Input
          labelText={"Quantity"}
          value={currentFood.quantity}
          name={"quantity"}
          event={handleUpdateFood}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </li>
    );
  }

  return (
    <li>
      <h3>{currentFood.name}</h3>
      {currentFood.type} - {currentFood.quantity}
      <button onClick={() => handleDeleteFood(currentFood.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
}

export default Food;
