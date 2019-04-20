import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Home, NavBar } from './components';
import { Route } from 'react-router-dom';

const styles = {
  body: {
    marginTop: '66px',
  }
}

export default withStyles(styles)(class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Route path='/' component={NavBar} />
        <div className={classes.body}>
          <Route path='/' exact component={Home} />
        </div>
      </>
    );
  }
})