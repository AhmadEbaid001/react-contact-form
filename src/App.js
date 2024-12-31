import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Us</h1>
        <p>Fill out the form below to get in touch with us.</p>
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
