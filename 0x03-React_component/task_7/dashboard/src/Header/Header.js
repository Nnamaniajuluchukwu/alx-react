import React from "react";
import './Header.css';


export default function Header() {
    return (
        <header className="App-header">
            <img src={require('../assets/holberton_logo.jpg')} alt='holberton logo' />
            <h1>School dashboard</h1>
      </header>
    );
}
