export const notificationState = {
  notifications: [],
  filter: 'DEFAULT'
};

export default function notificationReducer(state = notificationState, action) {
  switch(action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS': {
      return {
        ...state,
        notifications: action.data.map((item) => ({...item, isRead: false}))
      }
    }
    case 'MARK_AS_READ': {
      return {
        ...state,
        notifications: state.notifications.map((data) => (data.id == action.index ? {...data, isRead: true} : {...data}))
      }
    }
    case 'SET_TYPE_FILTER': {
      return {
        ...state,
        filter: action.filter
      }
    }
    default:
      return state;
  }
};
