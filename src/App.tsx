import './App.css'
import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import { useNavbarStore } from "./store";
import Footer from './components/Footer'
import Skills from './components/Skills'


function App() {
  const { navbarState } = useNavbarStore();

  return (
    <div>
      <Navbar />

      {navbarState === "about" && (
        <>
          <Hero  />
          <Aboutme />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}

      {navbarState === "projects" && ( <AllProjects /> )}
      {navbarState === "skills" && ( <></> )}

    </div>
  )
}

export default App
