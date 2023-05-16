import {useEffect,  Suspense } from "react";
import AOS from 'aos';
import NavScrollTop from './components/NavScrollTop';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Contact from "./components/Contact/contact";
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
    <>
    <Header/>
    <NavScrollTop>
          <Suspense fallback={<div />}>
    <Routes>
    <Route
        exact
        path="/"
        element={<Home/>}
      />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </Suspense>
    </NavScrollTop>
  </>
  );
}

export default App;