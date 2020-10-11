import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';
import Collaborations from './components/collaborations'
import Projects from './components/projects'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loding</div>}>
        <Navbar />
        <Landing />
        <div className="pattern-background">
          <About />
          <Skills />
          <Projects />
        </div>
        <Collaborations />
      </Suspense>
    </div>
  );
};

export default App;
