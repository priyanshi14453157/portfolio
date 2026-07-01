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

  const scrollRefs = contacts.map(() => useScrollFade(0.3));
  const [formRefFade, formVisible] = useScrollFade(0.3);

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // 🔥 DEBUG (INSIDE FUNCTION - CORRECT PLACE)
    console.log("SERVICE:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log("KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    console.log(
      "FORM DATA:",
      Object.fromEntries(new FormData(formRef.current))
    );

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMsg("✅ Message Sent Successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setSuccessMsg("❌ Something went wrong. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Get in Touch
      </h2>

      <div className="absolute left-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-[150px] md:w-[250px] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      <div
        ref={formRefFade}
        className={`relative z-20 w-full max-w-2xl bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-10 mb-20 transition-all duration-700 ease-out transform
        ${formVisible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h3 className="text-3xl font-bold mb-6 text-center">
          Send Me a Message 🚀
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20" />

          <input name="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20" />

          <input name="subject" placeholder="Subject" required className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20" />

          <textarea name="message" placeholder="Your Message..." rows="5" required className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20" />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-[1.03] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMsg && (
            <p className="text-center text-white/80 mt-4">{successMsg}</p>
          )}
        </form>
      </div>

      <h3 className="text-3xl font-bold mb-10 mt-10 text-center z-20">
        Social Media
      </h3>

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
              hover:scale-[1.04] hover:border-white/50 hover:bg-white/10
              ${visible ? "rotate-y-0 opacity-100" : "rotate-y-90 opacity-0"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-3xl">{contact.icon}</div>
              <div>
                <p className="text-white/70 text-sm">{contact.label}</p>
                <p className="font-semibold">{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      <style jsx>{`
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default Contact;