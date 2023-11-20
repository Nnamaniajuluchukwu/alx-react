import * as actions from "../actions/courseActionTypes";

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case actions.FETCH_COURSE_SUCCESS.type: {
      return action.data.map((item) => ({...item, isSelected: false}));
    }
    case actions.select.type: {
      // == was used instead of === (strict) because the user can send a number or string datatype
      return state.map((data) => (data.id == action.index ? {...data, isSelected: true} : {...data}));
    }
    case actions.unselect.type: {
      return state.map((data) => (data.id == action.index ? {...data, isSelected: false} : {...data}));
    }
    default:
      return state;
  }
};
