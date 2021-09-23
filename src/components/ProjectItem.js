import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologyElements = technologies.map(singleTechnology => {
    return <span key={singleTechnology}>{singleTechnology}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyElements}
      </div>
    </div>
  );
}

export default ProjectItem;
