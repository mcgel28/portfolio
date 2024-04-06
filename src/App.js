import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




function App() {
    return (
    <>
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <TechStack />
    <Contact />
    <Footer />
    </>
    )
}

export default App;