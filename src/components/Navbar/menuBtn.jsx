import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const MenuBtn = ({ onClick }) => {
  //const { logout } = useContext(AuthContext);

  return (
    <button className="menuBtn" title="Menu" onClick={onClick}/>
  );
};

export default MenuBtn;
