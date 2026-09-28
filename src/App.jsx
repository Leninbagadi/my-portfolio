import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesIntro from './components/ServiceIntro';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesIntro/>
        <Projects/>
      </main>
    </>
  );
}

export default App;