import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/common/Header.scss';

import { Page } from 'utils/types';

interface HeaderProps {
  page: Page;
}

const Header = ({ page }: HeaderProps): JSX.Element => (
  <div className="header">
    <ul>
      <li>
        <Link className={page === Page.Home ? 'active' : ''} to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      </li>
      <li>
        <Link className={page === Page.Projects ? 'active' : ''} to={`${process.env.PUBLIC_URL}/projects`}> Projects </Link>
      </li>
      <li>
        <Link className={page === Page.Blog ? 'active' : ''} to={`${process.env.PUBLIC_URL}/blog`}> Blog </Link>
      </li>
    </ul>
  </div>
);

export default Header;
