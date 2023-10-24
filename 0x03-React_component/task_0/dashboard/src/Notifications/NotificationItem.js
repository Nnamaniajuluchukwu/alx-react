import React from "react";
import { PropTypes } from 'prop-types';
import './Notifications.css';


export default function NotificationItem({type='default', html , value}) {
    if (value) return <li data-notification-type={type}> {value} </li>
    else return <li dangerouslySetInnerHTML={html}></li>
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({ 
      __html: PropTypes.string
    }),
};
