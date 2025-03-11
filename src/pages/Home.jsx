import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import HomeCarousel from "../components/Carousal/carousal";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import PopularCeleb from "../components/PopularCelebrities/PopularCelebrities";
import Top10 from "../components/Top10/Top10";
import './styles/home.css';

const Home = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const handleLogin = () => {
        navigate("/login");
    };
    
    return (
        <div className="Carousal">
            <HomeCarousel />
            <h2 className='homePageHeadings'>Coming Soon</h2>
            <p className="homeDiscription">upcoming releases</p>
            <ComingSoon />
            <h2 className='homePageHeadings'>Popular Celebrities</h2>
            <PopularCeleb />
            <h2 className='homePageHeadings'>Top 10 on ReelRadar</h2>
            <Top10 />
            {!isAuthenticated && (
                <div className="signIn">
                    <button onClick={handleLogin}>Sign in for more access</button>
                </div>
            )}
            <div className="footer">
                <p>© 2025 ReelRadar. All Rights Reserved.</p>
                <p>
                    <a href="/about.html" target="_blank" rel="noopener noreferrer">About</a> | 
                    <a href="/contact.html" target="_blank" rel="noopener noreferrer"> Contact</a> | 
                    <a href="/terms.html" target="_blank" rel="noopener noreferrer"> Terms of Use</a> | 
                    <a href="/privacy.html" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Home;
