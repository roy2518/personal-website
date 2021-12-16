import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/common/Header.module.scss';

import { Page } from 'utils/types';

interface HeaderProps {
  page: Page;
}

const Header = ({ page }: HeaderProps): JSX.Element => (
  <div className={styles.header}>
    <ul>
      <li>
        <Link className={page === Page.About ? styles.active : ''} to="/"> About </Link>
      </li>
      <li>
        <Link className={page === Page.Resume ? styles.active : ''} to="/projects"> Resume </Link>
      </li>
      <li>
        <Link className={page === Page.Contact ? styles.active : ''} to="/blog"> Contact </Link>
      </li>
    </ul>
  </div>
);

export default Header;
