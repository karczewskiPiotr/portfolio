import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';

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
      </Suspense>
    </div>
  );
};

export default App;
