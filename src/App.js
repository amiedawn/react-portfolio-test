import React from 'react';
import About from './components/About';
import Nav from './components/Header/Nav';

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <About></About>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
