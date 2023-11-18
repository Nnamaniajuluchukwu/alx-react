import { select, unselect } from "./courseActionTypes"

export const selectCourse = index => {
  return {
    ...select,
    index
  }
};

export const unselectCourse = index => {
  return {
    ...unselect,
    index
  }
};

const boundSelectCourse = index => dispatch(selectCourse(index));
const boundunselectCourse = index => dispatch(unselectCourse(index));
