import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/Belowboxes/cartpage';
import Box6 from './components/Belowboxes/Box6';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
<>
      <div>
        <Navbar handleComponentChange={handleComponentChange} />
        {activeComponent === 'Home' && <Home />}
        {activeComponent === 'Shop' && <Shop />}
      </div>

      {/* <Router>
      <Routes>
        
      <Route path="/" element={<Box6 />} />
      <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Router> */}
    
    </> 
  )
}

export default App
