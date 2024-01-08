import React, { createContext, useEffect, useReducer } from "react";
import { foodList } from "./foodList";
import foodReducer from "./foodReducer";

const FoodContext = createContext();
const FoodDispatchContext = createContext(null);
const defaultData = JSON.parse(localStorage.getItem("data")) ?? foodList;

function FoodProvider({ children }) {
  const [foods, dispatch] = useReducer(foodReducer, defaultData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(foods));
  }, [foods]);

  return (
    <FoodContext.Provider value={foods}>
      <FoodDispatchContext.Provider value={dispatch}>
        {children}
      </FoodDispatchContext.Provider>
    </FoodContext.Provider>
  );
}

export { FoodContext, FoodDispatchContext, FoodProvider };
