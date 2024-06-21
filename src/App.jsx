
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Belowhomebox1 from './components/Belowboxes/Belowhomebox1';
import Box3 from './components/Belowboxes/Box3';
import Footer from './components/Belowboxes/Footer';
function App() {


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Belowhomebox1 />
      </div>
      <div>
        <Box3/>
      </div>
<div>
  <Footer/>
</div>
    </>
  )
}

export default App
