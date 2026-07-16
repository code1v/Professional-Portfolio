import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";


function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Projects />
  <Skills />
  <About />
  <Experience />
  <Education />
  <Contact />
  <Footer />
</>
  );
}

export default Home;