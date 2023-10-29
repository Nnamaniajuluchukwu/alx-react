import React, { memo } from "react";
import { PropTypes } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
});

function NotificationItem({type='default', html , value, markAsRead}) {
  const notifyItem = (type === 'default') ? styles.default : styles.urgent

  if (value) return <li className={css(notifyItem)} data-notification-type={type} onClick={markAsRead}> {value} </li>
  else return <li className={css(notifyItem)} dangerouslySetInnerHTML={html} onClick={markAsRead}></li>
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({ 
      __html: PropTypes.string
    }),
};

export default memo(NotificationItem);
