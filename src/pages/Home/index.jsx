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
            <Text className="slogan">Welcome visitor !</Text>
            <Text className="productPresentation">
              Feel free to browse my portfolio and let yourself be guided by my
              different projects!
              <br /> You'll find links, images and access to the GitHub repos
            </Text>
            <NewPlaylistButton />
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Home;
