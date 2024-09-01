import React from "react";
import { Header } from "../Components";
import { Footer } from "../Components";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
