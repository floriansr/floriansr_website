import React from 'react';
import './styles.scss';
import bgVideo from 'assets/videos/keyboard.mp4';
import NewPlaylistButton from 'components/ProjectsButton';

const Home = () => {
  return (
    <>
      <div className="page home">
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
        <div className="homePageContent">
          <div className="overFlowText">
            <p className="slogan">Welcome visitor !</p>
            <p className="productPresentation">
              Feel free to browse my portfolio and let yourself be guided by my
              different projects!
              <br /> You'll find links, images and access to the GitHub repos
            </p>
            <NewPlaylistButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
