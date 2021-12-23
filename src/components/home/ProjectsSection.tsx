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
          description={(
            <span
              className={styles.projectDescription}
            >
              Tweet Visualizer plots tweets on a map, based on
              the author&apos;s location. It fetches tweets using
              <a
                href="https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent"
                target="_blank"
                rel="noreferrer"
              >
                {' Twitter API v2 '}
              </a>
              , uses
              <a
                href="https://developer.mapquest.com/documentation/geocoding-api/"
                target="_blank"
                rel="noreferrer"
              >
                { ' MapQuest ' }
              </a>
              to perform address geocoding, and
              <a
                href="https://www.mapbox.com/"
                target="_blank"
                rel="noreferrer"
              >
                { ' MapBox ' }
              </a>
              for map visualization.
            </span>
          )}
          imageSrc={DisplayTweetsScreenshot}
          githubLink="https://github.com/roy2518/display-tweets-frontend"
          liveLink="https://roy2518.github.io/display-tweets-frontend/"
          skills={['React', 'Typescript', 'Node.js']}
          title="Tweet Visualizer"
        />
      </div>
    </Plx>
  </div>
);

export default ProjectsSection;
