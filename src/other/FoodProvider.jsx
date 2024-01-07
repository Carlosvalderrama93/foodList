import React, { createContext, useState } from "react";
import { foodList as data } from "./foodList";

const FoodContext = createContext();

function FoodProvider({ children }) {
  const [foodList, setFoodList] = useState(data);

  return (
    <FoodContext.Provider value={{ foodList, setFoodList }}>
      {children}
    </FoodContext.Provider>
  );
}

export { FoodContext, FoodProvider };
