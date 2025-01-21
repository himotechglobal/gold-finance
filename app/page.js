import React from "react";
import Navbar from "./components/navbar";
import ValueCard from "./components/valueCardLocked";
import Footer from "./components/footer";
import CoinDetails from "./components/coinDetails";

const Home = () => {
  return (
    <>
      <div className="ellipse1 absolute"></div>
      <Navbar />
      <ValueCard />
      <CoinDetails />
      <Footer />
    </>
  );
};

export default Home;
