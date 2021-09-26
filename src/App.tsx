import React from 'react';
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
