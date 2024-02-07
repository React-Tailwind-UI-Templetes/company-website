import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OurService from "../Components/OurService";
import OurPackages from "../Components/OurPackages";
import Testimonials from "../Components/Testimonials";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Portfolio from "../Components/Portfolio";

const HomePage = () => {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <About />
      <OurService />
      <Portfolio />
      <OurPackages />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
