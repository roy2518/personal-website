import React from 'react';
import Plx from 'react-plx';

import DisplayTweetsScreenshot from 'assets/DisplayTweetsScreenshot.png';

import ProjectCard from 'components/home/ProjectCard';

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
        <ProjectCard
          description="Plots tweets containing a given hashtag on a map based on the location of the tweet's author.
            Uses Twitter API v2 to fetch recent tweets, MapQuest to perform address geocoding, and MapBox
            for map visualization."
          imageSrc={DisplayTweetsScreenshot}
          liveLink="https://roy2518.github.io/display-tweets-frontend/"
          skills={['React', 'Typescript', 'Node.js']}
          title="Tweet Visualizer"
        />
      </div>
    </Plx>
  </div>
);

export default ProjectsSection;
