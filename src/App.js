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
              color: "aliceblue",
              margin: "0 auto",
              fontSize: "65px"
            }}
          >
            Who is Adam Lee?
          </h1>
          <div className="swipeinstuctions">
            <div className="swipeicon">
              <img src={require("./components/images/rotateicon.png")} alt="rotation icon"/>
            </div>
            <h3
              style={{
                color: "aliceblue"
              }}
            >
              Swipe below to see my many sides...
            </h3>
            <div className="swipeicon">
              <img src={require("./components/images/rotateicon.png")} alt="rotation icon"/>
            </div>
          </div>
        </div>

        <Carousel3d />
      </div>
    );
  }
}

export default App;
