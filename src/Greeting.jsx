import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();
const hour = currentDate.getHours();
var greetings = "";

if (hour < 12) {
  greetings = "Good Morning";
} else if (hour < 18) {
  greetings = "Good Afternoon";
} else {
  greetings = "Good Night";
}

function Greeting() {
  return (
    <div>
      <p className="greeting">{greetings}</p>
      <p> Copyright {year}</p>
    </div>
  );
}

export default Greeting;
