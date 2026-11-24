import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mb-4">
      {/* Background Image */}
     
      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Understand User Flow.
            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm border border-[var(--border)] bg-[var(--primary)] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-none sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-sm border border-[var(--border)] bg-[var(--primary)] px-12 py-3 text-sm font-medium text-white hover:bg-transparent focus:ring-3 focus:outline-none sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
