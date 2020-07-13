import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import Button from '@material-ui/core/Button';

const NewPlaylistButton = () => {
  return (
    <>
      <Link to="/projects">
        <Button variant="contained" color="secondary" id="projects-button">
          Start to look ?
        </Button>
      </Link>
    </>
  );
};
export default NewPlaylistButton;
