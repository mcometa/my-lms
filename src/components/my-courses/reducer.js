import { SET_MY_COURSES, RESET_MY_COURSES } from './constants';

const initialState = {
  myCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_COURSES:
      return {
        ...state,
        myCourses: action.payload,
      };
    case RESET_MY_COURSES:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
