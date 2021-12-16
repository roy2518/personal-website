import React from 'react';
import Plx from 'react-plx';

import styles from 'styles/transitions/Explosion.module.scss';

const ROWS = 8;
const NUM_BOXES_PER_ROW = 8;
const BOXES: ParallaxDataType[][] = [];

for (let i = 0; i < ROWS; i += 1) {
  BOXES.push([]);
  for (let j = 0; j < NUM_BOXES_PER_ROW; j += 1) {
    const rotationFactor = Math.random() > 0.5 ? 180 : -180;
    BOXES[i].push({
      start: `${6 * i}vh`,
      duration: '100vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
        {
          startValue: '#13042b',
          endValue: '#ffffff',
          property: 'backgroundColor',
        },
        {
          startValue: 0,
          endValue: Math.random() * rotationFactor,
          property: 'rotate',
        },
      ],
    });
  }
}

const Explosion = (): JSX.Element => {
  const boxes: JSX.Element[] = [];
  BOXES.forEach((row) => {
    row.forEach((box) => {
      boxes.push(
        <Plx
          className={styles['explosion-box']}
          parallaxData={[box]}
        />,
      );
    });
  });
  return (
    <div>
      { boxes }
    </div>
  );
};

export default Explosion;
