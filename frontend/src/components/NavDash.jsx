import React from "react";
import { Link } from "react-router-dom";

function NavDash() {
  return (
    <nav>
      <ul>
        <div className="flex">
          <Link to="/">HOME</Link>
          <Link to="ProjectBack">Ajout de project</Link>
          <Link to="Slider">Slider</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavDash;
