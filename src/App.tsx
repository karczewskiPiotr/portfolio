import React, { Suspense } from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>Loding</div>}>
        <Navbar />
        <Landing />
      </Suspense>
    </div>
  );
};

export default App;
