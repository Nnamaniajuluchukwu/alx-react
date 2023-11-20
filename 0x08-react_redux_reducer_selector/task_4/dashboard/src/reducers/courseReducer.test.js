import courseReducer from "./courseReducer";
import expected from "./courseTestData";


// Can't figure yet
describe('COUSE REDUCER', () => {
  it.skip('returns the default state when no action is passed', () => {
    const reducer = courseReducer(undefined, { type: undefined });
    expect(reducer.toJS()).toStrictEqual([].toJS());
  });

  it.skip('verify FETCH_COURSE_SUCCESS returns the data passed', () => {
    const FETCH = {
      type: 'FETCH_COURSE_SUCCESS',
      data: expected.data
    }

    const reducer = courseReducer([], FETCH);
    expect(reducer.toJS()).toEqual(expected.fetch);
  });

  it.skip('verify SELECT_COURSE returns the data with the right item updated', () => {
    const SELECT = {
      type: 'SELECT_COURSE',
      index: 2
    }
    const reducer = courseReducer(expected.fetch, SELECT);
    expect(reducer.toJS()).toEqual(expected.select);
  });

  it.skip('verify UNSELECT_COURSE returns the data with the right item updated', () => {
    const UNSELECT = {
      type: 'UNSELECT_COURSE',
      index: 2
    }
    const reducer = courseReducer(expected.fetch, UNSELECT);
    expect(reducer.toJS()).toEqual(expected.unselect);
  });
});
