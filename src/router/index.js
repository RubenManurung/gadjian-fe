import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Redirect } from "react-router";
import Dashboard from "../pages/Dashboard";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
