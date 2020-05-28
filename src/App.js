import React, {Component} from 'react';
import './App.css';
import DefaultLayout from './common/DefaultLayout';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  render(){
    return (
      <HashRouter>
          <Switch>
            <Route  path="/" name="home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
