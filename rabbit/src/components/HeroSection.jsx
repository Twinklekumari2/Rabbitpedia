import React from "react";
import {motion} from 'motion/react'
import AnimatedWord from "../Animation/Rabbit";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center min-h-[80vh] px-4 overflow-hidden">
      
      {/* Background blur accents */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <div className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <h1>Because</h1>
          <h1>
            Every <span><AnimatedWord/></span>
          </h1>
          <h1>Deserves the best care</h1>
        </div>

        {/* Sub text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          From beginner guides to expert care tips,{" "}
          <span className="font-semibold text-green-600">Rabbitpedia</span>{" "}
          helps you raise a happy, healthy rabbit with confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <button className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Rabbit Care
          </button>

          <button className="px-8 py-3 rounded-full border border-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
            Learn Before You Adopt
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
