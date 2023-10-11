import React from "react";
import './Login.css';


export default function Login() {
    return (
        <>
            <body className="App-body">
                <p>Login to access the full dashboard</p>
                <label for='email'>Email </label>
                <input type='email' id='email'></input>
                <label for='password'> Password </label>
                <input type='password' id='password'></input>
                <button type='submit'>OK</button>
            </body>
        </>
    );
}
