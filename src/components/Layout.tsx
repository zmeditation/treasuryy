import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
