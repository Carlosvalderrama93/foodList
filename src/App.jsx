import React from "react";

import FoodList from "./components/FoodList";
import { FoodProvider } from "./other/FoodProvider";
import CreateFood from "./components/CreateFood";

function App() {
  return (
    <FoodProvider>
      <CreateFood />
      <FoodList />
    </FoodProvider>
  );
}

export default App;
