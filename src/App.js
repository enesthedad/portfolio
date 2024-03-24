import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Greeter from "./Component/Greeter";
import Navbar from "./Component/Navbar";
import Projects from "./Component/Projects";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Enes Soyturk | Full Stack Developer & Web Designer";
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNavOpen(!navOpen);
  };

  return (
    <div className={`min-h-screen`}>
      {navOpen ? (
        <>
          <div className="top-0 min-h-screen ">
            <div className="w-full">
              <Navbar handleClick={handleClick} navOpen={navOpen} />
            </div>

            <Greeter />
          </div>
          <About className="overflow-hidden" />
          <Projects className="overflow-hidden" />
          <Contact className="overflow-hidden" />
          <Footer className="overflow-hidden" />
        </>
      ) : (
        <>
          <div className="h-screen">
            <Navbar handleClick={handleClick} navOpen={navOpen} />
            <Greeter />
          </div>

          <About className="overflow-hidden" />
          <Projects className="overflow-hidden" />
          <Contact className="overflow-hidden" />
          <Footer className="overflow-hidden" />
        </>
      )}
    </div>
  );
}

export default App;
