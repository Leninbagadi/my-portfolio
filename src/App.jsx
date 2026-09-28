import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesIntro from './components/ServiceIntro';
import Projects from './components/Projects';
import ProjectShowcase from './components/ProjectShowcase';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesIntro/>
        <Projects/>
        <ProjectShowcase/>
        <About/>
        <Process/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;