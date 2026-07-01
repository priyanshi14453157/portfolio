"use client";

import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaUser } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Anmol's AI assistant. Select a question below to learn more about him.",
    },
  ]);
  const [thinking, setThinking] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const faq = [
    {
      question: "What is your name?",
      answer:
        "I am Anmol's AI assistant 🤖 - designed to help you learn more about Anmol Chauhan's work and skills.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact Anmol via email at anmolkumarchauhan7717@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/anmol-chauhan-7a1469328/",
    },
    {
      question: "What projects have you done?",
      answer:
        "Anmol has worked on: Smart Waste Segregation System, ESP32 IoT Monitoring, Embedded Circuits, Get Me A Chai (fundraising platform), and more. Check the Projects section for details!",
    },
    {
      question: "Hello",
      answer:
        "Hello there! 👋 I'm here to tell you about Anmol's work in Electronics Engineering and Web Development.",
    },
    {
      question: "Hi",
      answer:
        "Hi! Welcome to Anmol's portfolio. Feel free to ask about his projects, skills, or background.",
    },
    {
      question: "What's your education?",
      answer:
        "Anmol is an Electronics Engineering student at IIT Madras, currently learning and building modern web applications alongside his electronics projects.",
    },
    {
      question: "What are your skills?",
      answer:
        "Anmol has expertise in: Electronics (Circuit Design, Embedded Systems, Microcontrollers) and Web Development (React, Next.js, Tailwind CSS, JavaScript).",
    },
    {
      question: "Tell me about your background",
      answer:
        "Anmol is passionate about blending hardware and software. His core foundation is in Electronics Engineering, while he actively builds modern web applications using React and Next.js.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "For Electronics: Arduino, ESP32, MATLAB, LT SPICE. For Web: React.js, Next.js, Tailwind CSS, MongoDB, JavaScript. For Tools: Git, GitHub, Python.",
    },
    {
      question: "Any upcoming projects?",
      answer:
        "Anmol is currently working on advanced IoT systems and expanding his full-stack web development skills with more complex applications.",
    },
    {
      question: "What's your goal?",
      answer:
        "To become a proficient engineer who can seamlessly integrate hardware and software solutions, creating innovative projects that solve real-world problems.",
    },
    {
      question: "Where can I see your code?",
      answer:
        "All of Anmol's projects are available on GitHub: https://github.com/Anmol-87. Feel free to check out the repositories!",
    },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuestionClick = (q, a) => {
    // Hide questions immediately
    setShowQuestions(false);

    // Add user message
    setMessages([...messages, { sender: "user", text: q }]);
    setThinking(true);

    // Longer thinking delay (3 seconds)
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: a }]);
      setThinking(false);

      // Show questions again after 1 second
      setTimeout(() => {
        setShowQuestions(true);
      }, 1000);
    }, 3000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 ${
          open
            ? "bg-white text-black rotate-90"
            : "bg-black text-white border border-white hover:bg-gray-900"
        }`}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
      >
        {open ? (
          <FaTimes size={20} className="animate-spin-once" />
        ) : (
          <div className="relative">
            <FaRobot size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 h-[580px] bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-white/20 animate-slide-up">
          {/* Header */}
          <div className="bg-white/10 text-white p-4 flex justify-between items-center backdrop-blur-md border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FaRobot className="text-2xl text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-lg text-white">
                  Anmol's AI Assistant
                </span>
                <p className="text-xs text-gray-300">Select a question below</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/10 p-2 rounded-lg transition-colors text-white"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 transition-all duration-300 ${
                  msg.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.sender === "user"
                      ? "bg-white text-black"
                      : "bg-gray-800 text-white border border-white/20"
                  }`}
                >
                  {msg.sender === "user" ? (
                    <FaUser size={14} />
                  ) : (
                    <FaRobot size={14} />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-white text-black rounded-tr-none"
                      : "bg-gray-900/80 text-white rounded-tl-none border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Enhanced Thinking Animation */}
            {thinking && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="p-3 rounded-2xl max-w-[70%] bg-gray-900/80 border border-white/10 rounded-tl-none">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-white rounded-full animate-thinking"></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-thinking"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-thinking"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                    <span className="text-sm text-white font-medium">
                      Thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Questions Area - Glass Morphism */}
          <div
            className={`p-4 border-t border-white/20 transition-all duration-300 ${showQuestions ? "opacity-100" : "opacity-0"}`}
          >
            <div className="mb-2 flex justify-between items-center">
              <p className="text-sm text-gray-300">Select a question:</p>
              <span className="text-xs text-gray-400">
                {faq.length} questions
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin">
              {faq.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleQuestionClick(item.question, item.answer)
                  }
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm text-left hover:scale-[1.02]"
                  disabled={thinking}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <div className="p-3 border-t border-white/20 bg-black/50">
            <p className="text-xs text-center text-gray-400">
              💬 You can only select from questions above
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-spin-once {
          animation: spinOnce 0.3s ease-in-out;
        }

        @keyframes spinOnce {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(90deg);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-thinking {
          animation: thinking 1.5s infinite ease-in-out;
        }

        @keyframes thinking {
          0%,
          60%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          30% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}
