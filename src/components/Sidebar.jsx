import React from "react";
import CreateFood from "./CreateFood";
import SortFoods from "./SortFoods";

function Sidebar() {
  return (
    <div>
      <SortFoods />
      <CreateFood />
    </div>
  );
}

export default Sidebar;
