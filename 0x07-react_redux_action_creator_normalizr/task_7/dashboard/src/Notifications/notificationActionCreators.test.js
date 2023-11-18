import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { NotificationTypeFilters } from "./notificationActionTypes";


describe('Notification Action Creator', () => {
  it('should return the expected markAsRead object', () => {
    const expected = {
      type: 'MARK_AS_READ',
      index: 1
    };

    const marked = markAsAread(1);

    expect(marked).toEqual(expected);
  });

  it('should return the expected setNotificationFilter object', () => {
    const expected = {
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT'
    };

    const filter = NotificationTypeFilters.default;
    const notificationFiltered = setNotificationFilter(filter);

    expect(notificationFiltered).toEqual(expected);
  });
});
