import React, { memo } from "react";
import { PropTypes } from 'prop-types';
import './Notifications.css';


function NotificationItem({type='default', html , value, markAsRead}) {
    if (value) return <li data-notification-type={type} onClick={markAsRead}> {value} </li>
    else return <li dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({ 
      __html: PropTypes.string
    }),
};

export default memo(NotificationItem);