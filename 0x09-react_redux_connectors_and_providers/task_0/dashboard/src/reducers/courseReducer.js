import * as actions from "../actions/courseActionTypes";
import { Map } from 'immutable';
import coursesNormalizer from "../schema/courses";

export default function courseReducer(state = Map([]), action) {
  switch(action.type) {
    case actions.FETCH_COURSE_SUCCESS.type: {
      const normalizeData = coursesNormalizer(action.data);
      Object.keys(normalizeData).map((key) => (normalizeData[key].isSelected = false));
      return state.merge(normalizeData);
    }
    case actions.select.type: {
      return state.setIn([String(action.index), 'isSelected'], true);
    }
    case actions.unselect.type: {
      return state.setIn([String(action.index), 'isSelected'], false);
    }
    default:
      return state;
  }
};
