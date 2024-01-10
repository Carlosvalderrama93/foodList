import React from "react";

import { FoodProvider } from "./other/FoodProvider";
import CreateFood from "./components/CreateFood";
import SortFoods from "./components/SortFoods";
import Foods from "./components/Foods";
import "./index.css";

function App() {
  return (
    <FoodProvider>
      <div className="app">
        <SortFoods />
        {/* <button onClick={() => localStorage.clear()}>Clear LS</button> */}
        <Foods />
        <CreateFood />
      </div>
    </FoodProvider>
  );
}

export default App;
