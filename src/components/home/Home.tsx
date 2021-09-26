import React from 'react';

import Header from 'components/common/Header';
import WordCycler from 'components/home/WordCycler';

import 'styles/home/Home.scss';

import { Page } from 'utils/types';

const Home = (): JSX.Element => (
  <div>
    <Header page={Page.Home} />
    <h1>Hi there! I&apos;m Roy, a</h1>
    <div className="descriptor">
      <WordCycler words={['student', 'developer', 'musician']} />
    </div>
    <p>currently attending Duke University.</p>
    <p>I&apos;ll be graduating in Spring 2022 with a B.S. in Computer Science!</p>
  </div>
);

export default Home;
