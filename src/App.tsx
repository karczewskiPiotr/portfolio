import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';
import Collaborations from './components/collaborations'

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loding</div>}>
        <Navbar />
        <Landing />
        <div className="pattern-background">
          <About />
          <Skills />
        </div>
        <Collaborations />
      </Suspense>
    </div>
  );
};

export default App;
