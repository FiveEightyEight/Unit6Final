import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core/';
import Add from '@material-ui/icons/Add';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  linkText: {
    textDecoration: 'none',
    color: 'white',
  },
  linkIcon: {
    textDecoration: 'none',
    color: 'white',
  },
  icon: {
    color: 'white',
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <Link to='/' className={classes.linkText}>
                <Typography variant="h6" color="inherit" className={classes.grow} align='center'>
                  TV Show Watchlist
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/' className={classes.linkText}>
                <Typography variant="body1" color="inherit" className={classes.grow} align='center'>
                  Home
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/users' className={classes.linkText}>
                <Typography variant="body1" color="inherit" className={classes.grow} align='center'>
                  Users
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/shows' className={classes.linkText}>
                <Typography variant="body1" color="inherit" className={classes.grow} align='center'>
                  TV Shows
                </Typography>
              </Link>
            </Grid>

            <Grid item xs>
              <Link to='/user/post' className={classes.linkIcon}>
                <Typography align='center'>
                  <Add className={classes.icon}/>
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);