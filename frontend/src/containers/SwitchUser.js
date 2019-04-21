import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Typography } from '@material-ui/core/';
import userService from '../services/users'

const styles = {
};

export default withStyles(styles)(class SwitchUser extends Component {
    state = {
        success: null,
        redirect: false,
        id: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params || null;
        if (!id.match(/[0-9]/g)) {
            this.setState({
                redirect: true,
            });
            return;
        };
        userService.init(id)
        .then( success => {
            if (success) {
                this.setState({
                    success,
                    id,
                })
            }
        })
        .catch( err => {
            console.log('error switching: ', err)
        })

    };

    render() {
        const { classes } = this.props;
        const { redirect, success, id} = this.state;
        return (
            <>
                {
                    (redirect) ?
                        <Redirect to='/' />
                        :
                        (success)?
                        <Redirect to={'/users'} />
                        :
                        <CircularProgress/>
                }
            </>
        );
    };
})