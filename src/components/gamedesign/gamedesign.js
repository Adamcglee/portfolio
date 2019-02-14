import React from "react";
import "./gamedesign.css"

const GameDesign = props => {
  return (
    <div className="gamedesignContainer"
      style={{ width: props.width, height: props.height }}
    >
    <h1 style={{color: "white"}}>Game Designer</h1>
      {/* <div>Bio</div>
      <div>Companies</div>
      <div>Launched Products</div>
      <div>Proficiencies</div> */}
    </div>
  );
};

export default GameDesign;
