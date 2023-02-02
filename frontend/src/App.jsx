import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Customer from "@pages/Layout/Customer";
import Home from "@pages/Customers/Home";
import AllProject from "@pages/Customers/AllProject";
import Project from "@pages/Customers/Project";
import Login from "@pages/Customers/Login";
import Contact from "@pages/Customers/Contact";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Customer />}>
            <Route path="" element={<Home />} />
            <Route path="AllProject" element={<AllProject />} />
            <Route path="Project/:id" element={<Project />} />
            <Route path="Login" element={<Login />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
