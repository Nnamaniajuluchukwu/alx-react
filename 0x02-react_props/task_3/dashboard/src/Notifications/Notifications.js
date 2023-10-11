import React from "react";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem html={{ __html: getLatestNotification() }} />
            </ul>
            <button style={{
                float: 'right',
                marginTop: '-9.5em',
                marginRight: '-0.5em',
                backgroundColor: '#fff',
            }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
                <img src={require('../assets/close-button.png')} height="15px" width="13px" alt="close icon"/>
            </button>
        </div>
    );
}
