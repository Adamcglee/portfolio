import React, { Component } from "react";
import "./newcarousel.css";

class NewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellCount: 9,
      selectedIndex: 0,
      angle: 0
    };
  }

  rotateCarousel = () => {
    this.setState(function() {
      return {
        angle: (this.state.selectedIndex / this.state.cellCount) * -360
      };
    });
  };

  rotatePrev = () => {
    this.setState(function() {
      return { selectedIndex: this.state.selectedIndex - 1 };
    }, () => this.rotateCarousel());
  };

  rotateNext = () => {
    this.setState(function() {
      return { selectedIndex: this.state.selectedIndex + 1 };
    }, () => this.rotateCarousel());
  };
  ß;
  render() {
    let translates = {
      transform: `rotateY(${this.state.angle}deg)`
    };
    console.log(this.state.angle);
    return (
      <div>
        <div className="scene">
          <div className="carousel" style={translates}>
            <div className="carousel__cell">1</div>
            <div className="carousel__cell">2</div>
            <div className="carousel__cell">3</div>
            <div className="carousel__cell">4</div>
            <div className="carousel__cell">5</div>
            <div className="carousel__cell">6</div>
            <div className="carousel__cell">7</div>
            <div className="carousel__cell">8</div>
            <div className="carousel__cell">9</div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          <button className="previous-button" onClick={this.rotatePrev}>
            Previous
          </button>
          <button className="next-button" onClick={this.rotateNext}>
            Next
          </button>
        </p>
      </div>
    );
  }
}

export default NewCarousel;
