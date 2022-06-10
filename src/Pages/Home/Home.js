import React from 'react';
import "./Home.css"
import Banner from "./Banner/Banner"
import About from './About/About';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;