"use client";

import React from "react";
import useScrollFade from "../../hooks/useScrollFade";

const Hero = () => {
  // Use scroll fade hook for photo and text
  const [photoRef, photoVisible] = useScrollFade(0.2);
  const [textRef, textVisible] = useScrollFade(0.2);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-x-hidden"
    >
      {/* Glowing Ring Photo */}
      <div
        ref={photoRef}
        className={`relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-10 transition-all duration-700 ease-out transform
          ${
            photoVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-20 scale-90"
          }
        `}
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-400/40 shadow-[0_0_60px_rgba(156,163,175,0.5)] animate-pulse"></div>

        {/* Circular Image */}
        <div className="absolute inset-2 rounded-full overflow-hidden">
          <img
            src="/my-photo2.jpeg"
            alt="Profile"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
      </div>

      {/* Intro Text */}
      <div
        ref={textRef}
        className={`relative text-center space-y-4 transition-all duration-700 ease-out transform
          ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
      >
        <h1 className="relative text-3xl md:text-5xl font-extrabold tracking-wide z-10">
          Hi, I'm <span className="text-white/90">Priyanshi</span>
        </h1>

        {/* Fading Line */}
        <div className="relative w-[80vw] mx-auto my-4">
          <div className="relative w-full h-0.5 bg-white/50 rounded z-10"></div>

          <div className="absolute left-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>

          <div className="absolute right-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-l from-black to-transparent pointer-events-none z-20"></div>
        </div>

        <p className="relative text-xl md:text-xl text-white/70 tracking-wide leading-relaxed max-w-3xl mx-auto z-10">
          Cybersecurity enthusiast specializing in AI-powered security, network
          security, OSINT, and threat intelligence.
        </p>
      </div>
    </section>
  );
};

export default Hero;
