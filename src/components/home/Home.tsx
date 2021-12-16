import React from 'react';
import Plx from 'react-plx';

import Header from 'components/common/Header';
import ScrollArrow from 'components/common/ScrollArrow';
import WordCycler from 'components/home/WordCycler';
import Explosion from 'components/transitions/Explosion';

import 'styles/home/Home.scss';

import { Page } from 'utils/types';

const Home = (): JSX.Element => (
  <div>
    <Plx
      parallaxData={
        [
          {
            start: 'self',
            duration: '50vh',
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
              },
            ],
          },
        ]
      }
    >
      <div className="firstSection">
        <Header page={Page.Home} />
        <div className="about">
          <h2>Hi there! I&apos;m Roy, a</h2>
          <div className="descriptor">
            <WordCycler words={['student', 'developer', 'musician']} />
          </div>
          <p>currently attending Duke University.</p>
          <p>I&apos;ll be graduating in Spring 2022 with a B.S. in Computer Science!</p>
        </div>
        <ScrollArrow />
      </div>
    </Plx>
    <Explosion />
    <div
      className="secondSection"
    >
      <Plx
        parallaxData={[{
          start: 'self',
          duration: '100vh',
          properties: [{
            startValue: 0,
            endValue: 1,
            property: 'opacity',
          },
          {
            startValue: -30,
            endValue: 0,
            unit: 'vh',
            property: 'translateY',
          },
          {
            startValue: 1,
            endValue: 1.5,
            property: 'scale',
          },
          ],
        }]}
      >
        <div className="sectionHeading">
          <h1>Experience</h1>
          <div>
            <div className="dateAndLocation">
              May 2021 - Aug 2021 | Pittsburgh, PA (remote)
            </div>
            <div className="position">
              Software Engineering Intern
              {' @ '}
              <a href="https://duolingo.com" rel="noreferrer" target="_blank">Duolingo</a>
            </div>
            <div className="dateAndLocation">
              May 2020 - Aug 2020 | Austin, TX (remote)
            </div>
            <div className="position">
              Software Engineering Intern
              {' @ '}
              <a href="https://amazon.com" rel="noreferrer" target="_blank">Amazon</a>
            </div>
            <div className="dateAndLocation">
              May 2019 - Aug 2019 | Durham, NC
            </div>
            <div className="position">
              TDP Intern
              {' @ '}
              <a href="https://optum.com" rel="noreferrer" target="_blank">Optum</a>
            </div>
          </div>
        </div>
      </Plx>
    </div>
  </div>
);

export default Home;
