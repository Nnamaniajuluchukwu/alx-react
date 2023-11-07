import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";


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

// Function Component
// export default function Header() {
//     const { user, logOut } = useContext(AppContext);
//     return (
//         <>
//             <header className={css(styles.header)}>
//                 <img className={css(styles.logo)} src={require('../assets/holberton_logo.jpg')} alt='holberton logo' />
//                 <h1 className={css(styles.h1)} >School dashboard</h1>
//             </header>
//             { user.isLoggedIn && 
//             <section id="logoutSection">
//                 Welcome <strong>{user.email}</strong><em><a href="##" onClick={logOut}>(logout)</a></em>
//             </section>
//             }
//         </>
//     );
// }

export default class Header extends Component {
    static contextType = AppContext;
    render () {
        const { user, logOut} = this.context;
        return (
            <>
                <header className={css(styles.header)}>
                    <img className={css(styles.logo)} src={require('../assets/holberton_logo.jpg')} alt='holberton logo' />
                    <h1 className={css(styles.h1)} >School dashboard</h1>
                </header>
                {user.isLoggedIn &&
                    <section id="logoutSection">
                        Welcome <strong>{user.email}</strong><em><a href="##" onClick={logOut}>(logout)</a></em>
                    </section>
                }
            </>
        );
    }
}
