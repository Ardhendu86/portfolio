import React from 'react';
import Hero from '../../common/Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import './Home.css';

/**
 * Home Page Component
 * Aggregates Hero, About, Skills, Experience (includes Work & Education), Projects, and Contact sections.
 */
const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
