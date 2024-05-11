import React from 'react';
import './style.scss';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Portfolio';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Intro />
        <AboutMe />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
