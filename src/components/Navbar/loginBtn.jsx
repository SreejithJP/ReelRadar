import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();  // Call the login function from context
    navigate("/", { replace: true });  // Redirect to the home page after login
  };

  return (
    <button className="login-btn">Login</button>
  );
};

export default LoginBtn;
