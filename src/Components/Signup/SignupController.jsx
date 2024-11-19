import React, { useState } from "react";
import SignupView from "./SignupView";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Stores";
import { useNavigate } from "react-router-dom";
const SignupController = () => {
  const [credentials, setCredentials] = useState({});
  const { islogin } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ credentials, redirect }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div>
      <SignupView handleInput={handleInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignupController;
