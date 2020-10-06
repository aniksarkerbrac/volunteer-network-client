import React from "react";
import fakeData from "./fakeData";

const InsertMany = () => {
  const handleAddProduct = () => {
    fetch("http://localhost:5000/addToData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fakeData),
    });
  };
  return (
    <div>
      <button onClick={handleAddProduct}>Add Button</button>
    </div>
  );
};

export default InsertMany;
