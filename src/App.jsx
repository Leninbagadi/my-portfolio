import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesIntro from './components/ServiceIntro';
import Projects from './components/Projects';
import ProjectShowcase from './components/ProjectShowcase';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesIntro/>
        <Projects/>
        <ProjectShowcase/>
      </main>
    </>
  );
}

export default App;