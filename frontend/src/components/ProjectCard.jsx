import React from "react";

function ProjectCard({ data, handleDeleteCard }) {
  const genericLine = `h-1 w-3 my-1 rounded-full bg-white transition`;
  return (
    <div className="card w-5/6 md:w-72 border h-72 mx-auto border-black rounded-lg flex flex-col justify-between items-center mb-4">
      <div>
        <h1 className="text-2xl font-bold text-center">{data.Nom}</h1>
        <h2 className="text-center">{data.Description}</h2>
        <h2 className="text-center">{data.Url}</h2>
      </div>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/${data.Screenshot}`}
        alt="project"
        className="objet-cover"
      />
      <button
        className="rounded-full p-1 w-6 h-6 -top-4 -right-4 border-2 border-white"
        onClick={() => handleDeleteCard(data.id)}
        type="button"
      >
        <div className={`${genericLine} rotate-45 translate-y-0 opacity-95`} />
        <div
          className={`${genericLine} -rotate-45 -translate-y-2 opacity-95`}
        />
      </button>
    </div>
  );
}

export default ProjectCard;
