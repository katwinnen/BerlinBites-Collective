import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css'
import RestaurantList from './pages/RestaurantList';
import AddRecommendation from './pages/AddRecommendation';
import EditForm from './pages/EditForm';

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
          <Route path="/addrecommendation" element={<AddRecommendation />} />
          <Route path="/editform" component={EditForm} />       
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RestaurantList />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
