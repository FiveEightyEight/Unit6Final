import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Home, NavBar } from './components';
import { Profile, Users, ShowProfile, Shows, SwitchUser } from './containers';
import { Route, Switch } from 'react-router-dom';
import { Provider } from './contexts/User';
import userService from './services/users'

const styles = {
  body: {
    marginTop: '66px',
  }
}

export default withStyles(styles)(class App extends Component {

  state = {
    user: null,
  };

  componentDidMount() {
    userService.init()
      .then(data => {
        this.setState(() => ({
          user: data.showUser,
        }))
      });
  };

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    return (
      <>
        <Route path='/' component={NavBar} />
        <div className={classes.body}>
          {
            (!user) ?
                <Route path='/' exact render={()=><Home spinner={true}/>} />
              :
              <Switch>
                <Provider value={user}>
                  <Route path='/' exact component={Home} />
                  <Route path='/users' exact component={Users} />
                  <Route path='/user/:id' exact component={Profile} />
                  <Route path='/switch/:id' exact component={SwitchUser} />
                  <Route path='/show/:id' exact component={ShowProfile} />
                  <Route path='/shows' exact component={Shows} />
                </Provider>
              </Switch>
          }
        </div>
      </>
    );
  }
})