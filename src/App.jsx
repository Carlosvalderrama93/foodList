import React from "react";
import FoodList from "./components/FoodList";
import { foodList } from "./other/foodList";

foodList;

function App() {
  return <FoodList foodList={foodList} />;
}

export default App;
