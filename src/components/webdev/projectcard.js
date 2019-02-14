import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "200px", height: "250px", border: "3px solid gray" }} /// these are optional style, it is not necessary
      >
        <FrontSide style={{ backgroundColor: "#41669d" }}>
          <a href={this.props.url}>
            <h4 style={{ margin: "0 auto", fontWeight: "bold" }}>
              {this.props.title}
            </h4>
          </a>
          <p style={{ fontSize: "14px", margin: " 10px auto"}}>{this.props.description}</p>
          <p style={{ fontSize: "14px", verticalAlign: "bottom"}}>(more)</p>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }}>
          Tech Stack:
          <ul>
            {this.props.techstack.map(tech => (
              <li style={{ textAlign: "left" }}>{tech}</li>
            ))}
          </ul>
        </BackSide>
      </Flippy>
    );
  }
}

export default ProjectCard;
