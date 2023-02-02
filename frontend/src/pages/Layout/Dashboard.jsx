import React from "react";
import { Outlet } from "react-router-dom";

import NavDash from "@components/NavDash";

function CustmrSite() {
  return (
    <div>
      <NavDash />
      <Outlet />
    </div>
  );
}

export default CustmrSite;
