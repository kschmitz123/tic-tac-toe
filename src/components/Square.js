import "./square.css";
import React, { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null); //value=state, setValue=setter function
  //props= index
  return (
    <button className="square" onClick={() => setValue("X")}>
      {value}
    </button>
  );
}
