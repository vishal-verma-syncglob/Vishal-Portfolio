import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
