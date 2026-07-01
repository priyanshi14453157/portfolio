"use client";

import React from "react";
import useScrollFade from "../../hooks/useScrollFade";

const AboutWithCoreFocusAndSkills = () => {
  // ✅ Using hook for each card
  const [firstCardRef, showFirst] = useScrollFade(0.3);
  const [secondCardRef, showSecond] = useScrollFade(0.3);
  const [thirdCardRef, showThird] = useScrollFade(0.3);
  const [fourthCardRef, showFourth] = useScrollFade(0.3);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white px-4 sm:px-6 py-10 sm:py-20"
    >
      <div className="relative max-w-4xl mx-auto flex">
        {/* LEFT: Vertical Timeline - Hidden on mobile */}
        <div className="hidden sm:flex relative flex-col items-center">
          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
          <div className="w-[2px] flex-1 bg-white/30"></div>

          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
          <div className="w-[2px] flex-1 bg-white/30"></div>

          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
          <div className="w-[2px] flex-1 bg-white/30"></div>

          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
          <div className="w-[2px] flex-1 bg-white/30"></div>

          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
        </div>

        {/* RIGHT: Cards */}
        <div className="sm:ml-8 md:ml-12 flex-1 flex flex-col space-y-10 sm:space-y-20">
          {/* ✅ ABOUT CARD */}
          <div
            ref={firstCardRef}
            className={`transition-all duration-700 ease-out transform ${
              showFirst ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-5 sm:px-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14
              before:w-8 sm:before:w-14 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                About Me
              </h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                I'm Anmol Chauhan, an Electronics Engineering student with a
                strong interest in web development. I'm learning and building
                modern, responsive websites through curiosity, creativity, and
                my passion for technology.
              </p>
            </div>
          </div>

          {/* ✅ CORE FOCUS CARD */}
          <div
            ref={secondCardRef}
            className={`relative sm:ml-16 md:ml-60 transition-all duration-700 ease-out transform ${
              showSecond ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-5 sm:px-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14 md:before:-left-74
              before:w-8 sm:before:w-14 md:before:w-74 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Core Focus
              </h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                My primary foundation is in Electronics Engineering, where I
                enjoy working with circuits, embedded systems, and core
                problem-solving. Alongside this, I explore web development as a
                creative way to build modern digital experiences.
              </p>
            </div>
          </div>

          {/* ✅ CORE SKILLS CARD */}
          <div
            ref={thirdCardRef}
            className={`transition-all duration-700 ease-out transform ${
              showThird ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-5 sm:px-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14
              before:w-8 sm:before:w-14 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Core Skills (Electronics)
              </h2>
              <div className="text-white/70 leading-relaxed text-sm sm:text-base">
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Circuit Analysis</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Embedded Systems</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>
                    Microcontrollers (Arduino, ESP32), MATLAB, LT SPICE
                  </span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Digital Electronics</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Verilog</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>HDL</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Signal Processing</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Engineering Problem Solving</span>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ WEB SKILLS CARD */}
          <div
            ref={fourthCardRef}
            className={`relative sm:ml-16 md:ml-60 transition-all duration-700 ease-out transform ${
              showFourth ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-5 sm:px-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14 md:before:-left-74
              before:w-8 sm:before:w-14 md:before:w-74 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Web Skills (Basic)
              </h2>
              <div className="text-white/70 leading-relaxed text-sm sm:text-base">
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>React.js</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Next.js</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>HTML / CSS</span>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Git & GitHub</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 text-xs sm:text-sm">•</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWithCoreFocusAndSkills;
