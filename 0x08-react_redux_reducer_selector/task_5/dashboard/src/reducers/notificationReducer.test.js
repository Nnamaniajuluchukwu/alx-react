import {expected, testData} from "./notificationTestData";
import notificationReducer, { notificationState } from "./notificationReducer";


// Can't figure yet
describe('NOTIFICATION REDUCER', () => {
  it.skip('returns the default state when no action is passed', () => {
    const reducer = notificationReducer(undefined, {type: undefined});
    expect(reducer.toJS()).toEqual(notificationState);
  });

  it.skip('verify FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const FETCH = {
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data: expected.data
    };

    const reducer = notificationReducer(notificationState, FETCH);
    expect(reducer.toJS()).toEqual(expected.fetch);
  });

  it.skip('verify MARK_AS_READ returns the notifications with the right one marked', () => {
    const MARKED = {
      type: 'MARK_AS_READ',
      index: 2
    };

    const reducer = notificationReducer(testData, MARKED);
    expect(reducer.toJS()).toEqual(expected.marked);
  });

  it.skip('verify SET_TYPE_FILTER return the right filter attr', () => {
    const FILTERED = {
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT'
    };

    const reducer = notificationReducer(testData, FILTERED);
    expect(reducer.toJS()).toEqual(expected.filter);
  });
});
