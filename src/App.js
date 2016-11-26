import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import MainLayout from './Components/MainLayout/MainLayout';
import HomePage from './Views/HomePage/HomePage';
import TestPage from './Views/TestPage/TestPage';

// Main component
class App extends React.Component {
  componentDidMount() {
    document.body.className = ''
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={HomePage}/>
          <Route path="test" component={TestPage}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
