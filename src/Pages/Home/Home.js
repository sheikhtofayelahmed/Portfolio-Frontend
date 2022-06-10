import React from 'react';
import "./Home.css"
import Banner from "./Banner/Banner"
import About from './About/About';
import Contact from './Contact/Contact';
import Navbar from '../Shared/Navbar/Navbar';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;