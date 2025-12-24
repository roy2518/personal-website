import React from 'react';
import Plx from 'react-plx';

import Header from 'components/common/Header';
import ScrollArrow from 'components/common/ScrollArrow';
import WordCycler from 'components/home/WordCycler';

import styles from 'styles/home/AboutSection.module.scss';

const AboutSection = (): JSX.Element => (
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
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <h2>Hi there! I&apos;m Roy, a</h2>
          <div className={styles.descriptor}>
            <WordCycler words={['student', 'developer', 'musician']} />
          </div>
          <p>currently attending Duke University.</p>
          <p>I&apos;ll be graduating in Spring 2022 with a B.S. in Computer Science!</p>
        </div>
        <ScrollArrow />
      </div>
    </Plx>
  </div>
);

export default AboutSection;
