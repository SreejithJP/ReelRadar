import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LogoutBtn = () => {
 // const { logout } = useContext(AuthContext);

  return (
    <button className="logoutBtn" title="Logout"/>
  );
};

export default LogoutBtn;
