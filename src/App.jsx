import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Projects from 'pages/Projects';
import Home from 'pages/Home';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

const App = () => {
  return (
    <>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
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
        </Router>
      </StyletronProvider>
    </>
  );
};

export default App;
