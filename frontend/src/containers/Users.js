import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List } from '../components';
import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core/';
import { Consumer } from '../contexts/User';
import { Redirect } from 'react-router-dom';
import userService from '../services/users'

const styles = {
    paper: {
        padding: '50px',
    },
};

export default withStyles(styles)(class User extends Component {
    state = {
        users: null,
    };

    renderList = ({id, username}, users) => {
        const { classes } = this.props;
        return (
            <>
            <Grid container
            direction="column"
            justify="flex-start"
            alignItems="center"
            >
                <Paper className={classes.paper}>
                    
                        <Grid item xs={12}>
                            <Typography variant='h4'
                            align='center'
                            >
                                Welcome {username}
                            </Typography>
                            <Typography variant='h6'
                            align='center'
                            >
                                Your user ID is: {id}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <List list={users} userID={parseInt(id)}/>
                        </Grid>
                </Paper>
                </Grid>
            </>
        );
    };

    componentDidMount() {
        userService.init()
            .then(({ showUsers }) => {
                this.setState(() => ({
                    users: showUsers,
                }));
            });
    };

    render() {
        const { users } = this.state;
        return (
            <Consumer>
                {
                    (user) => {
                        if (!user) return <Redirect to="/" />
                        else return (!users) ? <CircularProgress /> : this.renderList(user, users);
                    }
                }
            </Consumer>
        )
    }
});