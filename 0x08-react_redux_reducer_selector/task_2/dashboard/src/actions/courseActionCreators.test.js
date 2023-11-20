import { selectCourse, unselectCourse } from "./courseActionCreators";


describe('Action Creators', () => {
  it('calling the selectCourse creator with 1', () => {
    const expected = { type: 'SELECT_COURSE', index: 1 };
    expect(selectCourse(1)).toEqual(expected);
  });

  it('calling the unselectCourse with 1', () => {
    const expected = { type: 'UNSELECT_COURSE', index: 1};
    expect(unselectCourse(1)).toEqual(expected);
  });
});
