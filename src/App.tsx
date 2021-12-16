import React from 'react';
import Plx from 'react-plx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Blog from 'components/blog/Blog';
import Home from 'components/home/Home';
import Projects from 'components/projects/Projects';

import 'App.scss';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Plx
            parallaxData={[{
              start: '75vh',
              duration: '75vh',
              properties: [{
                startValue: '#0c2431',
                endValue: 'rgba(25, 74, 80, 0.4)',
                property: 'backgroundColor',
              }],
            }]}
          >
            <Home />
          </Plx>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
