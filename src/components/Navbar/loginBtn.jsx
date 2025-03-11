import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LoginBtn = () => {
  //const { login } = useContext(AuthContext);

  return (
    <button className="login-btn" >
      Login
    </button>
  );
};

export default LoginBtn;
