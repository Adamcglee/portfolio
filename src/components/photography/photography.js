import React from "react";
import "./photography.css";

const Photography = props => {
  return (
    <div className="photographyContainer"
      style={{ width: props.width, height: props.height }}
    >
    <h1 style={{color: "white"}}>Photographer</h1>
      {/* <div>Bio</div>
      <div>Gallery</div>
      <div>Gear</div> */}
    </div>
  );
};

export default Photography;
