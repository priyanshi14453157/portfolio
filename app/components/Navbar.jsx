"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // ✅ Active section state
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Scroll shrink + hide/show Navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setShrink(currentScroll > 60);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // ✅ Scroll Spy Observer (Active Section Highlight)
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // section must be 50% visible
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ Dock Smooth Scale Calculation
  const getScale = (index) => {
    if (hoverIndex === null) return 1;
    const distance = Math.abs(index - hoverIndex);
    if (distance === 0) return 1.55;
    if (distance === 1) return 1.25;
    if (distance === 2) return 1.1;
    return 1;
  };

  // ✅ Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-0 w-full flex justify-center z-50 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
    >
      {/* Capsule Container */}
      <div
        className={`
          flex items-center justify-between
          px-6
          rounded-full
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          transition-all duration-500 ease-out
          ${shrink ? "py-2 scale-[0.96]" : "py-3"}
          w-[92%] max-w-4xl
        `}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-white font-semibold text-lg tracking-wide"
        >
          Anmol.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  transform: `scale(${getScale(index)})`,
                }}
                className={`
                  px-4 py-2 rounded-full
                  text-sm font-medium
                  transition-all duration-500 ease-out
                  ${
                    isActive
                      ? "text-white bg-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/15"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Hire Button */}
        <Link
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="
            hidden md:block
            px-5 py-2 rounded-full
            bg-white text-black font-semibold
            transition-all duration-500 ease-out
            hover:scale-110 hover:bg-gray-200
          "
        >
          Let's Talk
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            absolute top-20 w-[92%] max-w-md
            rounded-2xl bg-black/70
            backdrop-blur-2xl border border-white/15
            flex flex-col items-center gap-5 py-6
            shadow-xl
            md:hidden
            animate-fadeIn
          "
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`
                  text-lg transition duration-300
                  ${
                    isActive
                      ? "text-white font-semibold scale-110"
                      : "text-gray-200 hover:text-white hover:scale-105"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold"
          >
            Let's Talk 
          </Link>
        </div>
      )}
    </nav>
  );
}