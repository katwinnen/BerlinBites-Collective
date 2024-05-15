import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css';
import RestaurantList from './pages/RestaurantList';
import AddRecommendation from './pages/AddRecommendation';
import EditForm from './pages/EditForm';
import RecommendationDetail from './pages/RecommendationDetail'; 
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>BerlinBites Collective</h1>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="/addrecommendation" element={<AddRecommendation />} />
          <Route path="/editform/:id" element={<EditForm />} />
          <Route path="/restaurant/:id" element={<RecommendationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
