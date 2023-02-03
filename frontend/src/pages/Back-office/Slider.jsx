import React, { useState, useEffect } from "react";

import ProjectCard from "@components/ProjectCard";
import apiConnexion from "../../services/apiConnexion";

function Slider() {
  const [projects, setprojects] = useState([]);

  const getAllProject = () => {
    apiConnexion
      .get(`/project`)
      .then((project) => setprojects(project.data))
      .catch((error) => console.error(error));
  };

  const handleDeleteCard = (id) => {
    apiConnexion
      .delete(`/project/${id}`)
      .then(() => {
        getAllProject(true);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllProject(false);
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center ">
        <h1 className="text-center text-2xl mb-5 font-bold  mt-20 ">
          Project réalisé
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 bg-gray-200 h-screen">
        {projects.map((data) => (
          <ProjectCard
            data={data}
            key={data.id}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
