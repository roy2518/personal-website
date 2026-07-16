import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'Layout';
import Experience from 'components/home/Experience';
import AboutSection from 'components/home/AboutSection';

import 'App.scss';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/personal-website/experience">
            <Experience />
          </Route>
          <Route path="/personal-website/">
            <AboutSection />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
