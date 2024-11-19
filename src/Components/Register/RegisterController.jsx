import React, { useState } from "react";
import RegisterView from "./RegisterView";
import { toast } from "react-toastify";
import { registerUser } from "../../Stores";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const RegisterController = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { username, email, password, address, mobile, conform } = user;
  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();

    if (
      [username, email, password, address, mobile, conform].some(
        (field) => field == null || field.trim() === ""
      )
    ) {
      return toast.error("please fill all fields");
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      return toast.error("please enter valid email");
    }
    if (password != conform) {
      return toast.error("password not match with conform password", {
        autoClose: 5000,
      });
    }

    dispatch(registerUser({ user, redirect }));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <RegisterView handleInput={handleInput} handleSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterController;
