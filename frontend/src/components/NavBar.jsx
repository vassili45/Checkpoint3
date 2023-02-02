import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <div className="flex">
          <Link to="/">HOME</Link>
          <Link to="/AllProject">Tout les project</Link>
          <Link to="/Dashboard/Project">Dashboard</Link>
          <Link to="/Login">Login</Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
