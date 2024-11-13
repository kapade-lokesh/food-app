import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout } from "../Components";
const Protected = ({ children }) => {
  const { islogin } = useSelector((state) => state.Auth);
  return (
    <>
      <Layout>{islogin ? children : <Navigate to="/signup" />}</Layout>
    </>
  );
};

export default Protected;
