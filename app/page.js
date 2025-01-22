import React from "react";
import Navbar from "./components/navbar";
import ValueCard from "./components/valueCardLocked";
import Footer from "./components/footer";
import CoinDetails from "./components/coinDetails";

const Home = () => {
  return (
    <>
      <div className="absolute z-[-1] xl:w-[710px] w-[300px] xl:h-[710px] h-[300px] rounded-full bg-[#f9e998] ellipse1"></div>
      <Navbar />
      <ValueCard />
      <CoinDetails />
      <Footer />
    </>
  );
};

export default Home;
