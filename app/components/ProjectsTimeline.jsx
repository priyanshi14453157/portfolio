"use client";

import React, { useEffect, useRef, useState } from "react";

const ElectronicsProjects = () => {
  // ==============================
  // ✅ ELECTRONICS SECTION CARDS
  // ==============================

  const card1Ref = useRef(null);
  const [showCard1, setShowCard1] = useState(false);

  const card2Ref = useRef(null);
  const [showCard2, setShowCard2] = useState(false);

  const card3Ref = useRef(null);
  const [showCard3, setShowCard3] = useState(false);

  const card4Ref = useRef(null);
  const [showCard4, setShowCard4] = useState(false);

  // ==============================
  // ✅ WEB DEV SECTION CARDS
  // ==============================

  const webCard1Ref = useRef(null);
  const [showWebCard1, setShowWebCard1] = useState(false);

  const webCard2Ref = useRef(null);
  const [showWebCard2, setShowWebCard2] = useState(false);

  const webCard3Ref = useRef(null);
  const [showWebCard3, setShowWebCard3] = useState(false);

  const webCard4Ref = useRef(null);
  const [showWebCard4, setShowWebCard4] = useState(false);

  // ==============================
  // ✅ OBSERVERS (ELECTRONICS)
  // ==============================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowCard1(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (card1Ref.current) observer.observe(card1Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowCard2(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (card2Ref.current) observer.observe(card2Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowCard3(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (card3Ref.current) observer.observe(card3Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowCard4(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (card4Ref.current) observer.observe(card4Ref.current);
    return () => observer.disconnect();
  }, []);

  // ==============================
  // ✅ OBSERVERS (WEB DEV)
  // ==============================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWebCard1(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (webCard1Ref.current) observer.observe(webCard1Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWebCard2(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (webCard2Ref.current) observer.observe(webCard2Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWebCard3(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (webCard3Ref.current) observer.observe(webCard3Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowWebCard4(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (webCard4Ref.current) observer.observe(webCard4Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="project"
      className="relative w-full min-h-screen bg-black text-white px-4 sm:px-6 py-10 sm:py-20"
    >
      <div className="relative max-w-4xl mx-auto flex">
        {/* LEFT: Main Vertical Line - Hidden on small screens */}
        <div className="hidden sm:flex relative flex-col items-center">
          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white"></div>
          <div className="w-[2px] flex-1 bg-white/30"></div>
          <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white "></div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="sm:ml-8 md:ml-12 flex-1">
          {/* ================================= */}
          {/* ✅ ELECTRONICS MAIN CARD */}
          {/* ================================= */}

          <div
            ref={card1Ref}
            className={`transition-all duration-700 ease-out transform
              ${
                showCard1 ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
              }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14
              before:w-8 sm:before:w-14 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Electronics Projects
              </h2>

              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                My core interest lies in Electronics Engineering, where I enjoy
                building hardware-based projects involving embedded systems,
                sensors, and circuit design.
              </p>
            </div>
          </div>

          {/* ================================= */}
          {/* ✅ ELECTRONICS SUB PROJECTS */}
          {/* ================================= */}

          <div
            id="projects"
            className="relative mt-8 sm:mt-10 pl-0 sm:pl-14 space-y-6 sm:space-y-6"
          >
            {/* Vertical lines - Hidden on small screens */}
            <div className="hidden sm:block absolute left-12 sm:left-50 bottom-16 sm:bottom-92 h-16 sm:h-19 w-[2px] bg-white/20"></div>
            <div className="hidden sm:block absolute left-10 sm:left-40 bottom-8 sm:bottom-48 h-24 sm:h-63 w-[2px] bg-white/20"></div>
            <div className="hidden sm:block absolute left-8 sm:left-30 bottom-1 sm:bottom-10 h-32 sm:h-101 w-[2px] bg-white/20"></div>

            {/* Project 1 */}
            <div
              ref={card2Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showCard2 ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-4 sm:w-5 h-[2px] bg-white/20 mt-6 sm:mt-8 ml-8 sm:ml-36"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Smart Waste Segregation System
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      Sensor-based electronics project to automatically classify
                      waste into categories.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div
              ref={card3Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showCard3 ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-8 sm:w-30 h-[2px] bg-white/20 ml-6 sm:ml-26 mt-10 sm:mt-14"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      ESP32 IoT Monitoring Device
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      Real-time monitoring system using ESP32, sensors, and
                      wireless communication.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              ref={card4Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showCard4 ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-12 sm:w-50 h-[2px] bg-white/20 ml-4 sm:ml-16 mt-12 sm:mt-15"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Digital Counter Using Logic ICs
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      Developed digital circuits using TTL/CMOS logic ICs. Gained hands-on experience in hardware assembly and
                      debugging.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* ✅ WEB DEV MAIN CARD (Animated) */}
          {/* ================================= */}

          <div
            ref={webCard1Ref}
            className={`relative mt-16 sm:mt-32 transition-all duration-700 ease-out transform
              ${
                showWebCard1
                  ? "rotate-y-0 opacity-100"
                  : "rotate-y-90 opacity-0"
              }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative max-w-xl rounded-2xl border border-white/20 bg-white/5
              backdrop-blur-md p-4 sm:p-6 shadow-lg
              before:content-[''] before:absolute before:top-1/2 before:-left-8 sm:before:-left-14
              before:w-8 sm:before:w-14 before:h-[2px] before:bg-white/30"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Web Development Projects
              </h2>

              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                I also enjoy building full-stack web applications using modern
                frameworks like Next.js, MongoDB, and Razorpay integrations.
              </p>
            </div>
          </div>

          {/* ================================= */}
          {/* ✅ WEB DEV SUB PROJECTS (Animated) */}
          {/* ================================= */}

          <div className="relative mt-8 sm:mt-12 pl-0 sm:pl-14 space-y-6 sm:space-y-10">
            {/* Vertical lines - Hidden on small screens */}
            <div className="hidden sm:block absolute left-12 sm:left-50 bottom-14 sm:bottom-76 h-16 sm:h-23 w-[2px] bg-white/20"></div>
            <div className="hidden sm:block absolute left-10 sm:left-40 bottom-6 sm:bottom-36 h-20 sm:h-63 w-[2px] bg-white/20"></div>
            <div className="hidden sm:block absolute left-8 sm:left-30 bottom-3 h-28 sm:h-96 w-[2px] bg-white/20"></div>

            {/* Web Project 1 */}
            <div
              ref={webCard2Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showWebCard2
                    ? "rotate-y-0 opacity-100"
                    : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-4 sm:w-5 h-[2px] bg-white/20 mt-6 sm:mt-10 ml-8 sm:ml-36"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Get Me A Chai
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      A donation and fundraising platform for real-world causes.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>

            {/* Web Project 2 */}
            <div
              ref={webCard3Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showWebCard3
                    ? "rotate-y-0 opacity-100"
                    : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-8 sm:w-30 h-[2px] bg-white/20 ml-6 sm:ml-26 mt-10 sm:mt-14"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      Waste Segregation Website
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      A platform to educate and manage waste segregation.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>

            {/* Web Project 3 */}
            <div
              ref={webCard4Ref}
              className={`transition-all duration-700 ease-out transform
                ${
                  showWebCard4
                    ? "rotate-y-0 opacity-100"
                    : "rotate-y-90 opacity-0"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative flex items-start">
                <div className="hidden sm:block w-16 sm:w-70 h-[2px] bg-white/20 ml-4 sm:ml-16 mt-10 sm:mt-12"></div>

                <div className="w-full max-w-lg rounded-xl border border-white/15 bg-white/5 backdrop-blur-md p-4 sm:p-5 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      URL Shortener
                    </h3>
                    <p className="text-white/60 mt-1 text-sm sm:text-base">
                      Convert long URLs into short, shareable links.
                    </p>
                  </div>
                  <span className="text-lg ml-0 sm:ml-4 self-end sm:self-center">
                    🔗
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* END WEB PROJECTS */}
        </div>
      </div>
    </section>
  );
};

export default ElectronicsProjects;
