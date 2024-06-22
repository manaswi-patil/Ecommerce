import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Box1 from './components/Belowboxes/Box1';
import Box3 from './components/Belowboxes/Box3';
import Box4 from './components/Belowboxes/Box4';
import Shop from './components/Shop';
import Cartpage from './components/Belowboxes/cartpage';
// import Footer from './components/Belowboxes/Footer';
// import Box6 from './components/Belowboxes/Box6';
// import Box5 from './components/Belowboxes/Box5';
function App() {


  return (
    <>
      <div>
        <Navbar />
      </div>
     
        <Home />
     
  
        <Box1 />
    
      
        <Box3 />
     
        <Box4 />
        <Shop />
      {/* <div>
        <Cartpage/>
      </div> */}
      {/* <Box6/> */}
      {/* <Box5/> */}
      {/* <Router>
      <Switch>
        <Route path="/shop" component={Shop} />
        {/* Other routes */}
      {/* </Switch>
    </Router>  */}



      {/* <div>
        <Footer />
      </div>
   */}

    </>
  )
}

export default App
