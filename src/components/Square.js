import "./square.css";
import React, { useState } from "react";

export default function Square(props) {
  //props= index
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
