import { combineReducers } from 'redux';

import {
  NAME as courseCatalogName,
  reducer as courseCatalogReducer,
} from '../../components/course-catalog';
import { NAME as myCoursesName, reducer as myCoursesReducer } from '../../components/my-courses';

const rootReducer = combineReducers({
  [courseCatalogName]: courseCatalogReducer,
  [myCoursesName]: myCoursesReducer,
});

export default rootReducer;
