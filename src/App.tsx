import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about'

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loding</div>}>
        <Navbar />
        <Landing />
        <About />
      </Suspense>
    </div>
  );
};

export default App;
