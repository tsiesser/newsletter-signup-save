import React, { Component } from 'react';

import classes from './App.module.scss';
import Breakpoints from './components/hoc/Breakpoints/Breakpoints';
import Signup from './components/organisms/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Breakpoints>
          <Signup/>
        </Breakpoints>
      </div>
    );
  }
}

export default App;
