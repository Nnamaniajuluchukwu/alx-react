import React, { Component } from "react";
import './Notifications.css';
import PropTypes from 'prop-types';
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import NotificationItemshape from "./NotificationItemShape";


export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer = false, listNotification } = this.props;

    let notifyMessage;

    if (listNotification.length === 0) {
      notifyMessage = 'No new notification for now';
    } else {
      notifyMessage = listNotification.map((notify) => (
        <NotificationItem key={notify.id} type={notify.type} value={notify.value} html={notify.html} markAsRead={() => this.markAsRead(notify.id)}/>
      ));
    }

    return (
      <>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
              {notifyMessage}
            </ul>
            <button
              style={{
                float: 'right',
                marginTop: '-7.0em',
                marginRight: '-0.5em',
                backgroundColor: '#fff',
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={require('../assets/close-button.png')} height="15px" width="12px" alt="close icon" />
            </button>
          </div>
        ) : ''}
      </>
    );
  }
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotification: PropTypes.arrayOf(NotificationItemshape)
}
