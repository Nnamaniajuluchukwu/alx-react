import { Map } from 'immutable';

export const filterTypeSelected = state => {
  return state.get('filter');
}

export const getNotifications = state => {
  return Map(state.get('notifications'));
}

export const getUnreadNotifications = state => {
  return Map(state.get('notifications')).filter((item => !item.isRead));
}
