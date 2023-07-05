import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image flex grid gap-12" src={props.url} alt="product image" />
    </div>
  );
}