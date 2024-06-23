import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/Belowboxes/cartpage';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
