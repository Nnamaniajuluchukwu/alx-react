import React from "react";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    container: {
        fontSize: '1rem',
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: 'auto',
        height: '13rem',
        padding: '3rem'
    },
    input: {
        marginRight: '5px'
    }
});

export default function Login() {
    return (
        <>
            <div className={css(styles.container)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email'>Email </label>
                <input className={css(styles.input)} type='email' id='email' autoComplete="on"></input>
                <label htmlFor='password'> Password </label>
                <input type='password' id='password' autoComplete="on"></input>
                <button type='submit'>OK</button>
            </div>
        </>
    );
}
