import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Projects from 'pages/Projects';

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
            <Route path="*" status={404} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
