import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar/navbar'
import { AuthProvider } from './context/authContext'
import Home from './pages/Home'
import Menu from './pages/Menu'
import SearchResult from './pages/searchResult'
import Watchlist from './pages/watchlist'
import Login from './pages/login'
import MenuResult from './pages/Menu_Result';

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/search" element={<Home />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/watchlist" element={<Watchlist />}/>
          <Route path="/login" element={< Login/>}/>
          <Route path="/menu-result/:category" element={<MenuResult />} />
      </Routes>
      </Router>
        
    </>
  )
}

export default App
