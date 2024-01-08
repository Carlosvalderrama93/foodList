import React, { useContext, useEffect, useState } from "react";
import { FoodDispatchContext } from "../other/FoodProvider";
import Input from "./Input";

function Food({ food }) {
  const [currentFood, setCurrentFood] = useState(food);
  const [isEditing, setIsEditing] = useState(false);
  const [saveChange, setSaveChange] = useState(false);
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

  function handleSort(sortBy) {
    dispatch({ type: sortBy });
  }

  useEffect(() => {
    if (saveChange) {
      dispatch({
        type: "changed",
        food: currentFood,
      });
    }
    setIsEditing(false);
    setSaveChange(false);
  }, [saveChange]);

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
        <button onClick={() => setSaveChange(true)}>Save</button>
      </li>
    );
  }

  return (
    <li>
      <h3>{currentFood.name}</h3>
      {currentFood.type} - {currentFood.quantity}
      <button onClick={() => handleDeleteFood(currentFood.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => handleSort("sortedName")}>Sort by name</button>
      <button onClick={() => handleSort("sortedType")}>Sort by type</button>
      <button onClick={() => handleSort("sortedQuantity")}>
        Sort by quantity
      </button>
    </li>
  );
}

export default Food;
