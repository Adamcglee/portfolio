import * as React from "react";
import Carousel from "react-3d-carousels";
import coderBG from "./images/coderBG.png";

const width = 900;
const height = 600;

class Carousel3d extends React.Component {
  
  render() {
    return (
      <div>        
        <div
          style={{
            width: width,
            height: height,
            margin: "50px auto 0"
          }}
        >
        <h1>Who is Adam Lee?</h1>
          <Carousel
            ref={carousel => (this.carousel = carousel)}
            width={width}
            height={height}
            direction={"horizontal"}
            effect={"3d"}
            index={0}
          >
            <div style={{ backgroundImage: `url(${coderBG})`, width: width, height: height }}>Full Stack Web Developer</div>
            <div style={{ background: "red", width: width, height: height }}>Game Designer</div>
            <div style={{ background: "blue", width: width, height: height }}>Musician</div>
            <div style={{ background: "yellow", width: width, height: height }}>Photographer</div>
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Carousel3d;
