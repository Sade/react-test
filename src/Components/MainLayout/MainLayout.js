import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './MainLayout.scss';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default MainLayout;
