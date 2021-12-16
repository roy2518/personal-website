import React from 'react';
import Plx from 'react-plx';

import styles from 'styles/home/ProjectsSection.module.scss';

const ProjectsSection = (): JSX.Element => (
  <div className={styles.container}>
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
        }],
      }]}
    >
      <div className={styles.sectionHeading}>
        <h2>Projects</h2>
      </div>
    </Plx>
  </div>
);

export default ProjectsSection;
