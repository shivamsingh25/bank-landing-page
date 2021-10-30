import React from "react";

import NavigationBar from '../../Components/NavigationBar';
import Hero from '../../Components/Hero';
import Features from '../../Components/Features';
import Footer from '../../Components/Footer';
import GetStarted from '../../Components/GetStarted';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
        <NavigationBar/>
        <Hero/>
        <Features/>
        <GetStarted/>
        <Footer/>
    </div>
  );
};

export default Home;
