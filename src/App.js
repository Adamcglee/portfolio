import React, { Component } from "react";
import "./App.css";
import Carousel3d from "./components/carousel/carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appIntro">
          <h1
            style={{
              color: "#66FCF1",
              margin: "0 auto",
              fontSize: "65px"
            }}
          >
            Who is Adam Lee?
          </h1>
          <div className="containerFooter">
            <div className="contactContainer">
              <a href="mailto:adamcglee@gmail.com">
                <div className="contactFlex">
                  <i class="far fa-envelope" />
                  <p className="iconinfo">adamcglee@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/adamcglee" target="_blank">
                <div className="contactFlex">
                  <i class="fab fa-linkedin" />
                  <p className="iconinfo">adamcglee</p>
                </div>
              </a>
              <a href="https://github.com/Adamcglee" target="_blank">
                <div className="contactFlex">
                  <i class="fab fa-github" />
                  <p className="iconinfo">adamcglee</p>
                </div>
              </a>
              <a href="https://resume.creddle.io/resume/cvxi7roju17" target="_blank">
                <div className="contactFlex">
                  <i class="far fa-file" />
                  <p className="iconinfo">Resume</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Carousel3d />
      </div>
    );
  }
}

export default App;
