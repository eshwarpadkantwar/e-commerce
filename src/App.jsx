import React from "react";
import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Accessories from "../Pages/Accessories";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Faq from "../Pages/Faq";
import Electronics from "../Pages/Products Pages/Electronics";
import Groceries from "../Pages/Products Pages/Groceries";
import Fashion from "../Pages/Products Pages/Fashion";
import Footerr from "../Components/Footerr";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="groceries" element={<Groceries />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
