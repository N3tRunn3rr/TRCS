import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import GetStarted from './components/getStarted';
import Home from './components/Home';
import Links from './components/Links';
import Privacy from './components/Privacy';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route
        exact
        path="/"
        element={<Home/>}
      />
      <Route path="/services" element={<Services />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/links" element={<Links />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
