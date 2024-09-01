import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../Pages/Hero";
import { SignupController, RegisterController } from "../Components";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignupController />} />
          <Route path="/register" element={<RegisterController />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
