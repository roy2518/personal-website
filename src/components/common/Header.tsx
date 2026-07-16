import { NavLink } from 'react-router-dom';

import styles from 'styles/common/Header.module.scss';

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <ul>
      <NavLink
        exact
        activeClassName={styles.headerLinkActive}
        className={styles.headerLink}
        to="/personal-website/"
      >
        About
      </NavLink>
      <NavLink
        activeClassName={styles.headerLinkActive}
        className={styles.headerLink}
        to="/personal-website/experience"
      >
        Experience
      </NavLink>
    </ul>
  </div>
);

export default Header;
