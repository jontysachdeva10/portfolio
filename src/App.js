import React from "react";
import Hero from "./pages/Hero/index";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Testimonials from "./pages/Testimonials";
import Job from "./pages/Job";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <AboutMe />
        <Job />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
