import React from "react";

import "./skillmodal.css";

const SkillModal = props => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transition: props.show ? "opacity 1s" : "opacity .25s",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>Proficiencies</h3>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div
          className="modal-body"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>
            <img src={require("../images/icons8-html-5.svg")} alt="html5 icon"/>
            <p>HTML</p>
          </div>
          <div>
            <img src={require("../images/icons8-css3.svg")} alt="css3 icon"/>
            <p>CSS</p>
          </div>
          <div>
            <img src={require("../images/icons8-javascript.svg")} alt="javascript icon"/>
            <p>JS</p>
          </div>
          <div>
            <img
              src={require("../images/react.png")} alt="react icon"
              style={{ height: "48px" }}
            />
            <p>React</p>
          </div>
          <div>
            <img src={require("../images/icons8-nodejs.svg")} alt="node.js icon"/>
            <p>Node.js</p>
          </div>
          <div>
            <img src={require("../images/icons8-sql-48.png")} alt="SQL icon"/>
            <p>SQL</p>
          </div>
          <div>
            <img src={require("../images/icons8-python.svg")} alt="python icon"/>
            <p>Python</p>
          </div>
          <div>
            <img src={require("../images/django.png")} alt=""/>
            <p>Django</p>
          </div>
          <div>
            <img src={require("../images/icons8-github.svg")} alt="github icon"/>
            <p>Git</p>
          </div>
          <div>
            <img src={require("../images/icons8-c-programming.svg")} alt="C icon"/>
            <p>C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
