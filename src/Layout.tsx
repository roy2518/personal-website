import { ReactNode } from 'react';

import Header from 'components/common/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

export default Layout;
