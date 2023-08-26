"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="flex items-center gap-x-3">
      {/*Minus*/}
      <button
        className="center border h-8 w-8 font-medium text-lg rounded-full"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>

      {/*Number*/}
      <span>{num}</span>
      {/*Plus*/}
      <button
        className="center border h-8 w-8 font-medium text-lg rounded-full"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
