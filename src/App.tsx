import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Skills from './components/skills';

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loding</div>}>
        <Navbar />
        <Landing />
        <About />
        <Skills />
      </Suspense>
    </div>
  );
};

export default App;
