import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <div className="flex justify-end gap-4 items-center text-2xl bg-black">
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
