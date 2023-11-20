import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const notificationState = Map({
  notifications: [],
  filter: 'DEFAULT'
});

export default function notificationReducer(state = notificationState, action) {
  switch(action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS': {
      const normalizeData = notificationsNormalizer(action.data);
      Object.keys(normalizeData.notifications).map((key) => (
        normalizeData.notifications[key].isRead = false));
      return state.merge(normalizeData);
    }
    case 'MARK_AS_READ': {
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
    }
    case 'SET_TYPE_FILTER': {
      return state.set('filter', action.filter);
    }
    default:
      return state;
  }
};
