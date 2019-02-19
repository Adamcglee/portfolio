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
          giturl="https://github.com/Lambda-School-Labs/labs9-music-reviews"
          description="A music review site where people can come together and give ratings and reviews on their favorite or least favorite albums and tracks."
        />
        <ProjectCard
          title="Lambda-MUD"
          techstack={["React", "Django", "SQL/Postgres"]}
          url="https://adamcglee-lambda-mud.netlify.com"
          giturl="https://github.com/Adamcglee/LambdaMUD-Project"
          description="A multi-user dungeon game that allows multiple people to play and navigate the world in the same game. Players can move from room to room, chatting with each other along the way."
        />
        <ProjectCard
          title="Conway's Life"
          techstack={["React"]}
          url="https://adamcglee-conways-life.netlify.com"
          giturl="https://github.com/Adamcglee/Conways-Life"
          description="The 'game' is actually a zero-player game, meaning that its evolution is determined by its initial state, needing no input from human players. One interacts with the Game of Life by creating an initial configuration and observing how it evolves."
        />
        <ProjectCard
          title="Adam's Note Taker"
          techstack={["React"]}
          url="https://adamsnotetaker.netlify.com/"
          giturl="https://github.com/Adamcglee/front-end-project-week"
          description="A simple note taking app where a user can add, edit, and delete notes."
        />
      </div>
    );
  }
}

export default Projects;
