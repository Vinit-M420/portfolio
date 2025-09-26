import './App.css'
import Aboutme from './components/Aboutme'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import { useNavbarStore } from "./store";
import Footer from './components/Footer'


function App() {
  const { navbarState } = useNavbarStore();

  return (
    <div>
      <Navbar />

      {navbarState === "about" && (
        <>
          <Hero  />
          <Aboutme />
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
