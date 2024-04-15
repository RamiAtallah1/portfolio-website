import React from "react";
import "./App.css";
import Introduction from "./components/Introduction/Introduction";
import Menu from "./components/Menu/Menu";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Slide, Zoom } from "react-awesome-reveal";

export default function App() {
  return (
    <div>
      <Menu />
      <Introduction />
      <Skills />
      <Slide>
        <About />
      </Slide>
      <Portfolio />
      <Zoom>
        <Contact />
      </Zoom>
      <Footer />
    </div>
  );
}
