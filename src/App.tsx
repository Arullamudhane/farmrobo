import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MiniBotPurchase from './pages/MiniBotPurchase';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mini-bot" element={<MiniBotPurchase />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;