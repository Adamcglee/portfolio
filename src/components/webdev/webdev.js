import React from "react";
import SkillModal from "../webdev/skillmodal";
import Projects from "../webdev/projects";
import "./webdev.css";

class WebDev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div
        className="webdevContainer"
        style={{
          width: this.props.width,
          height: this.props.height
        }}
      >
        <h1 className="title">Full Stack Web Developer</h1>
        <div>
          <p className="bio">
            {" "}
            I am a recent graduate of Lambda School's Full Stack Web Development
            program. The 8 month program was broken up into 3 sections:
            Frontend, Backend, and Computer Science. Labs was the last 5 weeks
            where we worked on a project in a small group of 4-5 students from wireframe 
            to launch. Please have a look at my projects below and feel free to reach out to me.
            Thank you for stopping by!
          </p>
          <br />
          <div className="breakdown">
            <div>
              <p>
                <strong>Front-End: </strong>HTML, CSS, Javascript, React
              </p>
            </div>
            <div>
              <p>
                <strong>Back-End: </strong>Node.js, Express, SQLite3, Postgres,
                Building RESTful APIs, User Authentication
              </p>
            </div>
            <div>
              <p>
                <strong>Computer Science: </strong>Data Structures, Algorithms,
                Graphs, Theory of Computation, Computer Architecture, Web
                Servers
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="title">My Projects</h2>
          <Projects />
        </div>
        <div className="proficiencies">
          <div>
            <img
              src={require("../images/icons8-html-5.svg")}
              alt="html5 icon"
            />
            <p>HTML</p>
          </div>
          <div>
            <img src={require("../images/icons8-css3.svg")} alt="css3 icon" />
            <p>CSS</p>
          </div>
          <div>
            <img
              src={require("../images/icons8-javascript.svg")}
              alt="javascript icon"
            />
            <p>JS</p>
          </div>
          <div>
            <img
              src={require("../images/react.png")}
              alt="react icon"
              style={{ height: "48px" }}
            />
            <p>React</p>
          </div>
          <div>
            <img
              src={require("../images/icons8-nodejs.svg")}
              alt="node.js icon"
            />
            <p>Node.js</p>
          </div>
          <div>
            <img src={require("../images/icons8-sql-48.png")} alt="SQL icon" />
            <p>SQL</p>
          </div>
          <div>
            <img
              src={require("../images/icons8-python.svg")}
              alt="python icon"
            />
            <p>Python</p>
          </div>
          <div>
            <img src={require("../images/django.png")} alt="" />
            <p>Django</p>
          </div>
          <div>
            <img
              src={require("../images/icons8-github.svg")}
              alt="github icon"
            />
            <p>Git</p>
          </div>
          <div>
            <img
              src={require("../images/icons8-c-programming.svg")}
              alt="C icon"
            />
            <p>C</p>
          </div>
        </div>
        {/*         
        {this.state.isShowing === false ? null : (
          <SkillModal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          />
        )} */}
      </div>
    );
  }
}

export default WebDev;
