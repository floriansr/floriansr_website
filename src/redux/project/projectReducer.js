import Cookies from 'js-cookie';
import { cookieName } from '../../constants';
import { SET_PROJECT } from './projectTypes';

const initialState = {
  project: Cookies.get(cookieName)
    ? JSON.parse(Cookies.get(cookieName)).projectInfo
    : {},
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      return {
        ...state,
        project: action.details,
      };
    default:
      return state;
  }
};

export default projectReducer;
