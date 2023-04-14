import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Banner from "../components/Banner";
import About from "../components/About";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default HomePage;
