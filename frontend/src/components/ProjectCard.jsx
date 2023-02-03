import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const { id, Nom, Url, Screenshot, Description } = project;
  return (
    <Link to={`/project/${id}`} className="pb-2">
      <div className="card w-5/6 md:w-72 border h-72 mx-auto border-black rounded-lg flex flex-col justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-center">{Nom}</h1>
          <h2 className="text-center">{Description}</h2>
          <h2 className="text-center">{Url}</h2>
        </div>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${Screenshot}`}
          alt="project"
          className="objet-cover"
        />
      </div>
    </Link>
  );
}

export default ProjectCard;
