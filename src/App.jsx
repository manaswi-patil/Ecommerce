// // import React from 'react'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import CartPage from './components/Belowboxes/cartpage';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import Shop from './components/Shop';
// // import Trally from './components/Belowboxes/Trally';
// // function App() {

// //   return (
// //     <>
// //       <Router>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/Shop" element={<Shop />} />
// //           <Route path="/CartPage" element={<CartPage />} />
// //           <Route path="/Trally" element={<Trally />} />
// //         </Routes>
// //       </Router>

// //     </>
// //   )
// // }

// // export default App
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Shop from './components/Shop';
// import CartPage from './components/Belowboxes/cartpage';
// import Trally from './components/Belowboxes/Trally';
// import CartSidebar from './components/Belowboxes/CartSidebar';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//     setIsCartOpen(true);
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar cartItemCount={cartItems.length} toggleCart={() => setIsCartOpen(!isCartOpen)} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Shop" element={<Shop />} />
//           <Route path="/CartPage" element={<CartPage addToCart={addToCart} />} />
//           <Route path="/Trally" element={<Trally cartItems={cartItems} />} />
//         </Routes>
//         <CartSidebar 
//           isOpen={isCartOpen} 
//           cartItems={cartItems} 
//           onClose={() => setIsCartOpen(false)}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Shop from './components/Shop';
// import CartPage from './components/Belowboxes/cartpage';
// import Trally from './components/Belowboxes/Trally';
// import CartSidebar from './components/Belowboxes/CartSidebar';

// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//     setIsCartOpen(true);
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar cartItemCount={cartItems.length} toggleCart={() => setIsCartOpen(!isCartOpen)} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/cartpage" element={<CartPage addToCart={addToCart} />} />
//           <Route path="/trally" element={<Trally cartItems={cartItems} />} />
//         </Routes>
//         <CartSidebar 
//           isOpen={isCartOpen} 
//           cartItems={cartItems} 
//           onClose={() => setIsCartOpen(false)}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;













import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cartpage from './components/Belowboxes/cartpage';
import Trally from './components/Belowboxes/Trally';
import CartSidebar from './components/Belowboxes/CartSidebar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  return (
    <Router>
      <div>
        <Navbar 
          cartItems={cartItems} 
          setIsCartOpen={setIsCartOpen} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route 
            path="/cartpage" 
            element={<Cartpage addToCart={addToCart} />} 
          />
          <Route 
            path="/trally" 
            element={<Trally isOpen={isCartOpen} cartItems={cartItems} onClose={() => setIsCartOpen(false)} />} 
          />
        </Routes>
        <CartSidebar 
          isOpen={isCartOpen} 
          cartItems={cartItems} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
