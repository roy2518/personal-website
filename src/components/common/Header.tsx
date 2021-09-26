import React from 'react';

import 'styles/common/Header.scss';

const Header = (): JSX.Element => (
  <div className="header">
    <ul>
      <li>
        <a className="active" href="/"> Home </a>
      </li>
      <li>
        <a href="/projects"> Projects </a>
      </li>
      <li>
        <a href="/blog"> Blog </a>
      </li>
    </ul>
  </div>
);

export default Header;
