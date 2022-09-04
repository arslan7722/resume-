import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/About/AboutMe";
import { Skills } from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import { ContactMe } from "../components/Contact/ContactMe";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
};

export default HomePage;
