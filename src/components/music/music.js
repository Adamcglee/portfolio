import React from "react";
import "./music.css"

const Music = props => {
  return (
    <div className="musicContainer"
      style={{ width: props.width, height: props.height }}
    >
     <h1 style={{color: "white"}}>Musician</h1>
      {/* <div>Bio</div>
      <div>Education</div>
      <div>Groups</div>
      <div>Player</div> */}
    </div>
  );
};

export default Music;
