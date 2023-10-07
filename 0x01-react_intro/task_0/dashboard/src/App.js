import React from 'react';
import './App.css';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <img src={require('./holberton_logo.jpg')} alt='holberton logo' />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className='App-footer'>Copyright 2020 - holberton School</footer>
    </div>
  )
}
