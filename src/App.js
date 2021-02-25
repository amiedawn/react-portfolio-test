import React from 'react';
import About from './components/About';
import Navbar from './components/Header/Navigation/Navbar';
import ContactForm from './components/Contact';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
