import './App.css'
import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import { useNavbarStore } from "./store";
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import Footer from './components/Footer'
// import Hero2 from './components/Hero2'


function App() {
  const { navbarState } = useNavbarStore();
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if (mainRef.current) {
      gsap.fromTo(mainRef.current, 
        {y: -50, opacity: 0, duration: 1, ease: "power2.out", }, 
        {y: 0, opacity: 1, duration: 1, delay:0.25});
      }
      
  }, []);


  return (
    <div>
      <Navbar />

      {navbarState === "about" && (
        <>
          <div ref={mainRef}> 
            <Hero />
            <Aboutme />
          </div>
          <Projects />
          <Footer />
        </>
      )}

      {navbarState === "projects" && ( <AllProjects /> )}

      {navbarState === "resume" && (
        <>
          
        </>
      )}

    </div>
  )
}

export default App
