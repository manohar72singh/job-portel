import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<CreateJob />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
