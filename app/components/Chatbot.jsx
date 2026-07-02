"use client";

import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaUser } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Priyanshi's AI assistant. Select a question below to learn more about her.",
    },
  ]);
  const [thinking, setThinking] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const faq = [
    {
      question: "What is your name?",
      answer:
        "I am Priyanshi's AI assistant 🤖 - designed to help you learn more about Priyanshi's work, projects, and cybersecurity skills.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact Priyanshi via email at priyanshi14453157@gmail.com or connect with her on LinkedIn.",
    },
    {
      question: "What projects have you done?",
      answer:
        "Priyanshi has worked on AI-Powered IP Analyser, Website Safety Checker, PW Vault Password Manager, and cybersecurity research projects. Check the Projects section for more details!",
    },
    {
      question: "Hello",
      answer:
        "Hello there! 👋 I'm here to tell you about Priyanshi's work in Cybersecurity, AI, and Network Security.",
    },
    {
      question: "Hi",
      answer:
        "Hi! Welcome to Priyanshi's portfolio. Feel free to ask about her projects, skills, or background.",
    },
    {
      question: "CV",
      answer: (
        <div className="space-y-3">
          <p>You can download my latest CV below.</p>

          <a
            href="cv.pdf"
            download
            className="inline-block px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            📄 Download CV
          </a>
        </div>
      ),
    },
    ,
    {
      question: "What's your education?",
      answer:
        "Priyanshi is pursuing a B.Tech in Cybersecurity at Silver Oak University and a B.S. in Data Science and Applications from IIT Madras.",
    },
    {
      question: "What are your skills?",
      answer:
        "Priyanshi has expertise in Cybersecurity, Network Security, OSINT, Kali Linux, Nmap, Python, Cryptography, AI-powered security tools, MongoDB, and SQL.",
    },
    {
      question: "Tell me about your background",
      answer:
        "Priyanshi is passionate about cybersecurity and AI, building intelligent security tools focused on threat analysis, network security, and OSINT.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Priyanshi works with Python, Kali Linux, Nmap, MongoDB, SQL, JavaScript, HTML, CSS, Git, GitHub, Linux, and AI-powered security technologies.",
    },
    {
      question: "Any upcoming projects?",
      answer:
        "Priyanshi is currently exploring advanced cybersecurity research, AI-assisted threat intelligence, and secure application development.",
    },
    {
      question: "What's your goal?",
      answer:
        "To build intelligent cybersecurity solutions that leverage AI to protect systems and solve real-world security challenges.",
    },
    {
      question: "Where can I see your code?",
      answer:
        "You can explore Priyanshi's cybersecurity projects on her GitHub profile. Feel free to check out her repositories!",
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
        <div className="fixed bottom-20 left-3 right-3 md:left-auto md:right-6 md:w-96 h-[75vh] md:h-[580px] bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-white/20 animate-slide-up">
          {/* Header */}
          <div className="bg-white/10 text-white p-4 flex justify-between items-center backdrop-blur-md border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <FaRobot className="text-2xl text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-bold text-base md:text-lg text-white">
                  Priyanshi's AI Assistant
                </span>
                <p className="hidden md:block text-xs text-gray-300">
                  Select a question below
                </p>
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
                  className={`p-3 rounded-2xl max-w-[85%] md:max-w-[80%] ${
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
                <div className="p-3 rounded-2xl max-w-[85%] md:max-w-[70%] bg-gray-900/80 border border-white/10 rounded-tl-none">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin">
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
          <div className="p-2 md:p-3 border-t border-white/20 bg-black/50">
            <p className="text-[10px] md:text-xs text-center text-gray-400">
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
