import React from 'react';

import Header from 'components/common/Header';

import { Page } from 'utils/types';

const Projects = (): JSX.Element => (
  <div>
    <Header page={Page.Projects} />
    <h2>Projects coming soon!!! :)</h2>
  </div>
);

export default Projects;
