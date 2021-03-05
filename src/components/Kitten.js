import React from "react";

export default function Kitten(props) {
  console.log(props);
  return (
    <div>
      <img height="130" width="150" src={props.source}></img>
      <h3>{props.name}</h3>
      <p>phone: {props.phone}</p>
      <p> email: {props.email}</p>
    </div>
  );
}
