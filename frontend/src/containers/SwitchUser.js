import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core/';
import userService from '../services/users'


export default (class SwitchUser extends Component {
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
        .then( data => {
            const {success, showUser} = data;
            if (success) {
                this.setState({
                    success,
                    id: showUser.id,
                })
            }
        })
        .catch( err => {
            console.log('error switching: ', err)
        })

    };

    render() {
        const { redirect, success } = this.state;
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