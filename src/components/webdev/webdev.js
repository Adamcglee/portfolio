import React from "react";
import SkillModal from "../webdev/skillmodal";
import Projects from "../webdev/projects";

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
        style={{
          background: "gray",
          width: this.props.width,
          height: this.props.height
        }}
      >
        <h1 style={{color: "white"}}>Full Stack Web Developer</h1>
        {/* <div style={{ border: "1px solid yellow" }}>Title</div>
        <div style={{ border: "1px solid blue" }}>Bio</div> */}
        <div>
          Projects
          <Projects />
          </div>
        <div
          className="open-modal-btn"
          onClick={this.openModalHandler}
        >
          Proficiencies
        </div>
        <SkillModal
          className="modal"
          show={this.state.isShowing}
          close={this.closeModalHandler}
        />
      </div>
    );
  }
}

export default WebDev;
