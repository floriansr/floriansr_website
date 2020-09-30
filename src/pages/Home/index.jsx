import React from 'react';
import './styles.scss';
import { Div, Text } from 'atomize';

import bgVideo from 'assets/videos/keyboard.mp4';
import NewPlaylistButton from 'components/ProjectsButton';

const Home = () => {
  return (
    <>
      <Div className="page home">
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          id="homePageVideoBg"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Div className="homePageContent">
          <Div className="overFlowText">
            <Text className="slogan">Bienvenue !</Text>
            <Text className="productPresentation">
              N'hésitez pas à parcourir mon portfolio et à vous laisser guider par mon
              différents projets !
              <br /> Vous y trouverez des liens, des images et l'accès aux repos GitHub
            </Text>
            <NewPlaylistButton />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Home;
