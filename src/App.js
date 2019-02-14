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
              margin: "20px auto",
              fontSize: "65px"
            }}
          >
            Who is Adam Lee?
          </h1>
          <h4
            style={{
              color: "aliceblue",
              margin: "0 auto"
            }}
          >
            Swipe below to find out...
          </h4>
        </div>

        <Carousel3d />
      </div>
    );
  }
}

export default App;
