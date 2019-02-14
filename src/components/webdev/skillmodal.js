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
            <img src={require("../images/icons8-html-5.svg")} />
            <p>HTML</p>
          </div>
          <div>
            <img src={require("../images/icons8-css3.svg")} />
            <p>CSS</p>
          </div>
          <div>
            <img src={require("../images/icons8-javascript.svg")} />
            <p>JS</p>
          </div>
          <div>
            <img
              src={require("../images/react.png")}
              style={{ height: "48px" }}
            />
            <p>React</p>
          </div>
          <div>
            <img src={require("../images/icons8-nodejs.svg")} />
            <p>Node.js</p>
          </div>
          <div>
            <img src={require("../images/icons8-sql-48.png")} />
            <p>SQL</p>
          </div>
          <div>
            <img src={require("../images/icons8-python.svg")} />
            <p>Python</p>
          </div>
          <div>
            <img src={require("../images/django.png")} />
            <p>Django</p>
          </div>
          <div>
            <img src={require("../images/icons8-github.svg")} />
            <p>Git</p>
          </div>
          <div>
            <img src={require("../images/icons8-c-programming.svg")} />
            <p>C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
