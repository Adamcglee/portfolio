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
            Who am I? I am a recent graduate of Lambda School's Full Stack Web
            Development program. The 8 month program was broken up into 4
            sections: Frontend, Backend, Computer Science, and Labs. The
            frontend curriculum taught me HTML, CSS, Javascript, and React over
            the span of 10 weeks.
            <br />
            <br />
            In the backend section, which lasted 5 weeks, we learned Node.js,
            Express, SQLite3 and Postgres, built RESTful APIs, and learned about
            user authentication.
            <br />
            <br />
            For the next 10 weeks was Computer science where we were learned
            about CS fundamentals like Python, Django, data structures,
            algorithms, graphs, C, hash tables, theory of computation, computer
            architecture, and web servers.
            <br />
            <br />
            The final part of the Lambda School program was labs, where we
            worked in groups of 4-5 students to create a professional level app
            from wireframes to deployemtn in 5 weeks. We were soley responsible
            for developement, design, and project management of the project.
            Please have a look at my projects below and feel free to reach out
            to me. Thank you for stopping by!
          </p>
        </div>
        <div>
          <h2 className="title">My Projects</h2>
          <Projects />
        </div>

        <div className="containerFooter">
          <div className="contactContainer">
            <a href="mailto:adamcglee@gmail.com">
              <div className="contactFlex">
                <img
                  src={require("../images/Mail-icon.png")}
                  alt="email icon"
                  className="icon"
                />
                <p className="iconinfo">adamcglee@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/adamcglee">
              <div className="contactFlex">
                <img
                  src={require("../images/linkedinicon.svg")}
                  alt="linkedin icon"
                  target="_blank"
                  className="icon"
                />
                <p className="iconinfo">adamcglee</p>
              </div>
            </a>
            <a href="https://github.com/Adamcglee">
              <div className="contactFlex">
                <img
                  src={require("../images/icons8-github.svg")}
                  alt="github icon"
                  target="_blank"
                  className="icon"
                />
                <p className="iconinfo">adamcglee</p>
              </div>
            </a>
            <div className="open-modal-btn" onClick={this.openModalHandler}>
              <div className="contactFlex">
                <img
                  src={require("../images/skillsicon.svg")}
                  alt="skills icon"
                  className="icon"
                />
                <p className="iconinfo">Proficiencies</p>
              </div>
            </div>
          </div>
        </div>
        {this.state.isShowing === false ? null : (
          <SkillModal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          />
        )}
      </div>
    );
  }
}

export default WebDev;
