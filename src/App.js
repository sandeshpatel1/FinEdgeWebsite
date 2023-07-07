import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/HomeSection/Home";
import About from "./Components/About/About";
import Service from "./Components/ServiceSection/Service";
import Contact from "./Components/Contact/Contact";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div  className="">
      <Navbar />
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
