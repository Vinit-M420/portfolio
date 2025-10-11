import './globals.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


export default function App() {

  return (
    <div>
      <Navbar currentPath='/' />
      <Hero  />
      <Aboutme />
      <Skills />   
      <Projects />
      <Footer />
    </div>
  )
}