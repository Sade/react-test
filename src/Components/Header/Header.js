import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <MainNavigation/>
      </header>
    );
  }
}

export default Header;
