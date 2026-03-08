import { useState } from "react";
import { Routes, Route } from "react-router";
import { Hero, Services, Projects, About, Contact, Login } from "./pages";
import { Navbar, Testimonials, Footer } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              scrollToSection={scrollToSection}
            />
            <Hero scrollToSection={scrollToSection} />
            <Services />
            <Projects />
            <About />
            <Testimonials />
            <Contact />
            <Footer scrollToSection={scrollToSection} />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
