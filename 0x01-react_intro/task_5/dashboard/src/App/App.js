import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <img src={require('../assets/holberton_logo.jpg')} alt='holberton logo' />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for='email'>Email </label>
        <input type='email' id='email'></input>
        <label for='password'> Password </label>
        <input type='password' id='password'></input>
        <button type='submit'>OK</button>
      </body>
      <footer className='App-footer'>Copyright {getFullYear()} - {getFooterCopy()}</footer>
    </div>
  )
}
