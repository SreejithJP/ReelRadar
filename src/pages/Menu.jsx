import "./styles/menu.css";
import { useNavigate } from "react-router-dom";

const Menu = ({ onClose }) => {
    const navigate = useNavigate();
  
    const handleNavigation = (category) => {
      onClose(); // Close the menu overlay
      navigate(`/menu-result/${category}`); // Navigate to the corresponding menu result page
    };

  return (
    <div className="menu-overlay">
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <div className="main-menu-items">
          <div className="main-menu-movies">
            <p className="main-menu-items-heading">Movies</p>
            <p onClick={() => handleNavigation("top-rated-movies")}>Top Rated Movies</p>
            <p onClick={() => handleNavigation("upcoming-movies")}>Upcoming Movies</p>
            <p onClick={() => handleNavigation("all-movies")}>All Movies</p>
          </div>
          <div className="main-menu-series">
            <p className="main-menu-items-heading">Series</p>
            <p onClick={() => handleNavigation("top-rated-series")}>Top Rated Series</p>
            <p onClick={() => handleNavigation("upcoming-series")}>Upcoming Series</p>
            <p onClick={() => handleNavigation("all-series")}>All Series</p>
          </div>
          <div className="main-menu-celebrities">
            <p className="main-menu-items-heading">Celebrities</p>
            <p onClick={() => handleNavigation("top-celebrities")}>Top Celebrities</p>
            <p onClick={() => handleNavigation("all-celebrities")}>All Celebrities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
