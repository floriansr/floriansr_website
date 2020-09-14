import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import APIManager from 'services/APIManager';
import SinglePage from 'components/SinglePage';
import { setProject } from '../../redux';

const Project = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.oneProject);
  const { projectSlug } = useParams();

  useEffect(() => {
    const getOneProject = async () => {
      const res = await APIManager.showProject(projectSlug);
      dispatch(setProject(res));
    };
    getOneProject();
  }, [projectSlug, dispatch]);

  return <>{project ? <SinglePage /> : ''}</>;
};

export default Project;
