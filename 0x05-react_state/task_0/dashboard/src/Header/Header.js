import React from "react";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
    header: {
        borderBottom: '3px solid #e0354b',
        color: '#e0354b',
        margin: 'auto',
        display: 'flex',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    logo: {
        width: '200px',
        height: '200px'
    },
    h1: {
        position: 'relative',
        top: '4rem',
        zIndex: 0
    }
})

export default function Header() {
    return (
        <header className={css(styles.header)}>
            <img className={css(styles.logo)} src={require('../assets/holberton_logo.jpg')} alt='holberton logo' />
            <h1 className={css(styles.h1)} >School dashboard</h1>
      </header>
    );
}
