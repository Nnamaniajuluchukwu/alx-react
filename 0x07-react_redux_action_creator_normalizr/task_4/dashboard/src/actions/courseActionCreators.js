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
