import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import Greeting from "./Greeting";

const num = 8;
const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <Heading /> <Greeting />
    <List />
    <p style={customStyle}>My lucky number is {Math.random() * num * 10}</p>
    <p> Created by Aniz</p>
  </div>,
  document.getElementById("root")
);
