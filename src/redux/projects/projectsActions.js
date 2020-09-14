import { SET_PROJECTS } from './projectsTypes';

export const setProjects = (data) => {
  return {
    type: SET_PROJECTS,
    details: data,
  };
};
