import React from 'react';
import './App.css';
import {
  Route, Switch,
} from 'react-router-dom';

// import { Button, Menu, MenuItem } from '@blueprintjs/core'
import Player from './components/Player';
import Game from './components/Game';
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Player} />
        {/* <Route path='/*' exact={true} component={ErrorPage} /> */}
        <Route path="/game" exact={true} component={Game} />
      </Switch>
    </div>
  );
}

export default App;
