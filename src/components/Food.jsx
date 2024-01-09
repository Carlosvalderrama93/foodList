import React, { useContext, useEffect, useState } from "react";
import { FoodDispatchContext } from "../other/FoodProvider";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import Title from "./Title";
import Paragraph from "./Paragraph";

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
      <div className="container">
        <Input
          className={"pd-0"}
          required={true}
          value={name}
          name={"name"}
          onChange={handleUpdateFood}
        />
        <Select
          name={"type"}
          value={type}
          event={handleUpdateFood}
          options={[{ text: "Food" }, { text: "Drink" }]}
        />
        <Input
          required={true}
          value={quantity}
          type={"number"}
          name={"quantity"}
          onChange={handleUpdateFood}
          min="0"
          max="100"
        />
        <Button
          className={"button-1"}
          onClick={() => setSaveChange(true)}
          text={"Save"}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Title type={"4"}>{name}</Title>
      <Paragraph>{type}</Paragraph>
      <Paragraph>{quantity}</Paragraph>
      <div>
        <Button
          className={"button-2"}
          onClick={() => handleDeleteFood(id)}
          text={"Delete"}
        />
        <Button
          className={"button-2"}
          onClick={() => setIsEditing(true)}
          text={"Edit"}
        />
      </div>
    </div>
  );
}

export default Food;
