import { SET_PROJECT } from './projectTypes';

export const setProject = (data) => {
  return {
    type: SET_PROJECT,
    details: data,
  };
};
