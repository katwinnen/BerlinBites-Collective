import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css'
import RestaurantList from './pages/RestaurantList';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <div className="App">
        <header className="header">
          <h1>BerlinBites Collective</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurantlist" element={<RestaurantList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
