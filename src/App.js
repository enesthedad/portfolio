import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Greeter from "./Component/Greeter";
import Navbar from "./Component/Navbar";
import OpenedNavbar from "./Component/OpenedNavbar";
import Projects from "./Component/Projects";
import { useRef, useState } from "react";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNavOpen(!navOpen);
  };

  return (
    <div className="overflow-hidden overscroll-none">
      {navOpen ? (
        <>
          <div className="min-h-screen">
            <Navbar handleClick={handleClick} navOpen={navOpen} />
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
