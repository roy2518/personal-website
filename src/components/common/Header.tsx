import React from 'react';

import styles from 'styles/common/Header.module.scss';

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <ul>
      <li>
        <span> About </span>
      </li>
      <li>
        <span> Experience </span>
      </li>
      <li>
        <span> Contact </span>
      </li>
    </ul>
  </div>
);

export default Header;
