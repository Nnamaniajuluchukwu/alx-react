import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { select } from "../actions/courseActionTypes";
import { toJS } from 'immutable';

describe('UI REDUCER', () => {
  it('should return initial state when no action is passed', () => {
    const reducer = uiReducer(undefined, { type: undefined });
    expect(reducer).toEqual(initialState);
  });
  
  it('should return initial state when the action SELECT_COURSE is passed', () => {
    const reducer = uiReducer(initialState, select);
    expect(reducer).toEqual(initialState);
  });

  it('verify when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const expected = initialState.set("isNotificationDrawerVisible", true);

    const reducer = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(reducer.toJS()).toEqual(expected.toJS());
  })
});
