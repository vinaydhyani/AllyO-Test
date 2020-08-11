import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;