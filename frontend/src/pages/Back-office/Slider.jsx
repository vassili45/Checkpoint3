import React, { useState, useEffect } from "react";

import ProjectCard from "@components/ProjectCard";
import apiConnexion from "../../services/apiConnexion";

function Slider() {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/project`)
      .then((res) => {
        setprojects(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-2xl mb-5 font-bold  mt-20 ">
          Project réalisé
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 bg-gray-200 h-screen">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
