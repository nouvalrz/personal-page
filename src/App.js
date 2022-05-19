import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import ProjectHero from './components/ProjectHero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <ProjectHero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
