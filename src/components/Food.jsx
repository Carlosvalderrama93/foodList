import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../other/FoodProvider";

function Food({ food }) {
  const { foodList, setFoodList } = useContext(FoodContext);
  const [currentFood, setCurrentFood] = useState(food);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeFoodProp(e) {
    const key = e.target.attributes.property.value;
    const newCurrentFood = {
      ...currentFood,
      [key]: e.target.value,
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
    <li key={currentFood.id}>
      <label>
        Name:
        <input
          value={currentFood.name}
          property={"name"}
          onChange={handleChangeFoodProp}
        />
      </label>
      <label>
        Type:
        <input
          value={currentFood.type}
          property={"type"}
          onChange={handleChangeFoodProp}
        />
      </label>
      <label>
        Quantity:
        <input
          value={currentFood.quantity}
          property={"quantity"}
          onChange={handleChangeFoodProp}
        />
      </label>
    </li>
  );
}

export default Food;
