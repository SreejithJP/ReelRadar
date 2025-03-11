import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  // Call the logout function from context
    navigate("/", { replace: true });

  };

  return (
    <button className="logoutBtn" title="Logout" onClick={handleLogout} />
  );
};

export default LogoutBtn;
