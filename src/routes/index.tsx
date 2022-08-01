import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
