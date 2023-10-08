import React from "react";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";


export default function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
