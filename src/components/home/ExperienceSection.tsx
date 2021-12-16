import React from 'react';
import Plx from 'react-plx';

import styles from 'styles/home/ExperienceSection.module.scss';

const ExperienceSection = (): JSX.Element => (
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
        <h2>Experience</h2>
      </div>
      <div className={styles.experience}>
        <div className={styles.dateAndLocation}>
          May 2021 - Aug 2021 | Pittsburgh, PA (remote)
        </div>
        <div className={styles.position}>
          Software Engineering Intern
          {' @ '}
          <a href="https://duolingo.com" rel="noreferrer" target="_blank">Duolingo</a>
          <ul>
            <li>
              Globalization team
            </li>
            <li>
              Collaborated with designer and PM to develop an
              integrated Glossary tool
              <ul>
                <li>
                  Assists translators in creating accurate translations, efficiently
                </li>
                <li>
                  React/Redux + Typescript frontend, supported by a
                  backend Python microservice and ElasticSearch data store
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.dateAndLocation}>
          May 2020 - Aug 2020 | Austin, TX (remote)
        </div>
        <div className={styles.position}>
          Software Engineering Intern
          {' @ '}
          <a href="https://amazon.com" rel="noreferrer" target="_blank">Amazon</a>
          <ul>
            <li>
              Amazon EHS (Environmental, Health, and Safety), aka AUSTIN team
            </li>
            <li>
              Developed a microservice for sending and retrieving notifications
              <ul>
                <li>
                  Built using AWS AppSync, API Gateway, DynamoDB, Lambda, and SQS
                </li>
              </ul>
            </li>
            <li>
              Wrote GraphQL queries to fetch and display notifications
              in a React + Typescript frontend
            </li>
          </ul>
        </div>
        <div className={styles.dateAndLocation}>
          Aug 2019 - Dec 2021 | Durham, NC
        </div>
        <div className={styles.position}>
          Undergraduate Teaching Assistant
          {' @ '}
          <a href="https://cs.duke.edu" rel="noreferrer" target="_blank">Duke Computer Science Department</a>
          <ul>
            <li>
              CS230: Discrete Mathematics
            </li>
            <li>
              CS330: Design and Analysis of Algorithms
            </li>
            <li>
              Held weekly recitations, office hours, and graded assignments
            </li>
          </ul>
        </div>
        <div className={styles.dateAndLocation}>
          May 2019 - Aug 2019 | Durham, NC
        </div>
        <div className={styles.position}>
          Software Engineering Intern
          {' @ '}
          <a href="https://optum.com" rel="noreferrer" target="_blank">Optum</a>
          <ul>
            <li>
              Developed an iOS application (Swift) aimed at reducing childhood obesity
              rates through the gamification of health and fitness
            </li>
            <li>
              Built responsive user interfaces with UIKit, managed application&apos;s local
              database using the Core Data framework
            </li>
            <li>
              Utilized streaming iPhone sensor data to help users monitor physical activity
              levels in real-time
            </li>
          </ul>
        </div>
      </div>
    </Plx>
  </div>
);

export default ExperienceSection;
