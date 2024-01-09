import React from "react";

import { FoodProvider } from "./other/FoodProvider";
import Sidebar from "./components/Sidebar";
import Foods from "./components/Foods";
import "./index.css";

function App() {
  return (
    <FoodProvider>
      <>
        <Sidebar />
        {/* <button onClick={() => localStorage.clear()}>Clear LS</button> */}
        {/* <CreateFood /> */}
        <Foods />
      </>
    </FoodProvider>
  );
}

export default App;
