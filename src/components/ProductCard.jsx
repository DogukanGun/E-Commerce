import React from "react";
function ProductCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.src} width="200" />
      <p>{props.description}</p>
      <h4>{props.category}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export { ProductCard };
