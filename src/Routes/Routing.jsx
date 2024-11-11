import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "../Pages/Hero";
import { SignupController, RegisterController, Profile } from "../Components";
import Protected from "./Protected";
import Cart from "../Pages/Cart";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignupController />} />
          <Route path="/register" element={<RegisterController />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
