import React, { Component } from "react";
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import NotificationItemshape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";


const animations = {
  visibity: {
      '0%': {
        opacity: 0.5
      },
      '100%': {
        opacity: 1
      }
  },
  bounce: {
      '0%': {
        transform: 'translateY(0px)',
      },
      '33%': {
        transform: 'translateY(-5px)'
      },
      '66': {
        transform: 'translateY(5px)'
      },
      '100%': {
        transform: 'translateY(0px)',
      },
  }
}

const styles = StyleSheet.create({
  notify: {
    border: '3px dashed #e0354b',
    padding: '1rem',
    width: '30%',
    position: 'absolute',
    right: 0,

    "@media (max-width: 900px)": {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
      background: 'white',
      position: 'absolute',
      right: 0,
      left: 0,
      zIndex: 1
    }
  },
  menu: {
    textAlign: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [animations.visibity, animations.bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3'
    }
  }
});


export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.prevListLength = props.listNotification.length; // Store the initial list length
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotification has a longer list of elements
    return nextProps.listNotification.length > this.prevListLength;
  }

  componentDidUpdate() {
    // Update the stored list length after the component has updated
    this.prevListLength = this.props.listNotification.length;
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
        {!displayDrawer ? 
          <div className={css(styles.menu)}>
            <p>Your notifications</p>
          </div>
        :
          <div className={css(styles.notify)}>
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
        }
      </>
    );
  }
}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotification: PropTypes.arrayOf(NotificationItemshape)
}
