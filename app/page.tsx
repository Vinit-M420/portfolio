
import './globals.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
// import AllProjects from './components/AllProjects'
// import { useNavbarStore } from "./store";


function App() {
  // const { navbarState } = useNavbarStore();

  return (
    <div>
      <Navbar />
      <Hero  />
      <Aboutme />
      <Skills />   
      <Projects />
      <Footer />
    </div>
  )
}

export default App
