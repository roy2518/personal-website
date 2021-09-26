import React from 'react';

import Header from 'components/common/Header';
import Home from 'components/home/Home';

import 'App.scss';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
