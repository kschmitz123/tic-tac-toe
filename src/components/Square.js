import "./square.css";
import React from "react";

export default function Square(props) {
  //props= index
  return <button className="square">{props.value}</button>;
}
