import "./navbar.css"
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import MenuButton from "./menuBtn.jsx";
import SearchBar from "./searchbar.jsx";
import WatchlistBtn from "./watchlistBtn.jsx";
import LogoutBtn from "./logoutBtn.jsx";
import LoginBtn from "./loginBtn.jsx";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Menu from "../../pages/Menu.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
  <>  
    <nav className="navbar">
        <Link to="/">
        <Logo/>
        </Link>
        <div className="nav-items">
        <MenuButton onClick={() => {setIsMenuOpen(true);console.log('MenuBtn clicked.');}} />
          <Link to="/search">
          <SearchBar />
          </Link>
          <Link to="/watchlist">
          <WatchlistBtn />
        </Link>
        <Link to="/login">
          <LogoutBtn />
        </Link>
        </div>
    </nav>
    {isMenuOpen ? <Menu onClose={() => setIsMenuOpen(false)} /> : null}
  </>  
  );
};

export default Navbar;
