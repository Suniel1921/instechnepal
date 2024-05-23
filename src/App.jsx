import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Preloader from "./components/Preloader";
import WebDev from "../pages/package/WebDev";
import Layout from "./components/layout/Layout";
import Seo from "../pages/package/Seo";
import SocialMedia from "../pages/package/SocialMedia";
import ServicePage from "../pages/ServicePage";
import Career from "../pages/Career";
import AOS from "aos";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []); // This runs once on component mount

  useEffect(() => {
    // Simulate loading data for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <>
      <Router>
        {/* <div className='homeContainer'> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service/web-development" element={<WebDev />} />
            <Route path="/service/seo" element={<Seo />} />
            <Route path="/service/social-media" element={<SocialMedia />} />
            <Route path="/career" element={<Career />} />

            <Route />
          </Route>
        </Routes>
        {/* </div> */}
      </Router>
    </>
  );
};

export default App;
