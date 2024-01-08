import React, { createContext, useEffect, useState } from "react";
import { foodList as data } from "./foodList";

const FoodContext = createContext();
const defaultData = JSON.parse(localStorage.getItem("data")) ?? data;

function FoodProvider({ children }) {
  const [foodList, setFoodList] = useState(defaultData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(foodList));
  }, [foodList]);

  return (
    <FoodContext.Provider value={{ foodList, setFoodList }}>
      {children}
    </FoodContext.Provider>
  );
}

export { FoodContext, FoodProvider };
