import { useState } from 'react';
import './styles/menu.css'
import MenuResult from './Menu_Result';
const Menu = () => {
    const [selectedMenu,setSelectedMenu] = useState(null);
    return (
        <div className="main-menu-container">
            <div className="main-menu-title-close">
                <div className="main-menu-title">
                <button className='main-menu-logo'/>
                </div>
                <div className="main-menu-close">
                <button className='main-menu-close'/>
                </div>

            </div>
            <div className="main-menu-items">
                <div className="main-menu-movies">
                    <p className='main-menu-items-heading'>Movies</p>
                    <p onClick={() => setSelectedMenu("top-rated-movies")}>Top Rated Movies</p>
                    <p onClick={() => setSelectedMenu("upcoming-movies")}>Upcoming Movies</p>
                    <p onClick={() => setSelectedMenu("all-movies")}>All Movies</p>
                </div>
                <div className="main-menu-series">
                <p className='main-menu-items-heading'>Series</p>
                    <p>Top Rated Series</p>
                    <p>Upcoming Series</p>
                    <p>All Series</p>
                </div>
                <div className="main-menu-celebrities">
                <p className='main-menu-items-heading'>Celebrities</p>
                <p>Top Celebrities</p>
                <p>All Celebrities</p>
                </div>
            </div>
            <MenuResult selectedMenu={selectedMenu}/>
        </div>
    );
  };
  
  export default Menu;
  

  