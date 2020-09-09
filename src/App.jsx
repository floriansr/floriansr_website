import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Projects from 'pages/Projects';
import Home from 'pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/new-playlist" />
            <Route exact path="/about" />
            <Route exact path="/project/:projectId" />
            <Route exact path="/projects" component={Projects} />
            <Home exact path="/" component={Home} />
            <Route path="*" status={404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
