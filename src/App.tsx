import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';
import Collaborations from './components/collaborations';
import Projects from './components/projects';
import Testimonials from './components/testimonials';

const App: React.FC = () => {
  return (
    <main className='app'>
      <Navbar />
      <Landing />
      <div className='pattern-background'>
        <About />
        <Skills />
        <Projects />
      </div>
      <Testimonials />
      <Collaborations />
    </main>
  );
};

export default App;
