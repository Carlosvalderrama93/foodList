import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../other/FoodProvider";
import Input from "./Input";

function Food({ food }) {
  const { foodList, setFoodList } = useContext(FoodContext);
  const [currentFood, setCurrentFood] = useState(food);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeFoodProp(e) {
    const { name, value } = e.target;
    const newCurrentFood = {
      ...currentFood,
      [name]: value,
    };

    setCurrentFood(newCurrentFood);
    setIsEditing(true);
  }

  useEffect(() => {
    if (isEditing) {
      const copyList = foodList.map((foodEl) => {
        if (foodEl.id === currentFood.id) return currentFood;
        return foodEl;
      });
      setFoodList([...copyList]);
      setIsEditing(false);
    }
  }, [isEditing]);

  return (
    <li>
      <Input
        labelText={"Name"}
        value={currentFood.name}
        name={"name"}
        event={handleChangeFoodProp}
      />
      <Input
        labelText={"Type"}
        value={currentFood.type}
        name={"type"}
        event={handleChangeFoodProp}
      />
      <Input
        labelText={"Quantity"}
        value={currentFood.quantity}
        name={"quantity"}
        event={handleChangeFoodProp}
      />
    </li>
  );
}

export default Food;
