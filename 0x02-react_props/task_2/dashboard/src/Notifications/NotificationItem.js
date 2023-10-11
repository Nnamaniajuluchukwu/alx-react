import React from "react";
import './Notifications.css';


export default function NotificationItem({type, html , value}) {
    if (value) return <li data-notification-type={type}> {value} </li>
    else return <li dangerouslySetInnerHTML={html}></li>
}
