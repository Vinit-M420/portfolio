import './App.css'
import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import { useNavbarStore } from "./store";
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  const { navbarState } = useNavbarStore();
  const [heroComplete, setHeroComplete] = useState(false);


  return (
    <div>
      <Navbar />

      {navbarState === "about" && (
        <>
          <Hero setHeroComplete={setHeroComplete} />
          <Aboutme shouldAnimate={heroComplete}/>
          <Projects />
          <Footer />
        </>
      )}

      {navbarState === "projects" && ( <AllProjects /> )}

      {navbarState === "resume" && (
        <></>
      )}

    </div>
  )
}

export default App
