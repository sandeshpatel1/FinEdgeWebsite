import React from 'react';
import "./Home.css";
import logoImage from "../../Images/logo.png";

function Home() {
  return (
    <section className="pt-20 bg-black text-white min-h-screen">
    <div className="pt-20 container mx-auto flex flex-col justify-center items-center h-full">
      <img src={logoImage} alt="FinEdge Logo" className="mt-10 h-20 mb-8" />
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 font-sanv">
        Welcome to FinEdge
      </h1>
      <p className="text-lg lg:text-xl xl:text-2xl text-center mb-12 font-sand">
        FinEdge is a cutting-edge fintech startup dedicated to revolutionizing
        cross-border payments. Our vision is to enable seamless transactions
        for individuals and businesses, transcending geographical boundaries.
      </p>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-12">
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 hover:text-white shadow-lg lg:w-auto font-sand">
          Get Started
        </button>
        <button className="bg-emerald-800 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black font-semibold shadow-lg lg:w-auto font-sand">
          Learn More
        </button>
      </div>
      <div className="animate-bounce">
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </section>

  )
}

export default Home