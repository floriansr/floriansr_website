import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import projectsReducer from 'redux/projects/projectsReducer';
import projectReducer from 'redux/project/projectReducer';

const rootReducer = combineReducers({
  allProjects: projectsReducer,
  oneProject: projectReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
