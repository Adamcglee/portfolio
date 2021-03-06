import * as React from "react";
import Carousel from "react-3d-carousels";
import WebDev from "../webdev/webdev";
import GameDesign from "../gamedesign/gamedesign";
import Music from "../music/music";
import Photography from "../photography/photography";

class Carousel3d extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 900,
      height: 600
    };
  }

  render() {
    return (
      <div
        style={{
          position: "static",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: this.state.width,
            height: this.state.height,
            margin: "0 auto"
          }}
        >
          <Carousel
            ref={carousel => (this.carousel = carousel)}
            width={this.state.width}
            height={this.state.height}
            direction={"horizontal"}
            effect={"3d"}
            index={0}
          >
            <WebDev width={this.state.width} height={this.state.height} />
            <GameDesign width={this.state.width} height={this.state.height} />
            <Music width={this.state.width} height={this.state.height} />
            <Photography width={this.state.width} height={this.state.height} />
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Carousel3d;
