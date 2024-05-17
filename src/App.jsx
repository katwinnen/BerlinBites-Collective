import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css';
import RestaurantList from './pages/RestaurantList';
import AddRecommendation from './pages/AddRecommendation';
import EditForm from './pages/EditForm';
import RecommendationDetail from './pages/RecommendationDetail';
import logo from './assets/logo.png';
import Imprint from './pages/Imprint';
import PrivacyNotice from './pages/PrivacyNotice';
import Contact from './pages/Contact';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <img src={logo} alt="BerlinBites Collective" className="logo" />
          <div className="burger-menu" onClick={toggleDropdown}>
            <div className="burger-menu-icon">&#9776;</div>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addrecommendation">Add Recommendation</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        {showDropdown && (
          <div className="dropdown-menu">
            <ul className="dropdown-links">
              <li><Link to="/restaurantlist" onClick={toggleDropdown}>Restaurants</Link></li>
              <li><Link to="/addrecommendation" onClick={toggleDropdown}>Add Recommendation</Link></li>
              <li><Link to="/about" onClick={toggleDropdown}>About</Link></li>
            </ul>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="/addrecommendation" element={<AddRecommendation />} />
          <Route path="/editform/:id" element={<EditForm />} />
          <Route path="/restaurant/:id" element={<RecommendationDetail />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
