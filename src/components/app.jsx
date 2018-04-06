import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import About from './About';
import Test from './Test';

const App = () => (
  <Router>
    <div className="app">
      <div className="gnav">
        <h1 className="gnav_title"><a href="/"><i className="fa fa-map" />ホテル検索</a></h1>
        <ul className="gnav_lists">
          <li><Link to="/">Top</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
