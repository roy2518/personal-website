import React from 'react';
import Plx from 'react-plx';

import AboutSection from 'components/home/AboutSection';
import Explosion from 'components/transitions/Explosion';

import 'styles/home/Home.scss';

const Home = (): JSX.Element => (
  <div>
    <AboutSection />
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
