import React, { ReactHTMLElement, createRef } from 'react';

import Header from 'components/common/Header';
import AboutSection from 'components/home/AboutSection';
import ExperienceSection from 'components/home/ExperienceSection';
import ProjectsSection from 'components/home/ProjectsSection';
import Explosion from 'components/transitions/Explosion';

const Home = (): JSX.Element => (
  <div>
    <Header />
    <div>
      <AboutSection />
    </div>
    <Explosion />
    <div>
      <ExperienceSection />
    </div>
    <div>
      <ProjectsSection />
    </div>
  </div>
);

export default Home;
