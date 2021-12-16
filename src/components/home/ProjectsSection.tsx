import React from 'react';
import Plx from 'react-plx';

import styles from 'styles/home/ProjectsSection.module.scss';

const ProjectsSection = (): JSX.Element => {
  return (
    <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <h2>Projects</h2>
        </div>
    </div>
  );
};

export default ProjectsSection;
