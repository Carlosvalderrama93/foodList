import React from "react";

import FoodList from "./components/FoodList";
import { FoodProvider } from "./other/FoodProvider";

function App() {
  return (
    <FoodProvider>
      <FoodList />
    </FoodProvider>
  );
}

export default App;
