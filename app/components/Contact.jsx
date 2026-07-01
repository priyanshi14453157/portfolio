"use client";

import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import useScrollFade from "../../hooks/useScrollFade";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Personal Email",
      value: "anmolkumarchauhan7717@gmail.com",
      link: "mailto:anmolkumarchauhan7717@gmail.com",
    },
    {
      icon: <FaEnvelope />,
      label: "Student Email",
      value: "24f2100074@es.study.iitm.ac.in",
      link: "mailto:24f2100074@es.study.iitm.ac.in",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Anmol-87",
      link: "https://github.com/Anmol-87",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Anmol Chauhan",
      link: "https://www.linkedin.com/in/anmol-chauhan-7a1469328/",
    },
    {
      icon: <FaTwitter />,
      label: "X (Twitter)",
      value: "@staggered_anmol",
      link: "https://x.com/staggered_anmol",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "@staggered_anmol",
      link: "https://www.instagram.com/staggered_anmol/",
    },
  ];

  // ✅ useScrollFade for cards
  const scrollRefs = contacts.map(() => useScrollFade(0.3));

  // ✅ useScrollFade for form (rotate animation)
  const [formRefFade, formVisible] = useScrollFade(0.3);

  // ✅ EmailJS Form Setup
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccessMsg("✅ Message Sent Successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          setSuccessMsg("❌ Something went wrong. Try again.");
          console.error("EmailJS error:", error);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Get in Touch
      </h2>

      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>

      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>

      {/* ✅ Contact Form with rotate animation */}
      <div
        ref={formRefFade}
        className={`relative z-20 w-full max-w-2xl bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-10 mb-20 transition-all duration-700 ease-out transform
          ${formVisible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}
        `}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h3 className="text-3xl font-bold mb-6 text-center">
          Send Me a Message 🚀
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-white/50"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-white/50"
          />

          {/* Subject */}
          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-white/50"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            required
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-white/50"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.03] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {successMsg && (
            <p className="text-center text-white/80 mt-4">{successMsg}</p>
          )}
        </form>
      </div>

      {/* ✅ Social Media Header */}
      <h3 className="text-3xl font-bold mb-10 mt-10 text-center z-20">
        Social Media
      </h3>

      {/* Contact Cards After Form */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 z-20">
        {contacts.map((contact, idx) => {
          const [ref, visible] = scrollRefs[idx];

          return (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              className={`group flex items-center gap-4 bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-6 transition-all duration-700 ease-out transform
                hover:scale-[1.04]
                hover:border-white/50
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
                ${visible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}
              `}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-3xl text-white/90 transition-transform duration-500 group-hover:scale-125">
                {contact.icon}
              </div>
              <div>
                <p className="text-white/70 text-sm">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Floating dots */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-16 right-16 w-8 h-8 bg-white/20 rounded-full animate-pulse-slow"></div>

      {/* Animations */}
      <style jsx>{`
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
