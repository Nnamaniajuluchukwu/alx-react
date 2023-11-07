import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';


export default function Footer() {
    const { user } = useContext(AppContext);
    return (
        <footer className='App-footer'>
            Copyright {getFullYear()} - {getFooterCopy(true)}
            { user.isLoggedIn &&
                <p><a href="##">Contact us</a></p>
            }
        </footer>
    );
}
