import React from 'react';
import Reviews from './Reviews';
import Data from './data (2)';
import './App.css';

function App() {
  return (
    <main>
    <section className='container'>
      <div className='title'></div>
      <Reviews  info={Data} />
    </section>
    </main>
  );
}

export default App;
