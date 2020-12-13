import React from "react";
import Heading from "./Heading";
import Greeting from "./Greeting";
import List from "./List";

const num = 8;

const customStyle = {
    color: "blue",
    fontSize: "20px",
    border: "1px solid black"
  };

function App() {
    return(
    <div>
    <Heading /> 
    <Greeting />
    <List name="Aniz"/>
    <List name="Imad"/>
    <p style={customStyle}>My lucky number is {Math.random() * num * 10}</p>
    <p> Created by Aniz</p>
  </div>
    );
}

export default App;
