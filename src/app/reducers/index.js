import { combineReducers } from 'redux';

import {
  NAME as courseCatalogName,
  reducer as courseCatalogReducer,
} from '../../components/course-catalog';

const rootReducer = combineReducers({
  [courseCatalogName]: courseCatalogReducer,
});

export default rootReducer;
