import React from 'react';
import Plx from 'react-plx';

import styles from 'styles/transitions/Explosion.module.scss';

const ROWS = 6;
const NUM_BOXES_PER_ROW = 8;
const BOXES: ParallaxDataType[][] = [];

for (let i = 0; i < ROWS; i += 1) {
  BOXES.push([]);
  for (let j = 0; j < NUM_BOXES_PER_ROW; j += 1) {
    const left = j < NUM_BOXES_PER_ROW / 2;
    const top = i < ROWS / 2;
    const xFactor = left ? -1 : 1;
    const yFactor = top ? -1 : 1;
    const inside = Math.abs(j - i) <= 2;
    const scaleFactor = inside ? 0.5 : 1;
    const start = inside ? 40 : 100;
    const offset = inside ? 40 : 100;
    const rotationFactor = Math.random() > 0.5 ? 180 : -180;

    BOXES[i].push({
      start: 'self',
      duration: '100vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
        {
          startValue: '#0c2431',
          endValue: '#194a50',
          property: 'backgroundColor',
        },
        {
          startValue: 0,
          endValue: Math.random() * rotationFactor,
          property: 'rotate',
        },
        {
          startValue: 1,
          endValue: 1 + Math.random() * scaleFactor,
          property: 'scale',
        },
        {
          startValue: 0,
          endValue: (start + Math.random() * offset) * xFactor,
          property: 'translateX',
          unit: '%',
        },
        {
          startValue: 0,
          endValue: (start + Math.random() * offset) * yFactor,
          property: 'translateY',
          unit: '%',
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
    <div className={styles['explosion-container']}>
      { boxes }
    </div>
  );
};

export default Explosion;
