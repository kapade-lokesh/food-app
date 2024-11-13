import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Protected";
import { Hero, Profile, Register, Signup, Cart } from "../Pages";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
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
