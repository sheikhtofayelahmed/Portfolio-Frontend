import React from 'react';
import "./Home.css"
import Banner from "./Banner/Banner"
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Contact></Contact>
           <Projects></Projects>
        </div>
    );
};

export default Home;