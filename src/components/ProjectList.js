import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectElements = projects.map(singleProject => {
    return <ProjectItem key={singleProject.id} name={singleProject.name} about={singleProject.about} technologies={singleProject.technologies} />;
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
