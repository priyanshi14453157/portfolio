"use client";

import {
  FaPython,
  FaLinux,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaShieldAlt,
  FaRobot,
  FaNetworkWired,
} from "react-icons/fa";

import { SiMongodb, SiKalilinux, SiGithub, SiC } from "react-icons/si";

const SkillsCarousel = () => {
  const icons = [
    <FaShieldAlt key="security" title="Cybersecurity" />,
    <SiKalilinux key="kali" title="Kali Linux" />,
    <FaNetworkWired key="network" title="Network Security" />,
    <FaPython key="python" title="Python" />,
    <SiC key="c" title="C Programming" />,
    <FaJs key="javascript" title="JavaScript" />,
    <FaHtml5 key="html" title="HTML5" />,
    <FaCss3Alt key="css" title="CSS3" />,
    <SiMongodb key="mongodb" title="MongoDB" />,
    <FaDatabase key="database" title="SQL" />,
    <FaGitAlt key="git" title="Git" />,
    <SiGithub key="github" title="GitHub" />,
    <FaLinux key="linux" title="Linux" />,
    <FaRobot key="ai" title="Artificial Intelligence" />,
  ];

  return (
    <section className="w-full bg-black text-white py-20 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <div className="marquee">
          {/* First Set */}
          <div className="marquee__group">
            {icons.map((icon, idx) => (
              <div key={idx} className="icon-box">
                {icon}
              </div>
            ))}
          </div>

          {/* Duplicate Set */}
          <div className="marquee__group">
            {icons.map((icon, idx) => (
              <div key={idx} className="icon-box">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        .marquee__group {
          display: flex;
        }

        .icon-box {
          width: 110px;
          height: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 70px;
          color: white;
          margin-right: 60px;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsCarousel;
