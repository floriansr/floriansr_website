import Cookies from 'js-cookie';
import { cookieName } from '../../constants';
import { SET_PROJECTS } from './projectsTypes';

const initialState = {
  projects: Cookies.get(cookieName)
    ? JSON.parse(Cookies.get(cookieName)).projectsInfo
    : {},
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.details,
      };
    default:
      return state;
  }
};

export default projectsReducer;
