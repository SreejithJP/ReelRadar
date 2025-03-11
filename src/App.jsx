import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { AuthProvider, AuthContext } from './context/authContext';
import Home from './pages/Home';
import Menu from './pages/Menu';
import SearchResult from './pages/searchResult';
import Watchlist from './pages/watchlist';
import Login from './pages/login';
import MenuResult from './pages/Menu_Result';
import { useContext } from 'react';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/menu" element={isAuthenticated ? <Menu /> : <Navigate to="/login" replace />} />
            <Route path="/search" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/search/:query" element={isAuthenticated ? <SearchResult /> : <Navigate to="/login" replace />} />
            <Route path="/menu-result/:category" element={isAuthenticated ? <MenuResult /> : <Navigate to="/login" replace />} />
            <Route path="/watchlist" element={isAuthenticated ? <Watchlist /> : <Navigate to="/login" replace />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
