import React from 'react';

import AboutSection from 'components/home/AboutSection';
import ExperienceSection from 'components/home/ExperienceSection';
import ProjectsSection from 'components/home/ProjectsSection';
import Explosion from 'components/transitions/Explosion';

const Home = (): JSX.Element => (
  <div>
    <AboutSection />
    <Explosion />
    <ExperienceSection />
    <ProjectsSection />
  </div>
);

export default Home;
