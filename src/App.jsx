import React from "react";

import Foods from "./components/Foods";
import { FoodProvider } from "./other/FoodProvider";
import CreateFood from "./components/CreateFood";

function App() {
  return (
    <FoodProvider>
      <CreateFood />
      <Foods />
    </FoodProvider>
  );
}

export default App;
