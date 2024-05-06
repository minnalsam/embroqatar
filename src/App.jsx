import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./compontents/NavbarContainer";
import Footer from "./compontents/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";
import Embroidery from "./Pages/Embroidery/Embroidery";
import Software from "./Pages/Software/Software";
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";



const App = () => {
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} >
          {/* <Route index element={ <Products />} /> */}
          <Route path='embroidery' element={ <Embroidery />} />
          <Route path='software' element={ <Software />} />
        </Route>
        <Route path='service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={ <NotFoundPage/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
