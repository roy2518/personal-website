import React from 'react';

import Header from 'components/common/Header';

import { Page } from 'utils/types';

const Blog = (): JSX.Element => (
  <div>
    <Header page={Page.Blog} />
    <h2>Blog coming soon!:)</h2>
  </div>
);

export default Blog;
