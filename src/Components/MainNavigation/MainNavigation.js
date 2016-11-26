import React from 'react';

class MainNavigation extends React.Component {
  render() {
    return (
      <nav className="main-navigation">
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="#/test">test</a></li>
        </ul>
      </nav>
    );
  }
}

export default MainNavigation;
