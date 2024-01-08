import React, { useContext, useEffect, useState } from "react";
import { FoodDispatchContext } from "../other/FoodProvider";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Title from "./Title";

function Food({ food }) {
  const [currentFood, setCurrentFood] = useState(food);
  const { name, type, quantity, id } = currentFood;
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
    if (currentFood.name === "") {
      console.error("Should not be empty");
      return;
    }

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
          required={true}
          labelText={name}
          value={name}
          name={name}
          onChange={handleUpdateFood}
        />
        <Select
          labelText={type}
          name={type}
          value={type}
          onChange={handleUpdateFood}
          options={["Food", "Drink"]}
        />
        <Input
          required={true}
          labelText={quantity}
          value={quantity}
          type={"number"}
          name={"quantity"}
          onChange={handleUpdateFood}
          min="0"
          max="100"
        />
        <button onClick={() => setSaveChange(true)}>Save</button>
      </li>
    );
  }

  return (
    <li>
      <Title type={"2"}>{name}</Title>
      {type} - {quantity}
      <Button onClick={() => handleDeleteFood(id)} text={"Delete"} />
      <Button onClick={() => setIsEditing(true)} text={"Edit"} />
      <Button onClick={() => handleSort("sortedName")} text={"Sort by name"} />
      <Button onClick={() => handleSort("sortedType")} text={"Sort by type"} />
      <Button
        onClick={() => handleSort("sortedQuantity")}
        text={"Sort by quantity"}
      />
    </li>
  );
}

export default Food;
