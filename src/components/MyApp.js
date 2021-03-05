import React from "react";

function MyApp() {
  const firstName = "Roohan";
  const date = new Date();
  const styleMy = { backgroundColor: "green", color: "white", fontSize: 55 };

  return (
    <div>
      <h1 style={styleMy}> Hello World and {firstName}</h1>
      <h1> Hello Sweden and {`${firstName}`}</h1>
      <h3 style={{ backgroundColor: "red", color: "white" }}>
        its currently about {date.getHours() < 13 ? "Noon" : "Morning"} Time in
        Stocholm
      </h3>
      {((styleMy.color = "yellow"), console.log(styleMy))}
      <h4 style={{ styleMy }}>acess and change style object</h4>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <label for="vehicle1"> I have a bike</label>
      <br></br>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="car"></input>
      <label for="vehicle2"> I have a car</label>
      <br></br>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="boat"></input>
      <label for="vehicle3"> I have a boat</label>
      <br></br>
    </div>
  );
}

export default MyApp;
