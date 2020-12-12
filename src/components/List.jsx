import React from "react";

const img1 = "https://picsum.photos/200";
const img2 = "https://picsum.photos/200";

function List() {
  return (
    <ul>
      <li>
        Random Photo 1
        <img className="random-image" alt="Random" src={img1}></img>
      </li>
      <li>
        Random Photo 2
        <img className="random-image" alt="Random" src={img2}></img>
      </li>
    </ul>
  );
}

export default List;
