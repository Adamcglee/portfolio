import React, { Component } from "react";
import ProjectCard from "./projectcard";
import "./projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projectsContainer">
        <ProjectCard
          title="On The Record"
          techstack={["React", "Node.js", "SQL/Postgres"]}
          url="https://ontherecord.us"
          description="A music review site where people can come together and give ratings and reviews on their favorite or least favorite albums and tracks."
        />
        <ProjectCard
          title="Lambda-MUD"
          techstack={["React", "Django", "SQL/Postgres"]}
          url="https://adamcglee-lambda-mud.netlify.com"
        />
        <ProjectCard
          title="Conway's Life"
          techstack={["React"]}
          url="https://adamcglee-conways-life.netlify.com"
        />
      </div>
    );
  }
}

export default Projects;
