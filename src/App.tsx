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
              start: '100vh',
              duration: '50vh',
              properties: [
                {
                  startValue: '#e3e4e0',
                  endValue: 'rgba(199, 199, 187, 0.4)',
                  property: 'backgroundColor',
                },
              ],
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
