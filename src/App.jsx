import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./compontents/NavbarContainer";
import Footer from "./compontents/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";
import Embroidery from "./Pages/Embroidery/Embroidery";
import Software from "./Pages/Software/Software";
import RootLayout from "./layouts/RootLayout";

const Products = React.lazy(() => import("./Pages/Products"));



const App = () => {
  return (
    <>
      {/* navbar */}
      <NavbarContainer />

      {/*main content  */}
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
          <Route path='products' element={<React.Suspense fallback={ <div className="flex justify-center items-center text-3xl text-blue-400 h-screen">Loading....</div>}><Products /></React.Suspense>}  >
          {/* <Route index element={ <Products />} /> */}
          <Route path='embroidery' element={ <Embroidery />} />
          <Route path='software' element={ <Software />} />
        </Route>
        <Route path='service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
        <Route path="*" element={ <NotFoundPage/>} />
        </Route>
      </Routes>

      {/* footer */}
      <Footer />
    </>
  );
};

export default App;
