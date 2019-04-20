import React, { Component } from 'react';
import { NavBar } from './components';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Route path='/' component={NavBar}/>
      </>
    );
  }
}

export default App;
