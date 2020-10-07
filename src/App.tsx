import React from 'react';
import './App.css';
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>
        A paragraph (from the Greek paragraphos, “to write beside” or “written
        beside”) is a self-contained unit of a discourse in writing dealing with
        a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose.
      </p>
    </div>
  );
};

export default App;
