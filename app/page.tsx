import Image from "next/image";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutBranch from './components/AboutBranch'
import Icons from './components/Icons'
import ProjectsSection from './components/ProjectsTimeline'
import FloatingAchivement from './components/FloatingAchivement'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
export default function Home() {
return (
  <>
  <div className="min-h-screen bg-black text-white">
    <Navbar />
    <div>
    <Hero/>
  </div>
  </div>
   <AboutBranch></AboutBranch>
   <Icons/>
   <ProjectsSection></ProjectsSection>
   <FloatingAchivement></FloatingAchivement>
   <Contact></Contact>
   <Footer></Footer>
   <Chatbot></Chatbot>
  </>
);
}
