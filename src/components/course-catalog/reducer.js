import { SET_COURSE_CATALOG, RESET_COURSE_CATALOG } from './constants';

const initialState = {
  courseCatalog: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSE_CATALOG:
      return {
        ...state,
        courseCatalog: action.payload,
      };
    case RESET_COURSE_CATALOG:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
