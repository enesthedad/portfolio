import About from "./Component/About";
import Contact from "./Component/Contact";
import Greeter from "./Component/Greeter";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Navbar />
        <Greeter />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
