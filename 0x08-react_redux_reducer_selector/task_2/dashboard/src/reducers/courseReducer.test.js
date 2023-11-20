import courseReducer from "./courseReducer";
import expected from "./courseTestData";


describe('COUSE REDUCER', () => {
  it('returns the default state when no action is passed', () => {
    const reducer = courseReducer(undefined, { type: undefined });
    expect(reducer).toStrictEqual([]);
  });

  it('verify FETCH_COURSE_SUCCESS returns the data passed', () => {
    const FETCH = {
      type: 'FETCH_COURSE_SUCCESS',
      data: expected.data
    }

    const reducer = courseReducer([], FETCH);
    expect(reducer).toEqual(expected.fetch);
  });

  it('verify SELECT_COURSE returns the data with the right item updated', () => {
    const SELECT = {
      type: 'SELECT_COURSE',
      index: 2
    }
    const reducer = courseReducer(expected.fetch, SELECT);
    expect(reducer).toEqual(expected.select);
  });

  it('verify UNSELECT_COURSE returns the data with the right item updated', () => {
    const UNSELECT = {
      type: 'UNSELECT_COURSE',
      index: 2
    }
    const reducer = courseReducer(expected.fetch, UNSELECT);
    expect(reducer).toEqual(expected.unselect);
  });
});
