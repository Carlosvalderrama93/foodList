import React, { useContext } from "react";

import { FoodDispatchContext } from "../other/FoodProvider";
import Button from "./Button";
import Title from "./Title";
import Input from "./Input";

function SortFoods() {
  const dispatch = useContext(FoodDispatchContext);
  function handleSort(sortBy) {
    dispatch({ type: sortBy });
  }
  return (
    <section className="sidebar">
      <Title type={"2"}>Sort</Title>

      <Button
        className={"button-1 w-m"}
        onClick={() => handleSort("sortedName")}
        text={"By Name"}
      />
      <Button
        className={"button-1 w-m"}
        onClick={() => handleSort("sortedType")}
        text={"By Type"}
      />
      <Button
        className={"button-1 w-m"}
        onClick={() => handleSort("sortedQuantity")}
        text={"By Total"}
      />

      {/* <Input
        type={"checkbox"}
        labelText={"By Name"}
        value={"sortedName"}
        onChange={() => handleSort("sortedName")}
      />
      <Input
        type={"checkbox"}
        labelText={"By Type"}
        value={"sortedType"}
        onChange={() => handleSort("sortedType")}
      />
      <Input
        type={"checkbox"}
        labelText={"By Total"}
        value={"sortedQuantity"}
        onChange={() => handleSort("sortedQuantity")}
      /> */}
    </section>
  );
}

export default SortFoods;
