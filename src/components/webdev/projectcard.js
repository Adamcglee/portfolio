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
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "200px", height: "250px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#C5C6C7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <h4 style={{ margin: "0 auto", fontWeight: "bold" }}>
            "{this.props.title}"
          </h4>
          <p style={{ textAlign: "left", margin: "0 15px" }}>
            {this.props.description}
          </p>
          <p>(over)</p>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#66FCF1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              backgroundColor: "#66FCF1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <h4>
              <strong>Tech Stack:</strong>
            </h4>
            <ul className="techstacklist">
              {this.props.techstack.map(tech => (
                <li style={{ textAlign: "left" }}>{tech}</li>
              ))}
            </ul>
          </div>
          <a href={this.props.url} style={{ color: "#1f2833" }} target="_blank" rel="noopener noreferrer">
            <h4 style={{ margin: "0 auto", fontWeight: "bold" }}>
              Link to Project
            </h4>
          </a>
        </BackSide>
      </Flippy>
    );
  }
}

export default ProjectCard;
