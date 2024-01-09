import React, { useContext } from "react";

import { FoodDispatchContext } from "../other/FoodProvider";
import Button from "./Button";

function SortFoods() {
  const dispatch = useContext(FoodDispatchContext);
  function handleSort(sortBy) {
    dispatch({ type: sortBy });
  }
  return (
    <>
      <Button
        className={"button-1"}
        onClick={() => handleSort("sortedName")}
        text={"Sort by Name"}
      />
      <Button
        className={"button-1"}
        onClick={() => handleSort("sortedType")}
        text={"Sort by Type"}
      />
      <Button
        className={"button-1"}
        onClick={() => handleSort("sortedQuantity")}
        text={"Sort by Quantity"}
      />
    </>
  );
}

export default SortFoods;
