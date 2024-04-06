import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/navbar';
import Product from './pages/Product';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
  
        </Routes>
        
      
  
      </div>
    </Router>
  );
}

export default App;
