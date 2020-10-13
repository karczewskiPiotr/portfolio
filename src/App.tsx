import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';
import Collaborations from './components/collaborations';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import { animated, useSpring } from 'react-spring';

const App: React.FC = () => {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateX(0) scale(1)' },
    from: { opacity: 0, transform: 'translateX(-5px) scale(0.8)' },
  });

  return (
    <animated.div style={props} className='app'>
      <Navbar />
      <Landing />
      <div className='pattern-background'>
        <About />
        <Skills />
        <Projects />
      </div>
      <Testimonials />
      <Collaborations />
    </animated.div>
  );
};

export default App;
