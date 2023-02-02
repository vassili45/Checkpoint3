import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "@components/NavBar";
import Footer from "@pages/Customers/Footer";

function CustmrSite() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default CustmrSite;
