import React from "react";

const img1 = "https://picsum.photos/200";

function List(props) {
  return (
    <ul>
      <li>
        {props.name}
        <img className="random-image" alt="Random" src={img1}></img>
      </li>
      </ul>
  );
}

export default List;
