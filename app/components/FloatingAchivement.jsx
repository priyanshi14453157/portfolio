"use client";

import React from "react";

const FloatingAchievements = () => {
  const achievements = [
    "Digital Electronics Projects",
    "Embedded Circuit Design",
    "Full-Stack Web Development",
    "Problem Solving & DSA",
    "Open Source Learning",
    "IoT & Hardware Projects",
  ];

  return (
    <section className="w-full bg-black text-white py-32 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>

      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Top Row */}
      <div className="relative w-full overflow-hidden border border-white/20 rounded-3xl backdrop-blur-md px-8 py-8 mx-10 mb-10">
        <div className="marquee marquee-top">
          {[...achievements, ...achievements].map((item, idx) => (
            <div key={idx} className="achievement-box">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative w-full overflow-hidden border border-white/20 rounded-3xl backdrop-blur-md px-8 py-8 mx-10">
        <div className="marquee marquee-bottom">
          {[...achievements, ...achievements].map((item, idx) => (
            <div key={idx} className="achievement-box">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
        }

        .marquee-top {
          animation: scroll-top 40s linear infinite;
        }

        .marquee-bottom {
          animation: scroll-bottom 50s linear infinite;
        }

        .achievement-box {
          min-width: 300px;
          padding: 20px 30px;
          margin-right: 60px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-blur: blur(12px);
          border-radius: 15px;
          text-align: center;
          white-space: nowrap;
          font-size: 1.1rem;
          flex-shrink: 0;
          animation: float 4s ease-in-out infinite alternate;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll-top {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-bottom {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FloatingAchievements;
